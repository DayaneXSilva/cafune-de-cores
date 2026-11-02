import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, SELLER, WHATSAPP, WHATSAPP_URL } from "@/components/LegalPage";

const T = "Termos de compra e uso · Cafuné de Cores";
const D = "Termos e condições para compra e uso dos livros digitais em PDF Cafuné de Cores.";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: T }, { name: "description", content: D },
      { property: "og:title", content: T }, { property: "og:description", content: D },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <LegalPage title="Termos de compra e uso">
      <p>Estes termos regem o uso do site e a compra dos produtos Cafuné de Cores. O vendedor é <strong>{SELLER}</strong>, e ao comprar você contrata com {SELLER}. Ao continuar usando o site ou comprar, você concorda com estes termos.</p>
      <h2>Produto</h2>
      <p>Vendemos exclusivamente livros de atividades infantis <strong>digitais em PDF</strong>. Nenhum produto físico é enviado. O arquivo é liberado para download após a confirmação do pagamento.</p>
      <h2>Revendedor e pagamentos</h2>
      <p>Nosso processo de pedidos é conduzido pelo nosso revendedor online Paddle.com. A Paddle.com é a Merchant of Record de todos os nossos pedidos. A Paddle presta o atendimento a todas as dúvidas de clientes e trata as devoluções.</p>
      <p>Pagamento, cobrança, impostos, cancelamentos e reembolsos seguem os <a href="https://www.paddle.com/legal/checkout-buyer-terms" target="_blank" rel="noopener noreferrer">Termos do Comprador da Paddle</a>.</p>
      <h2>Licença de uso</h2>
      <p>Concedemos uma licença pessoal, não exclusiva e intransferível para imprimir e usar os PDFs em casa ou na sua própria sala de aula. É proibido revender, redistribuir, compartilhar publicamente ou alterar os arquivos para venda.</p>
      <h2>Uso indevido</h2>
      <ul>
        <li>Usar o site ou os produtos para fins ilegais;</li>
        <li>Fraude, spam ou compras com dados de terceiros;</li>
        <li>Violar direitos autorais ou de marca;</li>
        <li>Interferir na segurança do site (malware, varredura, extração automatizada de dados).</li>
      </ul>
      <h2>Propriedade intelectual</h2>
      <p>{SELLER} mantém a titularidade de todo o conteúdo, ilustrações, personagem Cafu, marca e materiais.</p>
      <h2>Disponibilidade</h2>
      <p>Não garantimos que o site funcione sem interrupções ou erros, embora façamos o possível para mantê-lo disponível.</p>
      <h2>Suspensão</h2>
      <p>Podemos suspender ou encerrar o acesso em caso de violação grave destes termos, falta de pagamento, risco de fraude ou segurança, ou violações repetidas.</p>
      <h2>Limitação de responsabilidade</h2>
      <p>Na máxima extensão permitida pela lei, nossa responsabilidade fica limitada ao valor pago pelo produto, sem prejuízo dos direitos do consumidor previstos no Código de Defesa do Consumidor.</p>
      <h2>Lei aplicável</h2>
      <p>Estes termos seguem as leis do Brasil.</p>
      <h2>Contato</h2>
      <p>WhatsApp: <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{WHATSAPP}</a></p>
    </LegalPage>
  ),
});
