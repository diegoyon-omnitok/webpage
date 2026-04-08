import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Bot,
  Boxes,
  Building2,
  FlaskConical,
  Layers,
  MessageCircle,
  Package,
} from "lucide-react";
import SeoBreadcrumbs from "@/components/seo/SeoBreadcrumbs";
import { canonicalRoutes } from "@/lib/markets";

export const metadata: Metadata = {
  title: "Recursos — Omnitok",
  description:
    "Explora contenidos, casos e iniciativas de Omnitok para entender cómo mejorar fichas de producto, monitorear ejecución digital y fortalecer tu presencia en retailers y marketplaces.",
};

export default function RecursosPage() {
  const pages = [
    {
      icon: Layers,
      title: "Omnitok Content",
      desc: "Conoce la página de contenido enriquecido para mejorar fichas de producto y ejecución visual en retailers y marketplaces.",
      href: canonicalRoutes.latam.content,
      color: "text-primary",
      bg: "bg-primary/10",
      cta: "Ver página",
    },
    {
      icon: Package,
      title: "Omnitok Connect",
      desc: "Explora la solución para centralizar y distribuir contenido de producto en múltiples canales.",
      href: canonicalRoutes.latam.connect,
      color: "text-accent",
      bg: "bg-accent/10",
      cta: "Ver página",
    },
    {
      icon: Bot,
      title: "Omnitok Assistant",
      desc: "Descubre cómo un asistente de compra ayuda a resolver dudas y mejorar la conversión en el PDP.",
      href: canonicalRoutes.latam.assistant,
      color: "text-violet-600",
      bg: "bg-violet-500/10",
      cta: "Ver página",
    },
    {
      icon: Boxes,
      title: "Digital Shelf Analytics",
      desc: "Revisa la página de DSA para monitorear precio, stock, contenido y visibilidad digital.",
      href: canonicalRoutes.latam.dsa,
      color: "text-sky-700",
      bg: "bg-sky-500/10",
      cta: "Ver página",
    },
    {
      icon: FlaskConical,
      title: "Omnitok LABS",
      desc: "Plataforma gratuita para que las marcas evalúen su ejecución en los canales digitales con diagnósticos e insights rápidos.",
      href: "https://lab.omnitok.com/",
      color: "text-violet-600",
      bg: "bg-violet-500/10",
      cta: "Ir a la plataforma",
      external: true,
    },
    {
      icon: BookOpen,
      title: "Blog",
      desc: "Lee artículos sobre ejecución digital, ecommerce, marketplaces y optimización de PDPs en LATAM.",
      href: canonicalRoutes.latam.blog,
      color: "text-primary",
      bg: "bg-primary/10",
      cta: "Ver página",
    },
    {
      icon: Building2,
      title: "Quiénes somos",
      desc: "Conoce mejor a Omnitok, su enfoque y cómo acompaña a marcas que venden en retailers y marketplaces.",
      href: canonicalRoutes.latam.nosotros,
      color: "text-accent",
      bg: "bg-accent/10",
      cta: "Ver página",
    },
    {
      icon: MessageCircle,
      title: "Conversemos",
      desc: "Si ya sabes lo que necesitas, ve directo a la página de contacto para hablar con el equipo.",
      href: canonicalRoutes.latam.contacto,
      color: "text-teal-700",
      bg: "bg-teal-500/10",
      cta: "Ver página",
    },
  ] as const;

  return (
    <>
      <section className="pt-28 pb-20 gradient-hero relative overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Recursos
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Recursos para mejorar la ejecución digital de tu marca
          </h1>
          <p className="mt-5 text-lg text-white/70">
            Explora contenidos, casos e iniciativas de Omnitok para entender cómo mejorar
            fichas de producto, monitorear ejecución digital y fortalecer tu presencia en
            retailers y marketplaces.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none"><path d="M0 40L1440 40L1440 10C1200 40 900 0 720 10C540 20 240 0 0 10L0 40Z" fill="white" /></svg>
        </div>
      </section>

      <SeoBreadcrumbs
        items={[
          { label: "Inicio", href: canonicalRoutes.latam.home },
          { label: "Recursos" },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">
              Empieza aquí
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Encuentra el recurso que mejor se adapta a lo que estás buscando
            </h2>
            <p className="mt-4 text-base lg:text-lg text-gray-500 leading-relaxed">
              Ya sea que quieras aprender más sobre contenido de producto, explorar
              tendencias del canal digital o revisar herramientas prácticas, aquí encontrarás
              los recursos clave de Omnitok.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {pages.map((cat) => {
              const cardClass =
                "group bg-white rounded-2xl p-7 border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 block";
              const inner = (
                <>
                  <div className={`w-12 h-12 rounded-xl ${cat.bg} flex items-center justify-center mb-5`}>
                    <cat.icon size={24} className={cat.color} />
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 mb-2">{cat.title}</h2>
                  <p className="text-sm text-gray-500 leading-relaxed">{cat.desc}</p>
                  <div className={`flex items-center gap-1.5 mt-5 text-sm font-semibold ${cat.color} group-hover:gap-2 transition-all`}>
                    {cat.cta} <ArrowRight size={14} />
                  </div>
                </>
              );
              return cat.external ? (
                <a
                  key={cat.title}
                  href={cat.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClass}
                >
                  {inner}
                </a>
              ) : (
                <Link key={cat.title} href={cat.href} className={cardClass}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">
              Sigue explorando
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Contenido útil para equipos que quieren ejecutar mejor en digital
            </h2>
            <p className="mt-4 text-base lg:text-lg text-gray-500 leading-relaxed">
              Nuestros recursos están pensados para marcas que buscan mejorar visibilidad,
              contenido, consistencia operativa y desempeño en canales digitales.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8 text-center shadow-card lg:p-10">
            <h2 className="text-3xl font-bold text-gray-900">
              ¿Quieres llevar estas ideas a ejecución?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
              Conversemos sobre cómo Omnitok puede ayudarte a mejorar contenido, visibilidad y
              ejecución digital en retailers y marketplaces.
            </p>
            <div className="mt-8">
              <Link
                href={canonicalRoutes.latam.contacto}
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white gradient-brand hover:opacity-90 transition-opacity"
              >
                Conversemos
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
