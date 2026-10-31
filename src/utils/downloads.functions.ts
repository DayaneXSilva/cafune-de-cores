import { createServerFn } from "@tanstack/react-start";
import type { PaddleEnv } from "@/lib/paddle.server";
import { kit, products } from "@/lib/products";

export type Download = { productId: string; title: string; url: string; filename: string };

/** Confere a transação no Paddle e só então devolve os links dos PDFs comprados. */
export const getDownloads = createServerFn({ method: "POST" })
  .inputValidator((d: { txn: string; environment: PaddleEnv }) => {
    if (typeof d?.txn !== "string" || !/^txn_[a-z0-9]+$/i.test(d.txn)) throw new Error("Pedido inválido");
    if (d.environment !== "sandbox" && d.environment !== "live") throw new Error("Ambiente inválido");
    return d;
  })
  .handler(async ({ data }): Promise<{ status: "paid" | "pending"; downloads: Download[] }> => {
    const { gatewayFetch } = await import("@/lib/paddle.server");
    const { pdfFiles } = await import("@/lib/files.server");
    const res = await gatewayFetch(data.environment, `/transactions/${data.txn}`);
    if (!res.ok) throw new Error("Pedido não encontrado");
    const txn = (await res.json()).data as { status: string; items: { price: { id: string } }[] };
    if (txn.status !== "paid" && txn.status !== "completed") return { status: "pending", downloads: [] };

    // Descobre quais produtos foram pagos comparando os preços da transação com o catálogo.
    const catalog = [...products.map((p) => ({ id: p.id, priceId: p.priceId })), { id: kit.id, priceId: kit.priceId }];
    const paidPriceIds = new Set(txn.items.map((i) => i.price.id));
    const owned = new Set<string>();
    for (const item of catalog) {
      if (!item.priceId) continue;
      const r = await gatewayFetch(data.environment, `/prices?external_id=${encodeURIComponent(item.priceId)}`);
      const id = (await r.json()).data?.[0]?.id as string | undefined;
      if (id && paidPriceIds.has(id)) {
        if (item.id === kit.id) products.forEach((p) => owned.add(p.id));
        else owned.add(item.id);
      }
    }
    const downloads = products
      .filter((p) => owned.has(p.id) && pdfFiles[p.id])
      .map((p) => ({ productId: p.id, title: `Vol. ${p.volume} — ${p.title}`, ...pdfFiles[p.id]! }));
    return { status: "paid", downloads };
  });
