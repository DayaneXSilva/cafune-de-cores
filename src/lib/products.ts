// Catálogo da coleção. Cada produto tem seu próprio id, preço e checkout.
// priceId: identificador do preço no Lovable Payments (preenchido ao configurar o checkout).
// price: valor exibido (centavos). null = ainda não definido.
// Os PDFs pagos NUNCA ficam neste arquivo: são entregues somente após a confirmação do pagamento.

export type Product = {
  id: string;
  volume: string;
  title: string;
  pages: number;
  description: string;
  skills: string[];
  tone: "lilas" | "rosa" | "azul" | "tiffany" | "lilas-bebe" | "tiffany-azul";
  priceId: string | null;
  price: number | null;
};

export const products: Product[] = [
  {
    id: "maozinhas-magicas",
    volume: "01",
    title: "Mãozinhas Mágicas",
    pages: 47,
    description:
      "Traçados, curvas, labirintos, recortes e atividades para desenvolver a coordenação motora fina, o controle dos movimentos e a confiança ao usar o lápis.",
    skills: ["Coordenação motora fina", "Controle do lápis", "Atenção"],
    tone: "lilas",
    priceId: null,
    price: 1490,
  },
  {
    id: "kit-alfabetizacao",
    volume: "02",
    title: "Kit Alfabetização Cafuné",
    pages: 59,
    description:
      "Uma descoberta divertida dos sons, rimas, sílabas, vogais, letras e primeiras palavras, com atividades que respeitam o ritmo da criança.",
    skills: ["Consciência fonológica", "Letras e vogais", "Primeiras palavras"],
    tone: "rosa",
    priceId: null,
    price: 1490,
  },
  {
    id: "contando-com-o-cafu",
    volume: "03",
    title: "Contando com o Cafu",
    pages: 49,
    description:
      "Brincadeiras com números, quantidades, sequências, comparações e pequenos desafios de raciocínio matemático.",
    skills: ["Números e quantidades", "Sequências", "Raciocínio lógico"],
    tone: "azul",
    priceId: null,
    price: 1490,
  },
  {
    id: "cores-e-formas",
    volume: "04",
    title: "Cores e Formas do Cafu",
    pages: 41,
    description:
      "Atividades para reconhecer cores, experimentar misturas, identificar formas geométricas, classificar e criar figuras.",
    skills: ["Cores e misturas", "Formas geométricas", "Classificação"],
    tone: "tiffany",
    priceId: null,
    price: 1490,
  },
  {
    id: "jogos-do-cafu",
    volume: "05",
    title: "Jogos do Cafu",
    pages: 34,
    description:
      "Jogos da memória, dominós, bingos, tabuleiros e quebra-cabeças para estimular atenção, convivência e aprendizagem em família.",
    skills: ["Memória", "Convivência", "Atenção"],
    tone: "lilas-bebe",
    priceId: null,
    price: 1490,
  },
  {
    id: "meu-mundo-cafune",
    volume: "06",
    title: "Meu Mundo Cafuné",
    pages: 43,
    description:
      "Atividades sobre emoções, identidade, família, autocuidado, natureza, rotina e descobertas do mundo ao redor.",
    skills: ["Emoções e identidade", "Autocuidado", "Natureza e rotina"],
    tone: "tiffany-azul",
    priceId: null,
    price: 1490,
  },
];

export const kit = {
  id: "colecao-completa",
  title: "Coleção completa Cafuné Brinca e Aprende",
  // O kit só é oferecido quando houver checkout e entrega configurados.
  enabled: false,
  priceId: null as string | null,
  price: 4990 as number | null,
};

export const totalPages = products.reduce((s, p) => s + p.pages, 0);

export const toneClass: Record<Product["tone"], string> = {
  lilas: "bg-lilas-bebe",
  rosa: "bg-rosa-bebe",
  azul: "bg-azul-bebe",
  tiffany: "bg-tiffany",
  "lilas-bebe": "bg-lilas-bebe/70",
  "tiffany-azul": "bg-gradient-to-br from-tiffany to-azul-bebe",
};

export function formatPrice(cents: number | null) {
  if (cents == null) return null;
  return (cents / 100).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function track(event: "view_product" | "begin_checkout" | "purchase", data: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[] };
  (w.dataLayer ??= []).push({ event, ...data });
}
