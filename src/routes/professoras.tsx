import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, FileText, Heart, MessageCircle, Plus, ShieldCheck, Sparkles, X } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import logoH from "@/assets/logo-horizontal-cor.webp.asset.json";
import logoV from "@/assets/logo-vertical-cor.png.asset.json";
import kitCover from "@/assets/kit-completo.jpg.asset.json";
import { covers } from "@/lib/covers";
import { previews } from "@/lib/previews";
import { KitBuyButton } from "@/components/landing/KitBuyButton";
import { products, kit, totalPages, toneClass, formatPrice, track } from "@/lib/products";
import { cn } from "@/lib/utils";

const TITLE = "Recupere seus domingos · Kit Cafuné para professoras de educação infantil";
const DESC =
  "273 páginas de atividades prontas, por idade e por eixo, alinhadas à BNCC. 6 livros em PDF por R$ 27,90, pagamento único.";
const WA = "https://wa.me/5511951042381";
const GARANTIA = 30;

export const Route = createFileRoute("/professoras")({
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
  component: Professoras,
});

const H2 = ({ children, sub }: { children: React.ReactNode; sub?: string }) => (
  <div className="mx-auto max-w-2xl text-center">
    <h2 className="font-display text-3xl font-bold text-lavanda sm:text-4xl">{children}</h2>
    {sub && <p className="mt-3 text-lg text-muted-foreground">{sub}</p>}
  </div>
);

const price = formatPrice(kit.price);

function Professoras() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Toaster position="top-center" />
      <div className="bg-grafite px-4 py-2 text-center text-xs font-bold tracking-wide text-creme sm:text-sm">
        <FileText className="mr-1.5 inline h-4 w-4 align-[-3px]" aria-hidden />
        Produto digital em PDF · Entrega imediata por e-mail, via Cakto.
      </div>
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <img src={logoH.url} alt="Cafuné de Cores" className="h-10 w-auto sm:h-12" />
          <a href="#oferta" className="sticker rounded-full bg-primary px-4 py-2 font-display text-sm font-semibold text-primary-foreground">Quero o kit</a>
        </div>
      </header>
      <main>
        <Hero />
        <Dores />
        <Solucao />
        <Livros />
        <Ano />
        <Tabela />
        <Como />
        <Galeria />
        <Escolas />
        <Oferta />
        <Garantia />
        <Faq />
        <Final />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  const bullets = [
    "Atividades para 3, 4, 5 e 6 anos, em três níveis: Semente, Broto e Flor.",
    "Três passos em cada página: Minuto do corpo, atividade e Fale junto.",
    "Campos de experiência da BNCC indicados no rodapé de cada página.",
    "Páginas em A4, prontas para imprimir quantas vezes você precisar.",
    "Selo \"Plastifique\" nas páginas que você pode reutilizar.",
    "Entrega por e-mail logo após o pagamento. Nada chega pelo correio.",
  ];
  return (
    <section className="relative overflow-hidden">
      <Sparkles className="absolute left-[6%] top-10 h-6 w-6 text-chiclete/60" aria-hidden />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 lg:grid-cols-2 lg:py-20">
        <div>
          <span className="inline-block -rotate-1 rounded-full border-2 border-grafite bg-tiffany px-4 py-1.5 font-display text-xs font-semibold tracking-wider">
            PARA PROFESSORAS DE EDUCAÇÃO INFANTIL
          </span>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] lg:text-6xl">
            Recupere seus <span className="text-lavanda">domingos.</span>
          </h1>
          <p className="mt-5 text-lg sm:text-xl">
            {totalPages} páginas de atividades prontas, organizadas por idade e por eixo, alinhadas à BNCC. Você imprime hoje e aplica amanhã.
          </p>
          <ul className="mt-6 space-y-2">
            {bullets.map((b) => (
              <li key={b} className="flex gap-2 font-semibold">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-chiclete" aria-hidden /> {b}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <p className="text-sm font-bold text-muted-foreground">De <s>R$ 89,40</s> por</p>
            <p className="font-display text-5xl font-bold text-chiclete">{price}</p>
            <p className="text-sm font-semibold text-muted-foreground">Pagamento único. Menos de R$ 4,65 por livro.</p>
            <KitBuyButton label="QUERO MEUS DOMINGOS DE VOLTA" className="mt-5 text-base" />
          </div>
        </div>
        <img src={kitCover.url} alt="Capas dos 6 volumes do kit Cafuné Brinca e Aprende" width={1600} height={1200} className="aspect-[4/3] w-full rounded-[2rem] border-2 border-grafite object-cover shadow-soft" />
      </div>
    </section>
  );
}

function Dores() {
  const cards = [
    ["Seu domingo virou dia de planejamento?", "Você passa o fim de semana caçando atividade para a semana, enquanto a família espera por você.", "Com o kit, a semana já tem atividade pronta. Seu domingo volta a ser seu."],
    ["Atividade solta na internet nem sempre dá conta.", "Desenho pixelado, erro de português e nenhuma sequência. No fim, você ainda precisa adaptar tudo.", "Cada página segue uma sequência pensada para a idade e para o eixo da atividade."],
    ["Uma sala, níveis diferentes e a BNCC no planejamento.", "Um já escreve o nome, outro ainda não segura o lápis, e a coordenação pede o alinhamento no registro.", "Os três níveis estão no mesmo livro, e a BNCC aparece em cada página."],
  ];
  return (
    <section className="bg-rosa-bebe/25 py-20">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
        {cards.map(([t, d, a]) => (
          <div key={t} className="rounded-3xl border-2 border-grafite bg-card p-6 shadow-soft">
            <h3 className="font-display text-xl font-bold">{t}</h3>
            <p className="mt-3 text-muted-foreground">{d}</p>
            <p className="mt-4 flex gap-2 font-semibold"><Heart className="mt-0.5 h-5 w-5 shrink-0 fill-rosa-bebe text-chiclete" aria-hidden />{a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Solucao() {
  const steps = [
    ["Minuto do corpo", "a criança aprende primeiro com o movimento."],
    ["Atividade", "você lê o comando em voz alta e deixa a criança tentar sozinha."],
    ["Fale junto", "frases prontas para conversar e elogiar o esforço."],
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <H2 sub="Você escolhe o livro do dia, imprime e aplica. Serve para a aula planejada, para o dia de chuva, para a aula que sobrou e para a criança que terminou antes.">
          Um banco de atividades pronto para a sua sala.
        </H2>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border-2 border-grafite bg-azul-bebe/50 p-8">
            <h3 className="font-display text-2xl font-bold">Semente, Broto e Flor no mesmo livro.</h3>
            <p className="mt-3">Para turmas com idades e ritmos diferentes, cada livro traz atividades para três níveis. Você diferencia a aula sem montar três planejamentos.</p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[["Semente", "3 anos"], ["Broto", "4 anos"], ["Flor", "5 e 6 anos"]].map(([n, i]) => (
                <div key={n} className="rounded-2xl border-2 border-grafite bg-card p-3">
                  <p className="font-display font-bold">{n}</p><p className="text-sm text-muted-foreground">{i}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border-2 border-grafite bg-lilas-bebe/60 p-8">
            <h3 className="font-display text-2xl font-bold">Uma sequência de aula pronta em cada página.</h3>
            <p className="mt-3">Primeiro o corpo, depois o papel, por fim a conversa.</p>
            <ol className="mt-5 space-y-3">
              {steps.map(([t, d], i) => (
                <li key={t} className="flex gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary font-display font-bold text-primary-foreground">{i + 1}</span>
                  <p><strong>{t}:</strong> {d}</p>
                </li>
              ))}
            </ol>
            <p className="mt-5 text-sm font-semibold">Extra: carinhas "Como foi?" para a criança avaliar a própria atividade.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const sala: Record<string, { campo: string; dev: string; uso: string; galeria: string }> = {
  "maozinhas-magicas": { campo: "Corpo, gestos e movimentos; Traços, sons, cores e formas", dev: "coordenação motora fina, controle do lápis e atenção.", uso: "na rotina de chegada, para aquecer a mão antes do registro.", galeria: "Traçados que preparam a mão para o lápis, do reto às curvas." },
  "kit-alfabetizacao": { campo: "Escuta, fala, pensamento e imaginação", dev: "consciência fonológica, sons, rimas, sílabas, vogais e primeiras palavras.", uso: "na roda de leitura, com rimas e sons do começo das palavras. O nome da criança é o ponto de partida.", galeria: "Sons, rimas e letras, começando pelo nome da criança." },
  "contando-com-o-cafu": { campo: "Espaços, tempos, quantidades, relações e transformações", dev: "números, quantidades, sequências, comparações e raciocínio lógico.", uso: "na mesa de matemática, começando com objetos reais antes de chegar ao número escrito.", galeria: "Contagem com objetos reais antes de chegar ao número escrito." },
  "cores-e-formas": { campo: "Traços, sons, cores e formas; Espaços, tempos, quantidades, relações e transformações", dev: "cores e misturas, formas geométricas, classificação e montagem de figuras.", uso: "no cantinho de artes e na exploração de formas pela sala.", galeria: "Pintar, misturar e montar figuras com recortes." },
  "jogos-do-cafu": { campo: "Escuta, fala, pensamento e imaginação; O eu, o outro e o nós", dev: "memória, atenção, esperar a vez, seguir regras e conviver.", uso: "em cantinhos e trabalho em grupo, com memória, dominó e bingo.", galeria: "Memória, dominó e bingo para jogar em sala e em casa." },
  "meu-mundo-cafune": { campo: "O eu, o outro e o nós; Corpo, gestos e movimentos; Espaços, tempos, quantidades, relações e transformações", dev: "emoções, identidade, família, autocuidado, natureza e rotina.", uso: "na roda de conversa e em projetos de identidade e convivência.", galeria: "Emoções, família e rotina, para conversar na roda." },
};

function Livros() {
  return (
    <section className="bg-gradient-soft py-20">
      <div className="mx-auto max-w-6xl px-4">
        <H2>Seis livros, seis ferramentas para a sua rotina.</H2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article key={p.id} className="flex flex-col rounded-3xl border-2 border-grafite bg-card p-5 shadow-soft">
              <img src={covers[p.id]} alt={`Capa de ${p.title}`} width={496} height={702} loading="lazy" className="aspect-[210/297] w-full rounded-2xl border-2 border-grafite object-cover" />
              <p className="mt-4 text-xs font-bold text-muted-foreground">VOL. {p.volume} · {p.pages} PÁGINAS</p>
              <h3 className="font-display text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-sm"><strong>Campo de experiência:</strong> {sala[p.id]?.campo}</p>
              <p className="mt-2 text-sm"><strong>O que a criança desenvolve:</strong> {sala[p.id]?.dev}</p>
              <p className="mt-2 text-sm"><strong>Como usar na sala:</strong> {sala[p.id]?.uso}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center font-display text-2xl font-bold">6 livros · {totalPages} páginas · 1 só pagamento</p>
      </div>
    </section>
  );
}

function Ano() {
  const b = [
    ["1º bimestre", "adaptação e rotina", "Meu Mundo Cafuné para a rotina e as emoções, Mãozinhas Mágicas para aquecer a mão, Kit Alfabetização para sons e rimas."],
    ["2º bimestre", "números e formas", "Contando com o Cafu para quantidades e sequências, Cores e Formas do Cafu para formas e classificação."],
    ["3º bimestre", "letras e convivência", "Kit Alfabetização para letras e primeiras palavras, Jogos do Cafu para memória, dominó e regras."],
    ["4º bimestre", "revisão e autonomia", "Jogos do Cafu para atividades em grupo e revisão, Mãozinhas Mágicas para recorte e traçado mais complexos."],
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <H2 sub="Sugestões de como combinar os volumes ao longo do ano. Você adapta ao seu planejamento.">Um jeito de organizar o ano com o kit.</H2>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {b.map(([t, s, d]) => (
            <div key={t} className="rounded-3xl border-2 border-grafite bg-tiffany/40 p-6">
              <p className="font-display text-xl font-bold">{t}</p>
              <p className="text-sm font-bold text-lavanda">{s}</p>
              <p className="mt-3 text-sm">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tabela() {
  const cols = ["Montar do zero", "Atividades soltas da internet", "Kit Cafuné"];
  const rows: [string, string, string, string][] = [
    ["Tempo", "Horas por semana", "Horas de busca e adaptação", "Pronto para imprimir"],
    ["Custo", "Seu tempo", "Grátis, mas você adapta tudo", "R$ 27,90, pagamento único"],
    ["Qualidade visual", "Depende de você", "Irregular", "Padrão único, feito para a idade"],
    ["Alinhamento à BNCC", "Depende de você", "Nem sempre indicado", "Indicado em cada página"],
    ["Organização por idade", "Você organiza", "Você organiza", "Semente, Broto e Flor"],
    ["Imprimir para a turma", "Sim", "Depende da fonte", "Quantas vezes precisar"],
  ];
  return (
    <section className="bg-rosa-bebe/25 py-20">
      <div className="mx-auto max-w-5xl px-4">
        <H2>Entre montar do zero, pesquisar na internet ou usar o kit.</H2>
        <div className="mt-10 overflow-x-auto rounded-3xl border-2 border-grafite bg-card">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b-2 border-grafite">
                <th className="p-4" />
                {cols.map((c, i) => <th key={c} className={cn("p-4 font-display text-base", i === 2 && "bg-lilas-bebe/60")}>{c}</th>)}
              </tr>
            </thead>
            <tbody>
              {rows.map(([h, ...v]) => (
                <tr key={h} className="border-b border-border last:border-0">
                  <th className="p-4 font-bold">{h}</th>
                  {v.map((x, i) => <td key={i} className={cn("p-4", i === 2 && "bg-lilas-bebe/30 font-bold")}>{x}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Como() {
  const s = [
    ["Garanta o kit.", "Clique no botão e confira a coleção completa."],
    ["Pague com PIX ou cartão.", "O pagamento é feito com segurança na Cakto."],
    ["Receba no seu e-mail.", "A entrega é imediata, sem nada pelo correio."],
    ["Imprima e aplique.", "Escolha o livro do dia e leve para a sua turma."],
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <H2 sub="Imprima hoje, aplique amanhã.">Do pagamento à sala de aula.</H2>
        <ol className="mt-12 grid gap-5 md:grid-cols-4">
          {s.map(([t, d], i) => (
            <li key={t} className="rounded-3xl border-2 border-grafite bg-card p-6 text-center shadow-soft">
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary font-display text-xl font-bold text-primary-foreground">{i + 1}</span>
              <p className="mt-4 font-display text-lg font-bold">{t}</p>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Galeria() {
  const [vol, setVol] = useState(0);
  const [zoom, setZoom] = useState<string | null>(null);
  const p = products[vol] ?? products[0]!;
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <H2 sub="Escolha um volume e veja algumas páginas de amostra.">Uma espiadinha no mundo Cafuné.</H2>
        <div role="tablist" aria-label="Volumes" className="mt-10 flex flex-wrap justify-center gap-2">
          {products.map((x, i) => (
            <button key={x.id} role="tab" aria-selected={i === vol} onClick={() => { setVol(i); track("view_product", { productId: x.id }); }}
              className={cn("rounded-full border-2 border-grafite px-4 py-2 text-sm font-bold", i === vol ? "bg-lavanda text-primary-foreground" : "bg-card hover:bg-muted")}>
              Vol. {x.volume}
            </button>
          ))}
        </div>
        <div className={cn("mt-8 rounded-[2.5rem] p-6 sm:p-10", toneClass[p.tone])}>
          <h3 className="text-center font-display text-2xl font-bold">{p.title}</h3>
          <p className="mt-2 text-center font-semibold">{sala[p.id]?.galeria}</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {(previews[p.id] ?? []).map((src, i) => (
              <button key={src} onClick={() => setZoom(src)} aria-label={`Ampliar página de amostra ${i + 1}`} className="rounded-2xl transition-transform hover:-translate-y-1">
                <img src={src} alt={`Página de amostra ${i + 1} de ${p.title}`} loading="lazy" width={579} height={819} className="aspect-[210/297] w-full rounded-2xl border-2 border-grafite bg-card object-cover shadow-soft" />
              </button>
            ))}
          </div>
        </div>
      </div>
      {zoom && (
        <div role="dialog" aria-label="Página de amostra" className="fixed inset-0 z-50 grid place-items-center bg-grafite/70 p-4" onClick={() => setZoom(null)}>
          <div className="relative max-h-full max-w-lg">
            <button aria-label="Fechar" className="absolute -right-2 -top-2 rounded-full border-2 border-grafite bg-card p-1"><X /></button>
            <img src={zoom} alt="Página de amostra ampliada" className="max-h-[85vh] rounded-2xl border-2 border-grafite bg-card object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}

function Escolas() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-4xl rounded-[2rem] border-2 border-grafite bg-azul-bebe/50 px-6 py-10 text-center">
        <h2 className="font-display text-3xl font-bold">Comprando para a equipe?</h2>
        <p className="mt-3 text-lg">Coordenação ou direção pensando em adquirir para a equipe? Fale com a gente pelo WhatsApp e tire suas dúvidas.</p>
        <a href={WA} target="_blank" rel="noopener noreferrer" className="sticker mt-6 inline-flex items-center gap-2 rounded-full bg-card px-6 py-3 font-display font-semibold">
          <MessageCircle className="h-4 w-4" aria-hidden /> FALAR SOBRE COMPRA PARA A ESCOLA
        </a>
      </div>
    </section>
  );
}

function Oferta() {
  const itens = [
    `6 livros, ${totalPages} páginas, por idade e por eixo`,
    "Reimpressão para toda a turma, quantas vezes precisar",
    "Método Cafuné em cada página",
    "Entrega imediata por e-mail",
    `Garantia de ${GARANTIA} dias`,
  ];
  return (
    <section id="oferta" className="scroll-mt-24 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-[3rem] border-2 border-grafite bg-gradient-soft px-6 py-12 sm:px-12 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Coleção completa para a sua sala.</h2>
          <ul className="mt-6 space-y-2 font-semibold">
            {itens.map((i) => <li key={i} className="flex gap-2"><Check className="h-5 w-5 shrink-0 text-chiclete" aria-hidden />{i}</li>)}
          </ul>
          <p className="mt-6 text-sm font-bold text-muted-foreground">Os 6 livros separados valeriam <s>R$ 89,40</s>.</p>
          <p className="font-display text-5xl font-bold text-chiclete">{price}</p>
          <p className="text-sm font-semibold text-muted-foreground">Pagamento único. Menos de R$ 4,65 por livro. Os volumes não são vendidos avulsos.</p>
          <KitBuyButton label="QUERO A COLEÇÃO COMPLETA" className="mt-6 text-base" />
        </div>
        <img src={kitCover.url} alt="Capas dos 6 volumes do kit" width={1600} height={1200} loading="lazy" className="aspect-[4/3] w-full rounded-[2rem] border-2 border-grafite object-cover shadow-soft" />
      </div>
    </section>
  );
}

function Garantia() {
  return (
    <section className="pb-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-[2rem] border-2 border-dashed border-chiclete bg-rosa-bebe/30 px-6 py-10 text-center">
        <ShieldCheck className="h-12 w-12 text-chiclete" aria-hidden />
        <h2 className="font-display text-3xl font-bold">Teste com a sua turma durante uma semana.</h2>
        <p className="text-lg">Aplique o kit com a turma durante uma semana. Se não fizer sentido para você, peça o reembolso integral em até {GARANTIA} dias, direto pela Cakto. Você decide depois de testar.</p>
      </div>
    </section>
  );
}

const faqs: [string, string][] = [
  ["Posso imprimir para todos os alunos da minha turma?", "Sim. Imprima quantas vezes precisar, para a sua turma."],
  ["Serve para turma com idades diferentes?", "Sim. Cada livro tem três níveis: Semente (3 anos), Broto (4 anos) e Flor (5 e 6 anos)."],
  ["Está alinhado à BNCC?", "Sim. Os campos de experiência aparecem no rodapé das páginas, com o código de cada habilidade."],
  ["Dá para usar na creche, com crianças de 3 anos?", "Sim. O nível Semente foi pensado para 3 anos. Ajuste o tempo e o apoio a cada criança."],
  ["Recebo nota fiscal ou comprovante?", "A compra é processada pela Cakto, que cuida da emissão de notas fiscais."],
  ["A escola pode comprar?", "Sim. Fale com a gente pelo WhatsApp para tirar dúvidas sobre compra para a equipe."],
  ["Posso compartilhar o PDF com outras professoras?", "O kit é vendido por professora. Se sua colega quiser usar, ela pode adquirir o dela. Assim o material continua acessível para todas."],
  ["Como recebo o material?", "Logo após o pagamento por PIX ou cartão, o acesso chega no seu e-mail. Os arquivos são PDFs para imprimir."],
  ["E se eu não gostar?", `Você tem garantia de ${GARANTIA} dias, com reembolso integral pela Cakto.`],
];

function Faq() {
  return (
    <section className="bg-rosa-bebe/25 py-20">
      <div className="mx-auto max-w-3xl px-4">
        <H2>Perguntas frequentes.</H2>
        <div className="mt-10 space-y-3">
          {faqs.map(([q, a]) => (
            <details key={q} className="group rounded-3xl border-2 border-grafite bg-card px-6 py-4 open:shadow-soft">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold">
                {q}<Plus className="h-5 w-5 shrink-0 text-chiclete transition-transform group-open:rotate-45" aria-hidden />
              </summary>
              <p className="mt-3 text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Final() {
  return (
    <section className="bg-gradient-soft py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <img src={logoV.url} alt="" className="mx-auto h-28 w-auto" loading="lazy" />
        <h2 className="mt-6 font-display text-3xl font-bold sm:text-5xl">Seu próximo domingo pode ser só seu.</h2>
        <p className="mt-4 text-lg">Deixe a semana da sua turma pronta e aproveite o fim de semana.</p>
        <p className="mt-4 font-display text-4xl font-bold text-chiclete">{price}</p>
        <p className="text-sm font-semibold">Pagamento único.</p>
        <KitBuyButton label="QUERO MEUS DOMINGOS DE VOLTA" className="mt-6 px-8 text-lg" />
        <p className="mt-5 text-sm font-bold">Pagamento seguro pela Cakto · PIX ou cartão · Garantia de {GARANTIA} dias · Produto digital em PDF</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center text-sm">
        <img src={logoH.url} alt="Cafuné de Cores" className="h-12 w-auto" loading="lazy" />
        <nav className="flex flex-wrap justify-center gap-4 font-semibold" aria-label="Rodapé">
          <Link to="/termos" className="hover:underline">Termos de uso</Link>
          <Link to="/privacidade" className="hover:underline">Política de privacidade</Link>
          <Link to="/reembolso" className="hover:underline">Reembolso</Link>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="text-sereno hover:underline">WhatsApp: +55 11 95104-2381</a>
        </nav>
        <p className="text-muted-foreground">Produto digital em PDF. Nenhum livro físico é enviado.</p>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Cafuné de Cores</p>
      </div>
    </footer>
  );
}
