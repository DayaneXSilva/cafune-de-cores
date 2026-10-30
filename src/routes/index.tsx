import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  BookOpen, ChevronLeft, ChevronRight, FileText, Heart, Menu, MessageCircle, Pencil, Printer,
  Sparkles, Sprout, Star, Timer, X, Flower2, Leaf, MousePointerClick, CreditCard, Download, PartyPopper,
  Hand, Plus,
} from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import logoH from "@/assets/logo-horizontal-cor.webp.asset.json";
import logoV from "@/assets/logo-vertical-cor.png.asset.json";
import { Placeholder } from "@/components/landing/Placeholder";
import { BuyButton } from "@/components/landing/BuyButton";
import { products, kit, totalPages, toneClass, formatPrice, track, type Product } from "@/lib/products";
import { cn } from "@/lib/utils";

const TITLE = "Cafuné Brinca e Aprende · 6 livros educativos digitais em PDF";
const DESC =
  "Coleção digital com 6 livros de atividades para crianças de 3 a 6 anos, alinhada à BNCC. Arquivos em PDF para imprimir em A4.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { href: "#colecao", label: "Livros" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#metodo", label: "Método" },
  { href: "#por-dentro", label: "Por dentro" },
  { href: "#duvidas", label: "Dúvidas" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Toaster position="top-center" />
      <DigitalBanner />
      <Header />
      <main>
        <Hero />
        <Collection />
        <HowItWorks />
        <Method />
        <Peek />
        {kit.enabled && <Kit />}
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

function DigitalBanner() {
  return (
    <div className="bg-grafite px-4 py-2 text-center text-xs font-bold tracking-wide text-creme sm:text-sm">
      <FileText className="mr-1.5 inline h-4 w-4 align-[-3px]" aria-hidden />
      Produtos 100% digitais em PDF · Nenhum livro físico é enviado
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#topo" aria-label="Cafuné de Cores, início">
          <img src={logoH.url} alt="Cafuné de Cores" className="h-10 w-auto sm:h-12" />
        </a>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="font-semibold text-foreground/80 transition-colors hover:text-sereno">
              {n.label}
            </a>
          ))}
          <a href="#colecao" className="sticker rounded-full bg-primary px-4 py-2 font-display text-sm font-semibold text-primary-foreground">
            Escolher livro
          </a>
        </nav>
        <button className="md:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border px-4 pb-4 md:hidden" aria-label="Principal móvel">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-2.5 font-semibold">
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function SectionTitle({ title, sub, id }: { title: string; sub?: string; id?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 id={id} className="font-display text-3xl font-bold text-lavanda sm:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-lg text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Hero() {
  const highlights = [
    { icon: BookOpen, t: "6 livros educativos" },
    { icon: FileText, t: "Arquivos digitais em PDF" },
    { icon: Printer, t: "Atividades para imprimir em A4" },
    { icon: Star, t: "Propostas alinhadas à BNCC" },
    { icon: Timer, t: "Rotina sugerida de 10 minutos por dia" },
  ];
  return (
    <section id="topo" className="relative overflow-hidden">
      <Sparkles className="absolute left-[6%] top-10 h-6 w-6 text-chiclete/60" aria-hidden />
      <Heart className="absolute right-[45%] top-16 hidden h-5 w-5 fill-rosa-bebe text-chiclete/60 lg:block" aria-hidden />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 lg:grid-cols-2 lg:py-20">
        <div>
          <span className="inline-block -rotate-1 rounded-full border-2 border-grafite bg-tiffany px-4 py-1.5 font-display text-xs font-semibold tracking-wider">
            COLEÇÃO DIGITAL • 6 LIVROS EDUCATIVOS
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
            Pequenas descobertas, <span className="text-lavanda">grandes aprendizados!</span>
          </h1>
          <p className="mt-5 text-lg sm:text-xl">
            Transforme alguns minutinhos do dia em momentos especiais de aprendizado, criatividade e diversão com a coleção{" "}
            <strong>Cafuné Brinca e Aprende</strong>.
          </p>
          <p className="mt-3 text-muted-foreground">
            Atividades educativas para crianças de 3 a 6 anos, organizadas por níveis de desenvolvimento, para usar em casa ou na rotina educativa.
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {highlights.map(({ icon: I, t }) => (
              <li key={t} className="flex items-center gap-2 font-semibold">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-azul-bebe"><I className="h-4 w-4" aria-hidden /></span>
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#colecao" className="sticker rounded-full bg-primary px-7 py-4 font-display font-semibold tracking-wide text-primary-foreground">
              CONHECER OS 6 LIVROS
            </a>
            <a href="#como-funciona" className="sticker rounded-full bg-card px-7 py-4 font-display font-semibold tracking-wide">
              VER COMO FUNCIONA
            </a>
          </div>
          <p className="mt-6 inline-flex items-center gap-2 rounded-2xl border-2 border-dashed border-chiclete bg-rosa-bebe/40 px-4 py-2.5 text-sm font-bold">
            <FileText className="h-4 w-4 text-chiclete" aria-hidden />
            Produto 100% digital (PDF). Nenhum livro físico será enviado.
          </p>
        </div>
        <div className="relative">
          <div className="absolute inset-6 rounded-[3rem] bg-gradient-soft opacity-70 blur-2xl" aria-hidden />
          <div className="relative grid grid-cols-3 gap-3 sm:gap-4">
            {products.map((p, i) => (
              <div key={p.id} className="animate-floaty" style={{ animationDelay: `${i * 0.4}s`, ["--r" as string]: `${(i % 2 ? 2 : -2)}deg` }}>
                <Placeholder label={`Capa Vol. ${p.volume}`} className={cn("aspect-[3/4] rounded-2xl shadow-soft", toneClass[p.tone])} />
              </div>
            ))}
          </div>
          <Placeholder label="Cafu" className="absolute -bottom-8 -left-4 h-28 w-28 rounded-full bg-caramelo/30 sm:h-32 sm:w-32" />
          <Pencil className="absolute -right-2 -top-4 h-8 w-8 rotate-12 text-lavanda" aria-hidden />
        </div>
      </div>
    </section>
  );
}

function ProductCard({ p, onDetails }: { p: Product; onDetails: () => void }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[2rem] border-2 border-grafite bg-card shadow-soft transition-transform hover:-translate-y-1">
      <div className={cn("p-5", toneClass[p.tone])}>
        <Placeholder label={`Capa — ${p.title}`} className="mx-auto aspect-[3/4] w-3/4 rounded-xl" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-2">
          <span className="font-display text-sm font-semibold text-lavanda">VOLUME {p.volume}</span>
          <span className="rounded-full bg-grafite px-3 py-1 text-[11px] font-extrabold tracking-wider text-creme">DIGITAL • PDF</span>
        </div>
        <h3 className="mt-2 font-display text-2xl font-bold">{p.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Habilidades trabalhadas">
          {p.skills.map((s) => (
            <li key={s} className="rounded-full bg-muted px-2.5 py-1 text-xs font-semibold">{s}</li>
          ))}
        </ul>
        <div className="mt-4 flex items-center justify-between text-sm font-bold">
          <span>{p.pages} páginas</span>
          {formatPrice(p.price) && <span className="font-display text-xl text-chiclete">{formatPrice(p.price)}</span>}
        </div>
        <div className="mt-5 grid gap-2.5">
          <button onClick={onDetails} className="sticker rounded-full bg-card px-5 py-2.5 font-display text-sm font-semibold">
            VER DETALHES
          </button>
          <BuyButton productId={p.id} priceId={p.priceId} />
        </div>
      </div>
    </article>
  );
}

function Collection() {
  const [detail, setDetail] = useState<Product | null>(null);
  return (
    <section id="colecao" aria-labelledby="colecao-t" className="scroll-mt-24 bg-azul-bebe/25 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          id="colecao-t"
          title="Um universo de descobertas em 6 livros!"
          sub="Cada volume apresenta atividades e brincadeiras que acompanham diferentes momentos do desenvolvimento infantil."
        />
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} onDetails={() => { setDetail(p); track("view_product", { productId: p.id }); }} />
          ))}
        </div>
      </div>
      {detail && (
        <Modal onClose={() => setDetail(null)} label={detail.title}>
          <div className="grid gap-6 sm:grid-cols-[180px_1fr]">
            <Placeholder label={`Capa — ${detail.title}`} className={cn("aspect-[3/4] rounded-xl", toneClass[detail.tone])} />
            <div>
              <span className="font-display text-sm font-semibold text-lavanda">VOLUME {detail.volume} · DIGITAL • PDF</span>
              <h3 className="mt-1 font-display text-2xl font-bold">{detail.title}</h3>
              <p className="mt-3 text-muted-foreground">{detail.description}</p>
              <p className="mt-3 text-sm"><strong>Habilidades:</strong> {detail.skills.join(", ")}.</p>
              <p className="mt-1 text-sm"><strong>{detail.pages} páginas</strong> · Imprimir em A4 · Crianças de 3 a 6 anos</p>
              <p className="mt-3 text-xs font-bold text-chiclete">Produto digital em PDF. Não acompanha versão física.</p>
              <BuyButton productId={detail.id} priceId={detail.priceId} className="mt-5" />
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}

function Modal({ children, onClose, label }: { children: React.ReactNode; onClose: () => void; label: string }) {
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [onClose]);
  return (
    <div role="dialog" aria-modal="true" aria-label={label} className="fixed inset-0 z-50 grid place-items-center bg-grafite/60 p-4" onClick={onClose}>
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] border-2 border-grafite bg-card p-6 sm:p-8" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} aria-label="Fechar" className="absolute right-4 top-4 rounded-full p-1 hover:bg-muted"><X /></button>
        {children}
      </div>
    </div>
  );
}

function HowItWorks() {
  const steps = [
    { icon: MousePointerClick, t: "Escolha seu livro", d: "Explore os seis volumes e selecione o tema desejado.", c: "bg-lilas-bebe" },
    { icon: CreditCard, t: "Faça sua compra", d: "Finalize o pedido em um ambiente de pagamento seguro.", c: "bg-rosa-bebe" },
    { icon: Download, t: "Receba seu PDF", d: "Após a confirmação do pagamento, acesse o arquivo digital do livro adquirido.", c: "bg-azul-bebe" },
    { icon: PartyPopper, t: "Comece a diversão", d: "Abra o PDF no dispositivo ou imprima as atividades em papel A4.", c: "bg-tiffany" },
  ];
  return (
    <section id="como-funciona" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle title="Escolheu, recebeu, brincou e aprendeu!" />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: I, t, d, c }, i) => (
            <li key={t} className="relative rounded-[2rem] border-2 border-grafite bg-card p-6 text-center shadow-soft">
              <span className="absolute -top-4 left-1/2 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full border-2 border-grafite bg-primary font-display font-bold text-primary-foreground">{i + 1}</span>
              <div className={cn("mx-auto mt-3 grid h-16 w-16 place-items-center rounded-3xl", c)}><I className="h-8 w-8" aria-hidden /></div>
              <h3 className="mt-4 font-display text-xl font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
        <p className="mx-auto mt-10 max-w-2xl rounded-2xl bg-tiffany/40 px-6 py-4 text-center font-bold">
          Sem frete. Sem espera por entrega física. Material digital para utilizar conforme as orientações do livro.
        </p>
      </div>
    </section>
  );
}

function Method() {
  const steps = [
    { icon: Hand, t: "Minuto do corpo", d: "Uma pequena experiência com movimento ou objetos do cotidiano." },
    { icon: Pencil, t: "Atividade no papel", d: "A criança explora a proposta educativa com orientação simples." },
    { icon: MessageCircle, t: "Fale junto", d: "O adulto participa com perguntas, conversas e incentivo." },
  ];
  const levels = [
    { icon: Sprout, t: "Semente", a: "3 anos", c: "bg-rosa-bebe" },
    { icon: Leaf, t: "Broto", a: "4 anos", c: "bg-azul-bebe" },
    { icon: Flower2, t: "Flor", a: "5 e 6 anos", c: "bg-tiffany" },
  ];
  return (
    <section id="metodo" className="scroll-mt-24 bg-lilas-bebe/30 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle title="Aprender começa com uma brincadeira!" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map(({ icon: I, t, d }) => (
            <div key={t} className="rounded-[2rem] bg-card p-7 shadow-soft">
              <I className="h-9 w-9 text-lavanda" aria-hidden />
              <h3 className="mt-3 font-display text-xl font-bold">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            {levels.map(({ icon: I, t, a, c }) => (
              <div key={t} className={cn("flex items-center gap-3 rounded-full border-2 border-grafite px-5 py-3", c)}>
                <I className="h-6 w-6" aria-hidden />
                <span className="font-display text-lg font-bold">{t}</span>
                <span className="text-sm font-semibold">— {a}</span>
              </div>
            ))}
          </div>
          <Placeholder label="Cafu" className="mx-auto h-32 w-32 rounded-full bg-caramelo/30" />
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-lg">
          Atividades organizadas para respeitar diferentes etapas de desenvolvimento, com uma proposta de aproximadamente 10 minutos por dia.
        </p>
      </div>
    </section>
  );
}

const SAMPLES_PER_BOOK = 3;

function Peek() {
  const [vol, setVol] = useState(0);
  const [zoom, setZoom] = useState<number | null>(null);
  const p = products[vol];
  return (
    <section id="por-dentro" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle title="Uma espiadinha no mundo Cafuné!" sub="Escolha um volume e veja algumas páginas de amostra." />
        <div role="tablist" aria-label="Volumes" className="mt-10 flex flex-wrap justify-center gap-2">
          {products.map((x, i) => (
            <button
              key={x.id}
              role="tab"
              aria-selected={i === vol}
              onClick={() => { setVol(i); track("view_product", { productId: x.id }); }}
              className={cn("rounded-full border-2 border-grafite px-4 py-2 text-sm font-bold transition-colors", i === vol ? "bg-lavanda text-primary-foreground" : "bg-card hover:bg-muted")}
            >
              Vol. {x.volume}
            </button>
          ))}
        </div>
        <div className={cn("mt-8 rounded-[2.5rem] p-6 sm:p-10", toneClass[p.tone])}>
          <h3 className="text-center font-display text-2xl font-bold">{p.title}</h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {Array.from({ length: SAMPLES_PER_BOOK }).map((_, i) => (
              <button key={i} onClick={() => setZoom(i)} aria-label={`Ampliar página de amostra ${i + 1}`} className="group relative rounded-2xl transition-transform hover:-translate-y-1">
                <Placeholder label={`Prévia ${i + 1}`} className="aspect-[210/297] rounded-2xl bg-card" />
                <Plus className="absolute right-3 top-3 h-6 w-6 rounded-full bg-grafite p-1 text-creme opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
              </button>
            ))}
          </div>
          <div className="mt-8 text-center">
            <BuyButton productId={p.id} priceId={p.priceId} label="QUERO ESTE LIVRO" />
          </div>
        </div>
      </div>
      {zoom !== null && (
        <Modal onClose={() => setZoom(null)} label={`Prévia ${zoom + 1} de ${p.title}`}>
          <div className="flex items-center gap-3">
            <button aria-label="Prévia anterior" onClick={() => setZoom((zoom + SAMPLES_PER_BOOK - 1) % SAMPLES_PER_BOOK)} className="rounded-full border-2 border-grafite p-2"><ChevronLeft /></button>
            <Placeholder label={`${p.title} — prévia ${zoom + 1}`} className="aspect-[210/297] flex-1 rounded-2xl" />
            <button aria-label="Próxima prévia" onClick={() => setZoom((zoom + 1) % SAMPLES_PER_BOOK)} className="rounded-full border-2 border-grafite p-2"><ChevronRight /></button>
          </div>
        </Modal>
      )}
    </section>
  );
}

function Kit() {
  return (
    <section id="kit" className="py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-[3rem] border-2 border-grafite bg-gradient-soft px-6 py-12 sm:px-12 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">O mundo Cafuné inteiro em uma só coleção!</h2>
          <p className="mt-3 text-lg">Seis volumes, diferentes descobertas e muitas possibilidades para brincar e aprender.</p>
          <ul className="mt-6 space-y-1.5 font-semibold">
            {products.map((p) => <li key={p.id}>Vol. {p.volume} — {p.title}</li>)}
          </ul>
          <p className="mt-5 font-bold">{totalPages} páginas · Formato digital PDF</p>
          {formatPrice(kit.price) && <p className="mt-2 font-display text-3xl font-bold text-chiclete">{formatPrice(kit.price)}</p>}
          <BuyButton productId={kit.id} priceId={kit.priceId} label="QUERO A COLEÇÃO COMPLETA" className="mt-6 px-7 py-4 text-base" />
        </div>
        <Placeholder label="Mockup da coleção completa" className="aspect-[4/3] rounded-[2rem]" />
      </div>
    </section>
  );
}

const faqs = [
  ["Os livros são físicos?", "Não. Todos os volumes são produtos digitais em PDF. Não há envio de livros impressos."],
  ["Posso imprimir as atividades?", "Sim. Os materiais foram preparados para impressão em papel A4, conforme as orientações de cada volume."],
  ["Para qual idade são indicados?", "A coleção Cafuné Brinca e Aprende apresenta atividades organizadas para crianças de 3 a 6 anos."],
  ["Preciso comprar todos os livros?", "Não. Você pode escolher um volume individualmente ou adquirir a coleção completa, caso a oferta do kit esteja disponível."],
  ["Como recebo meu livro?", "Após a confirmação do pagamento, o arquivo digital fica disponível pelo método de entrega configurado na loja."],
  ["Posso usar no celular ou computador?", "Os arquivos são PDFs e podem ser abertos em dispositivos com leitor compatível. Algumas atividades foram pensadas especialmente para impressão."],
  ["Os livros possuem atividades alinhadas à BNCC?", "Sim. Os materiais indicam campos de experiências e habilidades relacionados à BNCC."],
];

function Faq() {
  return (
    <section id="duvidas" className="scroll-mt-24 bg-rosa-bebe/25 py-20">
      <div className="mx-auto max-w-3xl px-4">
        <SectionTitle title="Perguntas frequentes" />
        <div className="mt-10 space-y-3">
          {faqs.map(([q, a]) => (
            <details key={q} className="group rounded-3xl border-2 border-grafite bg-card px-6 py-4 open:shadow-soft">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold">
                {q}
                <Plus className="h-5 w-5 shrink-0 text-chiclete transition-transform group-open:rotate-45" aria-hidden />
              </summary>
              <p className="mt-3 text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-gradient-soft py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <img src={logoV.url} alt="" className="mx-auto h-28 w-auto" loading="lazy" />
        <h2 className="mt-6 font-display text-3xl font-bold sm:text-5xl">O próximo aprendizado pode começar com uma brincadeira!</h2>
        <p className="mt-4 text-lg">Escolha um livro, descubra as atividades e crie momentos especiais de aprendizado com a criança.</p>
        <a href="#colecao" className="sticker mt-8 inline-flex rounded-full bg-primary px-8 py-4 font-display text-lg font-semibold tracking-wide text-primary-foreground">
          ESCOLHER MEU LIVRO DIGITAL
        </a>
        <p className="mt-5 text-sm font-bold">Livros digitais em PDF • Não acompanha versão física.</p>
      </div>
    </section>
  );
}

function Footer() {
  const legal = ["Política de privacidade", "Termos de compra e uso", "Entrega digital, cancelamento e reembolso"];
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
        <div>
          <img src={logoH.url} alt="Cafuné de Cores" className="h-12 w-auto" loading="lazy" />
          <p className="mt-3 text-sm text-muted-foreground">Cafuné de Cores · Livros educativos digitais em PDF.</p>
        </div>
        <nav aria-label="Rodapé" className="flex flex-col gap-2 text-sm font-semibold">
          <a href="#colecao" className="hover:text-sereno">Catálogo</a>
          <a href="#como-funciona" className="hover:text-sereno">Como funciona</a>
          <a href="#duvidas" className="hover:text-sereno">Dúvidas</a>
          <span className="text-muted-foreground">Contato (em breve)</span>
        </nav>
        <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
          {legal.map((l) => <li key={l}>{l} (em breve)</li>)}
        </ul>
      </div>
      <p className="mt-10 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Cafuné de Cores</p>
    </footer>
  );
}
