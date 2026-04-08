import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, TrendingUp, CheckCircle2 } from "lucide-react";
import { canonicalRoutes } from "@/lib/markets";

export const metadata: Metadata = {
  title: "Optimización de PDPs — Páginas de producto que convierten",
  description:
    "Transforma PDPs deficientes en páginas de alto rendimiento. Omnitok Content y Assistant trabajan juntos para mejorar la calidad de contenido y aumentar la conversión.",
};

export default function OptimizacionPDPsPage() {
  return (
    <>
      <section className="pt-28 pb-20 gradient-hero relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 border border-accent/30 mb-5">
            <FileText size={13} className="text-accent" />
            <span className="text-xs font-semibold text-white">Solución</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Tus PDPs están perdiendo ventas{" "}
            <span className="text-gradient-brand">que podrías recuperar hoy</span>
          </h1>
          <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto">
            El 67% de los consumidores abandona un producto por falta de información. Omnitok convierte PDPs débiles en páginas que informan, convencen y convierten.
          </p>
          <Link href={canonicalRoutes.latam.contacto} className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl text-sm font-semibold text-white gradient-brand hover:opacity-90 transition-opacity">
            Ver cómo funciona <ArrowRight size={16} />
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none"><path d="M0 40L1440 40L1440 10C1200 40 900 0 720 10C540 20 240 0 0 10L0 40Z" fill="white" /></svg>
        </div>
      </section>

      {/* The cost */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">El costo oculto de los PDPs mal optimizados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {[
              { value: "67%", label: "de consumidores abandona un PDP por falta de información" },
              { value: "3×", label: "más conversión en PDPs con Rich Content vs. contenido básico" },
              { value: "40%", label: "de PDPs en LATAM tienen atributos incompletos o incorrectos" },
            ].map((s) => (
              <div key={s.label} className="bg-error/5 rounded-2xl border border-error/10 p-5 text-center">
                <p className="text-3xl font-extrabold text-error">{s.value}</p>
                <p className="text-sm text-gray-500 mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Cómo Omnitok convierte PDPs débiles en páginas que venden</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <FileText size={20} className="text-accent" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Omnitok Content</h3>
              <p className="text-sm text-gray-500 mb-4">Enriquece el contenido estático del PDP: descripciones, bullets, imágenes, videos, especificaciones y A+ Content.</p>
              <Link href={canonicalRoutes.latam.content} className="text-sm font-semibold text-accent hover:opacity-80 flex items-center gap-1">Ver Content <ArrowRight size={13} /></Link>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card">
              <div className="w-10 h-10 rounded-xl bg-violet/10 flex items-center justify-center mb-4">
                <TrendingUp size={20} className="text-violet" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Omnitok Assistant</h3>
              <p className="text-sm text-gray-500 mb-4">Agrega inteligencia dinámica: el asistente IA responde preguntas del consumidor en tiempo real dentro del PDP.</p>
              <Link href={canonicalRoutes.latam.assistant} className="text-sm font-semibold text-violet hover:opacity-80 flex items-center gap-1">Ver Assistant <ArrowRight size={13} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Antes vs. Después</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border-2 border-error/20 bg-error/5 p-6">
              <p className="text-sm font-bold text-error mb-4">PDP sin Omnitok</p>
              {["Título genérico sin keywords", "2 imágenes de baja calidad", "Descripción de 50 palabras copiada del packaging", "0 atributos técnicos completados", "Sin respuesta a preguntas frecuentes"].map((i) => (
                <div key={i} className="flex items-start gap-2 mb-2 text-sm text-gray-600"><span className="text-error flex-shrink-0">×</span>{i}</div>
              ))}
            </div>
            <div className="rounded-2xl border-2 border-success/20 bg-success/5 p-6">
              <p className="text-sm font-bold text-success mb-4">PDP con Omnitok</p>
              {["Título optimizado con keywords por retailer", "8 imágenes + 1 video de producto", "Descripción rica con storytelling y beneficios", "Todos los atributos técnicos completados", "Asistente IA respondiendo preguntas en tiempo real"].map((i) => (
                <div key={i} className="flex items-start gap-2 mb-2 text-sm text-gray-600"><CheckCircle2 size={14} className="text-success flex-shrink-0 mt-0.5" />{i}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-hero">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">¿Cuántos PDPs tienes sin optimizar?</h2>
          <p className="text-white/60 mb-6 text-sm">Agenda una demo y te hacemos un diagnóstico gratuito de tu estado actual.</p>
          <Link href={canonicalRoutes.latam.contacto} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white gradient-brand hover:opacity-90 transition-opacity">
            Diagnóstico Gratuito <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
