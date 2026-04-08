import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShoppingBag, FileText, Database, BarChart2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Soluciones — Por problema de negocio",
  description:
    "Explora cómo Omnitok resuelve los principales desafíos de ejecución digital: marketplaces, optimización de PDPs, gestión de catálogo y analytics.",
};

const soluciones = [
  {
    icon: ShoppingBag,
    title: "Ejecución en Marketplaces",
    desc: "Controla cómo aparecen tus productos en Mercado Libre, Falabella, Walmart y más. Asegura consistencia, completitud y performance en cada canal.",
    href: "/soluciones/marketplaces",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: FileText,
    title: "Optimización de PDPs",
    desc: "Transforma páginas de producto genéricas en PDPs de alto rendimiento que informan, convencen y convierten.",
    href: "/soluciones/optimizacion-pdps",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Database,
    title: "Gestión de Catálogo Digital",
    desc: "Elimina el caos de hojas de cálculo y actualizaciones manuales. Centraliza y distribuye tu catálogo desde un solo hub.",
    href: "/soluciones/gestion-catalogo",
    color: "text-violet",
    bg: "bg-violet/10",
  },
  {
    icon: BarChart2,
    title: "Visibilidad y Analytics",
    desc: "Deja de operar a ciegas. Monitorea tu ejecución digital en tiempo real y actúa con datos antes de perder ventas.",
    href: "/soluciones/analytics",
    color: "text-teal",
    bg: "bg-teal/10",
  },
];

export default function SolucionesPage() {
  return (
    <>
      <section className="pt-28 pb-20 gradient-hero relative overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Soluciones por{" "}
            <span className="text-gradient-brand">problema de negocio</span>
          </h1>
          <p className="mt-5 text-lg text-white/70 leading-relaxed">
            Omnitok no es una herramienta de contenido genérica. Es una plataforma que resuelve problemas específicos de las marcas que venden en retail digital.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none"><path d="M0 40L1440 40L1440 10C1200 40 900 0 720 10C540 20 240 0 0 10L0 40Z" fill="white" /></svg>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {soluciones.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
              >
                <div className={`w-12 h-12 rounded-xl ${s.bg} flex items-center justify-center mb-5`}>
                  <s.icon size={24} className={s.color} />
                </div>
                <h2 className="text-lg font-bold text-gray-900 mb-3">{s.title}</h2>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{s.desc}</p>
                <div className={`flex items-center gap-1.5 mt-5 text-sm font-semibold ${s.color} group-hover:gap-2 transition-all`}>
                  Ver solución <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">¿No sabes por dónde empezar?</h2>
          <p className="text-gray-500 mb-6">En la demo te ayudamos a identificar cuál es el problema más urgente en tu ejecución digital y cómo Omnitok lo resuelve.</p>
          <Link href="/es/contacto" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white gradient-brand hover:opacity-90 transition-opacity">
            Conversemos <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
