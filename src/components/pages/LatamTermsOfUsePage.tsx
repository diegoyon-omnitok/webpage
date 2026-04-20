import SeoBreadcrumbs from "@/components/seo/SeoBreadcrumbs";
import { canonicalRoutes } from "@/lib/markets";

const sections = [
  {
    title: "1. Aceptación de los términos",
    body: "Al acceder y utilizar este sitio web, usted acepta los presentes Términos de Uso. Si no está de acuerdo con alguna de las condiciones aquí descritas, le recomendamos no utilizar el sitio. Omnitok se reserva el derecho de modificar estos términos en cualquier momento, publicando la versión actualizada en esta página.",
  },
  {
    title: "2. Uso permitido del sitio",
    body: "Este sitio es de uso exclusivamente informativo y comercial. Queda prohibido utilizarlo con fines ilegales, para distribuir contenido dañino, para intentar acceder sin autorización a sistemas o datos, o para cualquier actividad que viole derechos de terceros o la normativa vigente en su país.",
  },
  {
    title: "3. Propiedad intelectual",
    body: "Todos los contenidos de este sitio — incluyendo textos, imágenes, logotipos, diseño, código y materiales multimedia — son propiedad de Omnitok o de sus respectivos titulares y están protegidos por las leyes de propiedad intelectual aplicables. No está permitida su reproducción, distribución o uso sin autorización expresa y por escrito.",
  },
  {
    title: "4. Marcas y denominaciones",
    body: "Las marcas, nombres comerciales y logotipos de Omnitok son de titularidad exclusiva de la empresa. Las demás marcas mencionadas en el sitio pertenecen a sus respectivos propietarios. La presencia de una marca en este sitio no implica ningún tipo de asociación o respaldo.",
  },
  {
    title: "5. Limitación de responsabilidad",
    body: "El contenido de este sitio se proporciona con fines informativos y no constituye asesoría legal, financiera ni técnica. Omnitok no garantiza que el sitio esté libre de errores, interrupciones o código malicioso. En la medida permitida por la ley, Omnitok no será responsable por daños directos, indirectos, incidentales o consecuentes derivados del uso o la imposibilidad de uso del sitio.",
  },
  {
    title: "6. Sitios de terceros",
    body: "Este sitio puede incluir enlaces a sitios web de terceros. Dichos sitios no están bajo el control de Omnitok y no somos responsables de su contenido, privacidad ni seguridad. Los enlaces se incluyen únicamente para conveniencia del usuario.",
  },
  {
    title: "7. Cookies y datos de navegación",
    body: "El uso de este sitio puede implicar el uso de cookies y otras tecnologías de seguimiento. El tratamiento de esos datos se describe en detalle en nuestra Política de Privacidad, disponible en este mismo sitio.",
  },
  {
    title: "8. Ley aplicable y jurisdicción",
    body: "Estos términos se rigen por la legislación aplicable en el país desde el cual se accede al sitio. Para usuarios en Chile, aplica la ley chilena. Para usuarios en Colombia, aplica la legislación colombiana, y así sucesivamente conforme a la normativa local de cada país de América Latina donde Omnitok opera.",
  },
  {
    title: "9. Contacto",
    body: "Para consultas sobre estos Términos de Uso, puede escribirnos a contacto@omnitok.com.",
  },
];

export default function LatamTermsOfUsePage() {
  return (
    <>
      <section className="pt-28 pb-16 gradient-hero relative overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-bold text-white lg:text-5xl">
            Términos de Uso
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75">
            Estas condiciones regulan el acceso y uso del sitio web de Omnitok para usuarios
            en América Latina.
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
          { label: "Inicio", href: canonicalRoutes.latam.home },
          { label: "Términos de Uso" },
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
              Última actualización: abril 2026. Estos términos aplican al sitio web de Omnitok
              y no reemplazan los acuerdos contractuales vigentes con clientes o partners.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
