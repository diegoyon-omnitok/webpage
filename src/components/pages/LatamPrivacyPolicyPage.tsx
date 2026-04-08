import SeoBreadcrumbs from "@/components/seo/SeoBreadcrumbs";
import { canonicalRoutes } from "@/lib/markets";

const sections = [
  {
    title: "Introduccion",
    body:
      "Esta politica de privacidad describe como Omnitok recopila, utiliza y protege la informacion que los usuarios comparten al navegar por el sitio web o al completar formularios de contacto.",
  },
  {
    title: "Quienes somos",
    body:
      "Omnitok es una plataforma orientada a ayudar a las marcas a mejorar su ejecucion digital en retailers y marketplaces. Nos comprometemos a tratar la informacion de manera responsable, transparente y segura.",
  },
  {
    title: "Que datos recopilamos",
    body:
      "Podemos recopilar informacion de navegacion y tambien datos que el usuario entregue voluntariamente a traves de formularios, como nombre, correo electronico, empresa, cargo u otra informacion comercial relevante.",
  },
  {
    title: "Para que usamos la informacion",
    body:
      "La informacion recopilada puede utilizarse para responder consultas, coordinar solicitudes comerciales, mejorar el sitio, analizar el uso de nuestras paginas y mantener una experiencia segura y util para los usuarios.",
  },
  {
    title: "Como protegemos la informacion",
    body:
      "Aplicamos medidas razonables de seguridad para proteger la informacion frente a accesos no autorizados, perdida, alteracion o uso indebido. Aunque ningun sistema es completamente infalible, trabajamos para mantener buenas practicas y controles adecuados.",
  },
  {
    title: "Con quien compartimos la informacion",
    body:
      "No vendemos informacion personal. En algunos casos podemos apoyarnos en proveedores que colaboran en la operacion del sitio o en servicios asociados, siempre bajo condiciones razonables de confidencialidad y solo cuando sea necesario para el funcionamiento del servicio o el cumplimiento de obligaciones aplicables.",
  },
  {
    title: "Cuanto tiempo conservamos la informacion",
    body:
      "La informacion se conserva solo durante el tiempo necesario para cumplir fines operativos, comerciales, analiticos o legales. Cuando deja de ser necesaria, se elimina o resguarda de forma adecuada segun corresponda.",
  },
  {
    title: "Derechos del usuario",
    body:
      "Si deseas consultar, corregir o solicitar la eliminacion de la informacion que nos hayas compartido, puedes escribirnos y revisaremos tu solicitud de acuerdo con nuestros procesos internos y obligaciones aplicables.",
  },
  {
    title: "Cambios a esta politica",
    body:
      "Podemos actualizar esta politica de privacidad para reflejar mejoras internas, cambios normativos o ajustes en el funcionamiento del sitio. La version vigente sera siempre la publicada en esta pagina.",
  },
  {
    title: "Contacto",
    body:
      "Para consultas relacionadas con esta politica de privacidad, puedes escribirnos a contacto@omnitok.com.",
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
            Politica de privacidad
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75">
            Aqui explicamos que informacion recopilamos, como la usamos y que medidas
            aplicamos para protegerla cuando interactuas con Omnitok.
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
          { label: "Politica de privacidad" },
        ]}
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-card lg:p-10">
            <div className="space-y-8">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
