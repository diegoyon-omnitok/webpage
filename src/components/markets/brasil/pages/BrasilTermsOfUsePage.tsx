import SeoBreadcrumbs from "@/components/seo/SeoBreadcrumbs";
import { canonicalRoutes } from "@/lib/markets";

const sections = [
  {
    title: "1. Aceitação dos termos",
    body: "Ao acessar e utilizar este site, você aceita os presentes Termos de Uso. Se você não concordar com alguma das condições aqui descritas, recomendamos não utilizar o site. A Omnitok se reserva o direito de modificar estes termos a qualquer momento, publicando a versão atualizada nesta página.",
  },
  {
    title: "2. Uso permitido do site",
    body: "Este site tem uso exclusivamente informativo e comercial. É proibido utilizá-lo para fins ilegais, para distribuir conteúdo nocivo, para tentar acessar sem autorização sistemas ou dados, ou para qualquer atividade que viole direitos de terceiros ou a legislação vigente no seu país.",
  },
  {
    title: "3. Propriedade intelectual",
    body: "Todos os conteúdos deste site — incluindo textos, imagens, logotipos, design, código e materiais multimídia — são de propriedade da Omnitok ou de seus respectivos titulares e estão protegidos pelas leis de propriedade intelectual aplicáveis. Não é permitida sua reprodução, distribuição ou uso sem autorização expressa e por escrito.",
  },
  {
    title: "4. Marcas e denominações",
    body: "As marcas, nomes comerciais e logotipos da Omnitok são de titularidade exclusiva da empresa. As demais marcas mencionadas no site pertencem aos seus respectivos proprietários. A presença de uma marca neste site não implica nenhum tipo de associação ou endosso.",
  },
  {
    title: "5. Limitação de responsabilidade",
    body: "O conteúdo deste site é fornecido para fins informativos e não constitui assessoria jurídica, financeira ou técnica. A Omnitok não garante que o site esteja livre de erros, interrupções ou código malicioso. Na medida permitida pela lei, a Omnitok não será responsável por danos diretos, indiretos, incidentais ou consequentes decorrentes do uso ou da impossibilidade de uso do site.",
  },
  {
    title: "6. Sites de terceiros",
    body: "Este site pode incluir links para sites de terceiros. Esses sites não estão sob o controle da Omnitok e não somos responsáveis por seu conteúdo, privacidade ou segurança. Os links são incluídos unicamente para conveniência do usuário.",
  },
  {
    title: "7. Cookies e dados de navegação",
    body: "O uso deste site pode envolver o uso de cookies e outras tecnologias de rastreamento. O tratamento desses dados é descrito em detalhe na nossa Política de Privacidade, disponível neste mesmo site.",
  },
  {
    title: "8. Lei aplicável e jurisdição",
    body: "Estes termos são regidos pela legislação aplicável no país a partir do qual o site é acessado. Para usuários no Brasil, aplica-se a legislação brasileira. Para usuários no Chile, aplica-se a lei chilena; para usuários na Colômbia, a legislação colombiana, e assim sucessivamente, conforme a normativa local de cada país da América Latina onde a Omnitok opera.",
  },
  {
    title: "9. Contato",
    body: "Para dúvidas sobre estes Termos de Uso, você pode escrever para contacto@omnitok.com.",
  },
];

export default function BrasilTermsOfUsePage() {
  return (
    <>
      <section className="pt-28 pb-16 gradient-hero relative overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-bold text-white lg:text-5xl">
            Termos de Uso
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75">
            Estas condições regulam o acesso e o uso do site da Omnitok para usuários
            no Brasil e na América Latina.
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
          { label: "Termos de Uso" },
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
              Última atualização: abril de 2026. Estes termos se aplicam ao site da Omnitok
              e não substituem os acordos contratuais vigentes com clientes ou parceiros.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
