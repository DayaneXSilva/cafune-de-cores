// Capas originais (página 1 de cada PDF). Imagens públicas — os PDFs ficam só no servidor.
import c1 from "@/assets/covers/maozinhas-magicas.jpg.asset.json";
import c2 from "@/assets/covers/kit-alfabetizacao.jpg.asset.json";
import c3 from "@/assets/covers/contando-com-o-cafu.jpg.asset.json";
import c4 from "@/assets/covers/cores-e-formas.jpg.asset.json";
import c5 from "@/assets/covers/jogos-do-cafu.jpg.asset.json";
import c6 from "@/assets/covers/meu-mundo-cafune.jpg.asset.json";

export const covers: Record<string, string> = {
  "maozinhas-magicas": c1.url,
  "kit-alfabetizacao": c2.url,
  "contando-com-o-cafu": c3.url,
  "cores-e-formas": c4.url,
  "jogos-do-cafu": c5.url,
  "meu-mundo-cafune": c6.url,
};
