import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, SELLER, WHATSAPP, WHATSAPP_URL } from "@/components/LegalPage";

const T = "Política de privacidade · Cafuné de Cores";
const D = "Como a Cafuné de Cores coleta, usa e protege seus dados pessoais.";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: T }, { name: "description", content: D },
      { property: "og:title", content: T }, { property: "og:description", content: D },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <LegalPage title="Política de privacidade">
      <p><strong>{SELLER}</strong> é a controladora dos dados pessoais tratados neste site, nos termos da LGPD (Lei 13.709/2018), e decide como e por que eles são usados.</p>
      <h2>Dados que coletamos e por quê</h2>
      <ul>
        <li><strong>Nome e e-mail</strong> informados na compra — para entregar o produto e dar suporte (execução de contrato).</li>
        <li><strong>Mensagens de atendimento</strong> (ex.: WhatsApp) — para responder suas dúvidas (execução de contrato / legítimo interesse).</li>
        <li><strong>Dados técnicos</strong> como endereço IP, navegador e dispositivo — para segurança, prevenção de fraude e funcionamento do site (legítimo interesse).</li>
      </ul>
      <p>Os dados de pagamento são coletados diretamente pela Paddle, e não por nós.</p>
      <h2>Com quem compartilhamos</h2>
      <ul>
        <li>Prestadores de serviço, como hospedagem do site;</li>
        <li>Paddle, nossa Merchant of Record, para a venda, pagamentos, impostos e emissão de notas;</li>
        <li>Assessores profissionais (jurídico, contábil);</li>
        <li>Autoridades, quando exigido por lei.</li>
      </ul>
      <h2>Por quanto tempo guardamos</h2>
      <p>Guardamos os dados só pelo tempo necessário para as finalidades acima e obrigações legais; depois, são apagados ou anonimizados.</p>
      <h2>Seus direitos</h2>
      <p>Você pode pedir confirmação, acesso, correção, anonimização, portabilidade ou exclusão dos seus dados, revogar consentimento e reclamar à ANPD.</p>
      <h2>Segurança</h2>
      <p>Usamos medidas técnicas e organizacionais adequadas, como conexão criptografada e controle de acesso.</p>
      <h2>Cookies</h2>
      <p>Usamos apenas cookies essenciais para o funcionamento do site e do checkout. Você pode gerenciá-los nas configurações do seu navegador.</p>
      <h2>Contato</h2>
      <p>WhatsApp: <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{WHATSAPP}</a></p>
    </LegalPage>
  ),
});
