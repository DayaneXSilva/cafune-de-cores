import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, WHATSAPP, WHATSAPP_URL } from "@/components/LegalPage";

const T = "Entrega digital e reembolso · Cafuné de Cores";
const D = "Como funciona a entrega dos PDFs e a garantia de reembolso de 30 dias da Cafuné de Cores.";

export const Route = createFileRoute("/reembolso")({
  head: () => ({
    meta: [
      { title: T }, { name: "description", content: D },
      { property: "og:title", content: T }, { property: "og:description", content: D },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <LegalPage title="Entrega digital, cancelamento e reembolso">
      <h2>Entrega</h2>
      <p>Todos os produtos são PDFs digitais. Assim que o pagamento é confirmado, o download é liberado na página de confirmação do pedido. Nada é enviado pelo correio.</p>
      <h2>Garantia de 30 dias</h2>
      <p>Oferecemos garantia de reembolso de 30 dias. Se não ficar satisfeito com a compra, você pode pedir o reembolso integral em até 30 dias a partir da data do pedido.</p>
      <h2>Como pedir</h2>
      <p>Os reembolsos são processados pela nossa revendedora, a Paddle. Para pedir, acesse <a href="https://paddle.net" target="_blank" rel="noopener noreferrer">paddle.net</a> com o e-mail usado na compra, ou fale com a gente pelo WhatsApp <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{WHATSAPP}</a>.</p>
      <p>Consulte também a <a href="https://www.paddle.com/legal/refund-policy" target="_blank" rel="noopener noreferrer">política de reembolso da Paddle</a>.</p>
    </LegalPage>
  ),
});
