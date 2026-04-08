import Link from "next/link";
import { ArrowRight, CalendarDays, MonitorPlay, Users } from "lucide-react";
import SeoBreadcrumbs from "@/components/seo/SeoBreadcrumbs";
import { canonicalRoutes } from "@/lib/markets";

const topics = [
  "Que espera hoy el consumidor de su experiencia online",
  "Las brechas entre la tienda fisica y los canales digitales",
  "El desafio de gestionar multiples marcas, SKUs y canales",
  "Consistencia de marca en todos los puntos de contacto",
  "El rol de la tecnologia y la inteligencia artificial en el retail digital",
];

const audiences = [
  {
    title: "Marcas",
    description:
      "Equipos de ecommerce, marketing, trade marketing y digital que buscan mejorar su ejecucion en retailers y marketplaces y aumentar la conversion.",
  },
  {
    title: "Retailers",
    description:
      "Equipos que quieren entender mejor el rol de la data, el contenido y la tecnologia para cerrar brechas en la experiencia digital.",
  },
  {
    title: "Agencias y partners digitales",
    description:
      "Profesionales que trabajan con marcas y retailers en estrategias de ecommerce, contenido, performance y omnicanalidad.",
  },
];

const speakers = [
  { name: "Eduardo Yon", role: "CEO Co-Founder", company: "Omnitok" },
  { name: "Adolfo Lira", role: "Gerente Ecommerce", company: "Paris" },
  { name: "Andres Morales", role: "Digital Marketing Head", company: "Hisense" },
];

export default function LatamWebinarExperiencePage() {
  return (
    <>
      <section className="pt-28 pb-16 gradient-hero relative overflow-hidden">
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5">
                <MonitorPlay size={14} className="text-white" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  Webinar
                </span>
              </div>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-white lg:text-5xl">
                La experiencia digital hoy define la decision de compra
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75">
                Hoy las marcas compiten en un entorno donde la experiencia digital define la
                decision de compra. Este webinar recoge los desafios reales que enfrentan marcas y
                retail para mejorar su experiencia digital.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={canonicalRoutes.latam.contacto}
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white gradient-brand hover:opacity-90 transition-opacity"
                >
                  Solicitar informacion del webinar <ArrowRight size={16} />
                </Link>
                <Link
                  href={canonicalRoutes.latam.recursos}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15 transition-colors"
                >
                  Ver mas recursos
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-white backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <CalendarDays size={18} className="text-white/80" />
                <p className="text-sm font-semibold text-white/80">
                  15 de enero de 2026 | 17:00 (GMT-3)
                </p>
              </div>
              <div className="mt-5 space-y-3">
                {[
                  "Desafios de las marcas y el retail para mejorar la experiencia de compra digital",
                  "Aprendizajes reales desde la industria y el ecosistema omnicanal",
                  "Casos concretos para mejorar conversion y claridad digital",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm font-medium text-white/90"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
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
          { label: "Recursos", href: canonicalRoutes.latam.recursos },
          { label: "Webinar" },
        ]}
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-card">
              <h2 className="text-2xl font-bold text-gray-900">
                De que trata este webinar
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                Los consumidores comparan, evalúan y deciden en segundos dentro de los canales
                digitales del retail. Este webinar fue planteado para responder una pregunta
                concreta: si marcas y retailers estan realmente preparados para cumplir las nuevas
                expectativas del consumidor digital.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                La sesion se apoya en aprendizajes reales de la industria y en casos concretos del
                ecosistema omnicanal en Latinoamerica.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8 shadow-card">
              <h2 className="text-xl font-bold text-gray-900">Informacion clave</h2>
              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-gray-200 bg-white px-4 py-4 text-sm text-gray-700">
                  Tema central: la experiencia digital hoy define la decision de compra.
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white px-4 py-4 text-sm text-gray-700">
                  Enfoque: brechas entre experiencia fisica y digital, consistencia de marca y uso
                  de tecnologia e IA.
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white px-4 py-4 text-sm text-gray-700">
                  Destino actual: pagina editorial de referencia para el webinar y su migracion SEO.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-gray-900">
            Temas clave que abordaremos
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {topics.map((topic) => (
              <div key={topic} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-card">
                <p className="text-sm font-medium leading-relaxed text-gray-700">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 text-primary">
            <Users size={18} />
            <p className="text-xs font-semibold uppercase tracking-[0.2em]">
              Audiencia
            </p>
          </div>
          <h2 className="mt-3 text-center text-2xl font-bold text-gray-900">
            A quien esta dirigido este webinar
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {audiences.map((audience) => (
              <div key={audience.title} className="rounded-3xl border border-gray-100 bg-white p-6 shadow-card">
                <h3 className="text-lg font-bold text-gray-900">{audience.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-gray-900">Speakers</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {speakers.map((speaker) => (
              <div key={speaker.name} className="rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-card">
                <h3 className="text-lg font-bold text-gray-900">{speaker.name}</h3>
                <p className="mt-2 text-sm font-semibold text-primary">{speaker.role}</p>
                <p className="mt-1 text-sm text-gray-500">{speaker.company}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href={canonicalRoutes.latam.contacto}
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white gradient-brand hover:opacity-90 transition-opacity"
            >
              Solicitar informacion del webinar <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
