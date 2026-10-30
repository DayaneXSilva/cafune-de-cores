import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Mail } from "lucide-react";
import { useEffect } from "react";
import logo from "@/assets/logo-horizontal-cor.webp.asset.json";
import { products, track } from "@/lib/products";

type Search = { produto?: string };

export const Route = createFileRoute("/obrigado")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    produto: typeof s.produto === "string" ? s.produto : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Compra confirmada · Cafuné de Cores" },
      { name: "description", content: "Obrigado pela compra do seu livro digital Cafuné de Cores." },
      { property: "og:title", content: "Compra confirmada · Cafuné de Cores" },
      { property: "og:description", content: "Obrigado pela compra do seu livro digital Cafuné de Cores." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Obrigado,
});

function Obrigado() {
  const { produto } = Route.useSearch();
  const p = products.find((x) => x.id === produto);
  useEffect(() => {
    if (p) track("purchase", { productId: p.id });
  }, [p]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-soft px-4 py-16">
      <div className="w-full max-w-lg rounded-[2rem] border-2 border-grafite bg-card p-8 text-center shadow-soft">
        <img src={logo.url} alt="Cafuné de Cores" className="mx-auto h-16 w-auto" />
        <CheckCircle2 className="mx-auto mt-6 h-14 w-14 text-tiffany-profundo" aria-hidden />
        <h1 className="mt-4 font-display text-3xl font-bold text-lavanda">Obrigado pela compra!</h1>
        <p className="mt-3 text-muted-foreground">
          {p ? (
            <>Seu livro digital <strong className="text-foreground">Vol. {p.volume} — {p.title}</strong> está a caminho.</>
          ) : (
            <>Seu pedido foi recebido.</>
          )}
        </p>
        <div className="mt-6 flex items-start gap-3 rounded-2xl bg-azul-bebe/40 p-4 text-left text-sm">
          <Mail className="mt-0.5 h-5 w-5 shrink-0 text-sereno" aria-hidden />
          <p>
            Assim que o pagamento for confirmado, o link de download do PDF é liberado para você.
            Lembre-se: é um produto 100% digital, nenhum livro físico será enviado.
          </p>
        </div>
        <Link to="/" className="sticker mt-8 inline-flex rounded-full bg-primary px-6 py-3 font-display font-semibold text-primary-foreground">
          Voltar para a coleção
        </Link>
      </div>
    </main>
  );
}
