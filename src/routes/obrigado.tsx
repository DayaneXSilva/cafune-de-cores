import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Download, Loader2, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/logo-horizontal-cor.webp.asset.json";
import { products, track } from "@/lib/products";
import { covers } from "@/lib/covers";
import { getPaddleEnvironment } from "@/lib/paddle";
import { getDownloads, type Download as DL } from "@/utils/downloads.functions";

type Search = { produto: string; pedido: string };

export const Route = createFileRoute("/obrigado")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    produto: typeof s["produto"] === "string" ? (s["produto"] as string) : "",
    pedido: typeof s["pedido"] === "string" ? (s["pedido"] as string) : "",
  }),
  head: () => ({
    meta: [
      { title: "Compra confirmada · Cafuné de Cores" },
      { name: "description", content: "Obrigado pela compra do seu livro digital Cafuné de Cores." },
      { property: "og:title", content: "Compra confirmada · Cafuné de Cores" },
      { property: "og:description", content: "Obrigado pela compra do seu livro digital Cafuné de Cores." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Obrigado,
});

function Obrigado() {
  const { produto, pedido } = Route.useSearch();
  const p = products.find((x) => x.id === produto);
  const [state, setState] = useState<"loading" | "ready" | "pending" | "error">(pedido ? "loading" : "error");
  const [files, setFiles] = useState<DL[]>([]);

  useEffect(() => {
    if (p) track("purchase", { productId: p.id });
  }, [p]);

  useEffect(() => {
    if (!pedido) return;
    let tries = 0;
    let stop = false;
    const run = async () => {
      try {
        const r = await getDownloads({ data: { txn: pedido, environment: getPaddleEnvironment() } });
        if (stop) return;
        if (r.status === "paid") { setFiles(r.downloads); setState("ready"); return; }
        if (++tries < 10) setTimeout(run, 3000); else setState("pending");
      } catch { if (!stop) setState("error"); }
    };
    run();
    return () => { stop = true; };
  }, [pedido]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-soft px-4 py-16">
      <div className="w-full max-w-xl rounded-[2rem] border-2 border-grafite bg-card p-8 text-center shadow-soft">
        <img src={logo.url} alt="Cafuné de Cores" className="mx-auto h-16 w-auto" />
        <CheckCircle2 className="mx-auto mt-6 h-14 w-14 text-tiffany-profundo" aria-hidden />
        <h1 className="mt-4 font-display text-3xl font-bold text-lavanda">Obrigado pela compra!</h1>

        {state === "loading" && (
          <p className="mt-4 inline-flex items-center gap-2 text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Confirmando seu pagamento…
          </p>
        )}

        {state === "ready" && (
          <ul className="mt-6 grid gap-3 text-left">
            {files.map((f) => (
              <li key={f.productId} className="flex items-center gap-4 rounded-2xl border-2 border-grafite/20 p-3">
                <img src={covers[f.productId]} alt="" className="h-20 w-14 rounded-md border border-grafite/30 object-cover" />
                <span className="flex-1 font-display font-semibold">{f.title}</span>
                <a href={f.url} download={f.filename} className="sticker inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 font-display text-sm font-semibold text-primary-foreground">
                  <Download className="h-4 w-4" aria-hidden /> Baixar PDF
                </a>
              </li>
            ))}
          </ul>
        )}

        {(state === "pending" || state === "error") && (
          <div className="mt-6 flex items-start gap-3 rounded-2xl bg-azul-bebe/40 p-4 text-left text-sm">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-sereno" aria-hidden />
            <p>
              {state === "pending"
                ? "Seu pagamento ainda está sendo confirmado. Atualize esta página em alguns minutos para liberar o download."
                : "Não encontramos um pedido confirmado neste link. Se você acabou de pagar, volte pelo link exibido ao final do pagamento."}
            </p>
          </div>
        )}

        <p className="mt-6 text-xs text-muted-foreground">Produto 100% digital (PDF). Nenhum livro físico será enviado.</p>
        <Link to="/" className="sticker mt-6 inline-flex rounded-full bg-card px-6 py-3 font-display font-semibold">
          Voltar para a coleção
        </Link>
      </div>
    </main>
  );
}
