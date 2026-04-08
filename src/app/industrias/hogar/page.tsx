import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Omnitok para Hogar y Mejoramiento",
  description: "SKUs complejos con múltiples variantes, dimensiones y requisitos técnicos. Omnitok para marcas de hogar en LATAM.",
};

export default function HogarPage() {
  return (
    <>
      <section className="pt-28 pb-20 gradient-hero relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet/20 border border-violet/30 mb-5">
            <Home size={13} className="text-violet-light" />
            <span className="text-xs font-semibold text-white">Hogar y Mejoramiento</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Variantes, dimensiones y especificaciones{" "}
            <span className="text-gradient-brand">siempre perfectas en retail</span>
          </h1>
          <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto">
            Los productos de hogar tienen múltiples variantes de color, tamaño y material. Cada combinación necesita atributos técnicos precisos. Omnitok gestiona esa complejidad sin esfuerzo.
          </p>
          <Link href="/es/contacto" className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl text-sm font-semibold text-white gradient-brand hover:opacity-90 transition-opacity">
            Conversemos <ArrowRight size={16} />
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none"><path d="M0 40L1440 40L1440 10C1200 40 900 0 720 10C540 20 240 0 0 10L0 40Z" fill="white" /></svg>
        </div>
      </section>

      <section className="py-16 gradient-hero">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">¿Tu catálogo de hogar está completamente optimizado en cada retailer?</h2>
          <Link href="/es/contacto" className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-xl text-sm font-semibold text-white gradient-brand hover:opacity-90 transition-opacity">
            Conversemos <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
