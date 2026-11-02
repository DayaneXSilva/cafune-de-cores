import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import logo from "@/assets/logo-horizontal-cor.webp.asset.json";

export const SELLER = "Cafune das Cores";
export const WHATSAPP = "+55 11 95104-2381";
export const WHATSAPP_URL = "https://wa.me/5511951042381";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto max-w-3xl px-4 py-4">
          <Link to="/"><img src={logo.url} alt="Cafuné de Cores" className="h-10 w-auto" /></Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="font-display text-3xl font-bold text-primary-foreground" style={{ color: "var(--lavanda, inherit)" }}>{title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">Última atualização: novembro de 2026</p>
        <div className="mt-8 space-y-5 leading-relaxed [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_ul]:list-disc [&_ul]:pl-6 [&_a]:underline">
          {children}
        </div>
        <p className="mt-12 text-sm"><Link to="/" className="underline">← Voltar para a loja</Link></p>
      </main>
    </div>
  );
}
