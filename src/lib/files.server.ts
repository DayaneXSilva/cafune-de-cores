// Somente servidor: links dos PDFs pagos. Nunca importar em código do navegador.
import f1 from "@/lib/files/maozinhas-magicas.pdf.asset.json";
import f2 from "@/lib/files/kit-alfabetizacao.pdf.asset.json";
import f3 from "@/lib/files/contando-com-o-cafu.pdf.asset.json";
import f4 from "@/lib/files/cores-e-formas.pdf.asset.json";
import f5 from "@/lib/files/jogos-do-cafu.pdf.asset.json";
import f6 from "@/lib/files/meu-mundo-cafune.pdf.asset.json";

export const pdfFiles: Record<string, { url: string; filename: string }> = {
  "maozinhas-magicas": { url: f1.url, filename: f1.original_filename },
  "kit-alfabetizacao": { url: f2.url, filename: f2.original_filename },
  "contando-com-o-cafu": { url: f3.url, filename: f3.original_filename },
  "cores-e-formas": { url: f4.url, filename: f4.original_filename },
  "jogos-do-cafu": { url: f5.url, filename: f5.original_filename },
  "meu-mundo-cafune": { url: f6.url, filename: f6.original_filename },
};
