import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart2 } from "lucide-react";
import { canonicalRoutes } from "@/lib/markets";

export const metadata: Metadata = {
  title: "Analytics de Ejecución Digital — Visibilidad en tiempo real",
  description:
    "Deja de operar a ciegas. Monitorea tu ejecución digital en cada retailer en tiempo real y actúa antes de perder ventas.",
};

export default function AnalyticsSolucionPage() {
  return (
    <>
      <section className="pt-28 pb-20 gradient-hero relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal/20 border border-teal/30 mb-5">
            <BarChart2 size={13} className="text-teal-light" />
            <span className="text-xs font-semibold text-white">Solución</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Deja de operar a ciegas en{" "}
            <span className="text-gradient-brand">tus retailers digitales</span>
          </h1>
          <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto">
            Visibilidad completa sobre precio, disponibilidad, posicionamiento y calidad de contenido en tiempo real. Actúa con datos antes de perder ventas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
            <Link href={canonicalRoutes.latam.contacto} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white gradient-brand hover:opacity-90 transition-opacity">
              Ver Demo <ArrowRight size={16} />
            </Link>
            <Link href={canonicalRoutes.latam.dsa} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-colors">
              Ver módulo Analytics
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none"><path d="M0 40L1440 40L1440 10C1200 40 900 0 720 10C540 20 240 0 0 10L0 40Z" fill="white" /></svg>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué no sabes hoy sobre tu ejecución?</h2>
          <div className="grid sm:grid-cols-2 gap-4 mt-6 text-left">
            {[
              "¿Cuántos de tus productos tienen imágenes incorrectas en Falabella ahora mismo?",
              "¿Dónde aparece tu producto cuando alguien busca en Mercado Libre?",
              "¿Qué competidor bajó precio en tu categoría y cuándo lo hizo?",
              "¿Qué porcentaje de tus SKUs están disponibles en este momento en cada retailer?",
            ].map((q) => (
              <div key={q} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="text-sm text-gray-700 font-medium">{q}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-gray-500 text-sm">Con Digital Shelf Analytics, tienes respuesta a todas esas preguntas — en tiempo real.</p>
        </div>
      </section>

      <section className="py-16 gradient-hero">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">¿Qué pasa en tus retailers ahora mismo?</h2>
          <p className="text-white/60 mb-6 text-sm">Agenda una demo y te hacemos un diagnóstico de ejecución con datos reales de tus canales.</p>
          <Link href={canonicalRoutes.latam.contacto} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white gradient-brand hover:opacity-90 transition-opacity">
            Diagnóstico Gratuito <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
