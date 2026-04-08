import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Omnitok para Belleza y Cuidado Personal",
  description: "Contenido aspiracional y técnico que transmite tu propuesta de valor en el punto digital de venta. Omnitok para marcas de belleza en LATAM.",
};

export default function BellezaPage() {
  return (
    <>
      <section className="pt-28 pb-20 gradient-hero relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 border border-accent/30 mb-5">
            <Sparkles size={13} className="text-accent" />
            <span className="text-xs font-semibold text-white">Belleza y Cuidado Personal</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Contenido que transmite tu marca{" "}
            <span className="text-gradient-brand">en el punto digital de venta</span>
          </h1>
          <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto">
            En belleza, la experiencia digital del producto es tan importante como el producto físico. Omnitok garantiza que tu marca se vea y comunique de forma impecable en cada retailer.
          </p>
          <Link href="/es/contacto" className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl text-sm font-semibold text-white gradient-brand hover:opacity-90 transition-opacity">
            Conversemos <ArrowRight size={16} />
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none"><path d="M0 40L1440 40L1440 10C1200 40 900 0 720 10C540 20 240 0 0 10L0 40Z" fill="white" /></svg>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">El impacto del contenido en belleza</h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            Las marcas de belleza que usan Rich Content y A+ Content ven en promedio 3× más conversión vs. PDPs básicos. El consumidor de belleza necesita ver el producto en uso, entender ingredientes y confiar en la marca antes de comprar.
          </p>
          <div className="bg-accent/5 rounded-2xl border border-accent/10 p-6">
            <p className="text-3xl font-extrabold text-accent">38 → 91</p>
            <p className="text-gray-700 font-semibold mt-1">Score de ejecución en 60 días</p>
            <p className="text-sm text-gray-400 mt-1">Marca de belleza premium en México — caso real con Omnitok</p>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-hero">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">¿Tu marca de belleza comunica su valor en cada PDP?</h2>
          <Link href="/es/contacto" className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-xl text-sm font-semibold text-white gradient-brand hover:opacity-90 transition-opacity">
            Conversemos <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
