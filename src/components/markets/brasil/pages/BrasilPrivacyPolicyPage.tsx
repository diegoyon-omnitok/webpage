import SeoBreadcrumbs from "@/components/seo/SeoBreadcrumbs";
import { canonicalRoutes } from "@/lib/markets";

const sections = [
  {
    title: "1. Introdução",
    body: "Esta Política de Privacidade descreve como a Omnitok (anteriormente Pervasive Mind) coleta, utiliza, armazena e protege as informações dos usuários que navegam por este site ou que preenchem formulários de contato, solicitação de demo ou outras interações digitais. Ao utilizar este site, você aceita as práticas descritas neste documento.",
  },
  {
    title: "2. Quem somos",
    body: "A Omnitok é uma plataforma de execução digital para marcas que vendem em varejistas e marketplaces da América Latina. Operamos no Brasil, Chile, Colômbia, Peru, México, Argentina e outros países da região. Para dúvidas relacionadas à privacidade, você pode entrar em contato pelo email contacto@omnitok.com.",
  },
  {
    title: "3. Dados que coletamos",
    body: "Podemos coletar: (a) Dados pessoais que você nos fornece voluntariamente, como nome, email, empresa, cargo e país; (b) Dados de navegação não identificáveis, como páginas visitadas, tempo de sessão, tipo de dispositivo e endereço IP aproximado; (c) Informações técnicas do navegador e do sistema operacional utilizados para acessar o site.",
  },
  {
    title: "4. Finalidade do tratamento",
    body: "Utilizamos as informações para: responder a dúvidas e coordenar solicitações comerciais; enviar informações relevantes sobre produtos e serviços da Omnitok quando você tiver autorizado; melhorar o funcionamento e a experiência do site; realizar análises estatísticas de uso; cumprir obrigações legais aplicáveis.",
  },
  {
    title: "5. Cookies e tecnologias similares",
    body: "Este site pode utilizar cookies próprios e de terceiros (como Google Analytics ou outras ferramentas de análise) para entender o comportamento de navegação e melhorar a experiência do usuário. Você pode configurar seu navegador para recusar cookies ou receber um alerta quando eles forem utilizados. A desativação de cookies pode afetar o funcionamento de algumas seções do site.",
  },
  {
    title: "6. Cibersegurança e proteção de dados",
    body: "Aplicamos medidas técnicas e organizacionais razoáveis para proteger as informações contra acessos não autorizados, perda, alteração, divulgação ou uso indevido. Isso inclui criptografia de dados em trânsito via HTTPS, controles de acesso internos, revisão periódica de práticas de segurança e gestão responsável de fornecedores de tecnologia. Diante de qualquer incidente de segurança que afete dados pessoais, notificaremos os titulares afetados e as autoridades competentes conforme exigido pela legislação aplicável.",
  },
  {
    title: "7. Compartilhamento de informações",
    body: "Não vendemos dados pessoais a terceiros. Podemos compartilhar informações com fornecedores de serviços de tecnologia que colaboram com a operação do site (por exemplo, serviços de hospedagem, CRM ou análise), sempre sob condições de confidencialidade. Também podemos divulgar informações quando exigido por lei ou por autoridade competente.",
  },
  {
    title: "8. Retenção de dados",
    body: "Os dados pessoais são conservados apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados, incluindo fins operacionais, comerciais e legais. Quando os dados deixam de ser necessários, são eliminados ou anonimizados de forma segura.",
  },
  {
    title: "9. Direitos do titular",
    body: "De acordo com a legislação aplicável em cada país — incluindo a Lei Geral de Proteção de Dados Pessoais do Brasil (LGPD, Lei nº 13.709/2018), além da Lei 19.628 do Chile, da Lei 1581 da Colômbia e legislações equivalentes em outros países da América Latina —, você tem direito a: acessar seus dados pessoais; retificar informações inexatas; solicitar a eliminação de seus dados; opor-se ao tratamento de seus dados para fins comerciais. Para exercer esses direitos, escreva para contacto@omnitok.com indicando seu nome, país e a solicitação específica.",
  },
  {
    title: "10. Transferências internacionais",
    body: "No contexto da nossa operação regional, as informações podem ser processadas ou armazenadas em servidores localizados fora do seu país de residência. Nesses casos, adotamos as medidas contratuais e técnicas apropriadas para garantir um nível adequado de proteção.",
  },
  {
    title: "11. Menores de idade",
    body: "Este site não é direcionado a menores de 18 anos. Não coletamos intencionalmente dados pessoais de menores. Se você é pai, mãe ou responsável legal e acredita que um menor nos forneceu informações pessoais, entre em contato conosco para que possamos eliminá-las.",
  },
  {
    title: "12. Atualizações desta política",
    body: "Podemos atualizar esta Política de Privacidade para refletir mudanças normativas, operacionais ou de segurança. A versão vigente será sempre a publicada nesta página, com a data da última atualização indicada ao final.",
  },
  {
    title: "13. Contato",
    body: "Para qualquer dúvida, solicitação ou reclamação relacionada a esta política, escreva para contacto@omnitok.com. Faremos o possível para responder dentro de um prazo razoável.",
  },
];

export default function BrasilPrivacyPolicyPage() {
  return (
    <>
      <section className="pt-28 pb-16 gradient-hero relative overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-bold text-white lg:text-5xl">
            Política de Privacidade
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75">
            Aqui explicamos quais informações coletamos, como as usamos, quais medidas de
            cibersegurança aplicamos e quais são os seus direitos como titular de dados.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none">
            <path
              d="M0 40L1440 40L1440 10C1200 40 900 0 720 10C540 20 240 0 0 10L0 40Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      <SeoBreadcrumbs
        items={[
          { label: "Início", href: canonicalRoutes.brasil.home },
          { label: "Política de Privacidade" },
        ]}
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-card lg:p-10">
            <div className="space-y-8">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{section.body}</p>
                </section>
              ))}
            </div>
            <p className="mt-10 text-xs text-gray-400">
              Última atualização: abril de 2026. Esta política se aplica ao site da Omnitok e não
              substitui os acordos contratuais vigentes com clientes ou parceiros.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
