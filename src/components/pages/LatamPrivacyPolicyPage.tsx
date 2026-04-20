import SeoBreadcrumbs from "@/components/seo/SeoBreadcrumbs";
import { canonicalRoutes } from "@/lib/markets";

const sections = [
  {
    title: "1. Introducción",
    body: "Esta Política de Privacidad describe cómo Omnitok (anteriormente Pervasive Mind) recopila, utiliza, almacena y protege la información de los usuarios que navegan por este sitio web o que completan formularios de contacto, solicitud de demo u otras interacciones digitales. Al utilizar este sitio, usted acepta las prácticas descritas en este documento.",
  },
  {
    title: "2. Quiénes somos",
    body: "Omnitok es una plataforma de ejecución digital para marcas que venden en retailers y marketplaces de América Latina. Operamos en Chile, Colombia, Perú, México, Argentina y otros países de la región. Para consultas relacionadas con privacidad, puede contactarnos en contacto@omnitok.com.",
  },
  {
    title: "3. Datos que recopilamos",
    body: "Podemos recopilar: (a) Datos personales que usted nos proporciona voluntariamente, como nombre, correo electrónico, empresa, cargo y país; (b) Datos de navegación no identificables, como páginas visitadas, tiempo de sesión, tipo de dispositivo y dirección IP aproximada; (c) Información técnica del navegador y sistema operativo utilizado para acceder al sitio.",
  },
  {
    title: "4. Finalidad del tratamiento",
    body: "Utilizamos la información para: responder consultas y coordinar solicitudes comerciales; enviar información relevante sobre productos y servicios de Omnitok cuando usted lo ha autorizado; mejorar el funcionamiento y la experiencia del sitio; realizar análisis estadísticos de uso; cumplir con obligaciones legales aplicables.",
  },
  {
    title: "5. Cookies y tecnologías similares",
    body: "Este sitio puede utilizar cookies propias y de terceros (como Google Analytics u otras herramientas de análisis) para entender el comportamiento de navegación y mejorar la experiencia del usuario. Puede configurar su navegador para rechazar cookies o recibir una alerta cuando se utilicen. La desactivación de cookies puede afectar el funcionamiento de algunas secciones del sitio.",
  },
  {
    title: "6. Ciberseguridad y protección de datos",
    body: "Aplicamos medidas técnicas y organizativas razonables para proteger la información frente a accesos no autorizados, pérdida, alteración, divulgación o uso indebido. Esto incluye cifrado de datos en tránsito mediante HTTPS, controles de acceso internos, revisión periódica de prácticas de seguridad y gestión responsable de proveedores tecnológicos. Ante cualquier incidente de seguridad que afecte datos personales, notificaremos a los titulares afectados y a las autoridades competentes según lo exija la normativa aplicable.",
  },
  {
    title: "7. Compartición de información",
    body: "No vendemos datos personales a terceros. Podemos compartir información con proveedores de servicios tecnológicos que colaboran en la operación del sitio (por ejemplo, servicios de hosting, CRM o analítica), siempre bajo condiciones de confidencialidad. También podemos divulgar información cuando sea exigido por ley o autoridad competente.",
  },
  {
    title: "8. Retención de datos",
    body: "Los datos personales se conservan únicamente durante el tiempo necesario para cumplir los fines para los cuales fueron recopilados, incluyendo fines operativos, comerciales y legales. Una vez que los datos dejan de ser necesarios, son eliminados o anonimizados de forma segura.",
  },
  {
    title: "9. Derechos del titular",
    body: "De acuerdo con la normativa aplicable en cada país (incluyendo la Ley 19.628 de Chile, la Ley 1581 de Colombia y legislaciones equivalentes en otros países de LATAM), usted tiene derecho a: acceder a sus datos personales; rectificar información inexacta; solicitar la cancelación o eliminación de sus datos; oponerse al tratamiento de sus datos con fines comerciales. Para ejercer estos derechos, escríbanos a contacto@omnitok.com indicando su nombre, país y la solicitud específica.",
  },
  {
    title: "10. Transferencias internacionales",
    body: "En el contexto de nuestra operación regional, la información puede ser procesada o almacenada en servidores ubicados fuera de su país de residencia. En dichos casos, adoptamos las medidas contractuales y técnicas apropiadas para garantizar un nivel adecuado de protección.",
  },
  {
    title: "11. Menores de edad",
    body: "Este sitio no está dirigido a menores de 18 años. No recopilamos intencionalmente datos personales de menores. Si usted es padre, madre o tutor y cree que un menor nos ha proporcionado información personal, contáctenos para que podamos eliminarla.",
  },
  {
    title: "12. Actualizaciones de esta política",
    body: "Podemos actualizar esta Política de Privacidad para reflejar cambios normativos, operacionales o de seguridad. La versión vigente será siempre la publicada en esta página, con la fecha de última actualización indicada al pie.",
  },
  {
    title: "13. Contacto",
    body: "Para cualquier consulta, solicitud o reclamo relacionado con esta política, escríbanos a contacto@omnitok.com. Haremos nuestro mejor esfuerzo por responder dentro de un plazo razonable.",
  },
];

export default function LatamPrivacyPolicyPage() {
  return (
    <>
      <section className="pt-28 pb-16 gradient-hero relative overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-bold text-white lg:text-5xl">
            Política de Privacidad
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75">
            Aquí explicamos qué información recopilamos, cómo la usamos, qué medidas de
            ciberseguridad aplicamos y cuáles son tus derechos como titular de datos.
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
          { label: "Política de Privacidad" },
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
              Última actualización: abril 2026. Esta política aplica al sitio web de Omnitok y no
              reemplaza los acuerdos contractuales vigentes con clientes o partners.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
