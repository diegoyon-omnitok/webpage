import type { Metadata } from "next";
import Link from "next/link";
import { Layers, Package, Bot, BarChart3, ArrowRight, CheckCircle2 } from "lucide-react";
import { sectionViewport } from "@/lib/sectionViewport";
import { canonicalRoutes } from "@/lib/markets";

export const metadata: Metadata = {
  title: "Plataforma — Digital Shelf Execution",
  description:
    "Descubre los cuatro módulos de Omnitok: Content, Connect, Assistant y Digital Shelf Analytics. Una plataforma integrada para la ejecución digital en retail.",
};

const modules = [
  {
    icon: Layers,
    name: "Omnitok Content",
    tagline: "Crea y distribuye contenido que vende",
    desc: "PDPs enriquecidos, consistentes y optimizados para conversión en cada retailer.",
    href: canonicalRoutes.latam.content,
    color: "from-primary to-[#6366f1]",
    features: ["Rich Content / A+ Content", "Templates por retailer", "Distribución automática", "Control de calidad de contenido"],
  },
  {
    icon: Package,
    name: "Omnitok Connect",
    tagline: "Centraliza tu catálogo y distribuye sin esfuerzo",
    desc: "Un solo hub para todos tus atributos, imágenes y descripciones. Sincronización multicanal en segundos.",
    href: canonicalRoutes.latam.connect,
    color: "from-accent to-[#f43f5e]",
    features: ["PIM centralizado", "Sincronización multicanal", "Gestión de atributos", "Reducción de trabajo manual"],
  },
  {
    icon: Bot,
    name: "Omnitok Assistant",
    tagline: "IA en el PDP que responde y convierte",
    desc: "Asistente inteligente que entiende tus productos y responde preguntas del consumidor en tiempo real.",
    href: canonicalRoutes.latam.assistant,
    color: "from-violet to-[#7C3AED]",
    features: ["Q&A automático con IA", "Comprensión contextual del producto", "Aumento de conversión", "Sin código de integración"],
  },
  {
    icon: BarChart3,
    name: "Digital Shelf Analytics",
    tagline: "Monitoreo total de tu ejecución en retailers",
    desc: "Precio, disponibilidad, posicionamiento y calidad de contenido en un solo dashboard en tiempo real.",
    href: canonicalRoutes.latam.dsa,
    color: "from-teal to-[#0D9488]",
    features: ["Monitoreo en tiempo real", "Score de ejecución por SKU", "Alertas automáticas", "Benchmarks por categoría"],
  },
];

export default function PlataformaPage() {
  return (
    <>
      {/* Hero */}
      <section className={`${sectionViewport} pt-24 pb-12 gradient-hero relative overflow-hidden`}>
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center w-full py-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
            <span className="text-xs font-medium text-white/80">Plataforma completa</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Una plataforma diseñada para la{" "}
            <span className="text-gradient-brand">ejecución digital en retail</span>
          </h1>
          <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            De la creación de contenido al monitoreo de performance, en un solo lugar. Cuatro módulos integrados que cubren todo el ciclo de ejecución del digital shelf.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <Link
              href={canonicalRoutes.latam.contacto}
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white gradient-brand hover:opacity-90 transition-opacity"
            >
              Conversemos <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none"><path d="M0 40L1440 40L1440 10C1200 40 900 0 720 10C540 20 240 0 0 10L0 40Z" fill="white" /></svg>
        </div>
      </section>

      {/* Modules — un bloque de pantalla completa por módulo */}
      {modules.map((mod, i) => (
        <section key={mod.name} className={`${sectionViewport} py-16 lg:py-20 bg-white border-t border-gray-100 first:border-t-0`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className={`grid lg:grid-cols-2 gap-10 lg:gap-14 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${mod.color} mb-5`}>
                  <mod.icon size={14} className="text-white" />
                  <span className="text-xs font-semibold text-white">{mod.name}</span>
                </div>
                <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-3">{mod.tagline}</h2>
                <p className="text-gray-500 leading-relaxed mb-6 text-lg">{mod.desc}</p>
                <ul className="space-y-2 mb-7">
                  {mod.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 size={15} className="text-success flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={mod.href}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r ${mod.color} hover:opacity-90 transition-opacity`}
                >
                  Conocer {mod.name} <ArrowRight size={15} />
                </Link>
              </div>

              <div className={`rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 min-h-[240px] lg:min-h-[320px] flex items-center justify-center ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${mod.color} flex items-center justify-center shadow-lg`}>
                  <mod.icon size={44} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className={`${sectionViewport} py-16 bg-gray-50 border-t border-gray-100`}>
        <div className="max-w-3xl mx-auto px-6 text-center w-full">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">¿Listo para ver la plataforma en acción?</h2>
          <p className="text-gray-500 mb-6">Agenda una demo personalizada y descubre cómo Omnitok se adapta a tu catálogo y retailers.</p>
          <Link href={canonicalRoutes.latam.contacto} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white gradient-brand hover:opacity-90 transition-opacity">
            Conversemos <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
