import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Monitor } from "lucide-react";

export const metadata: Metadata = {
  title: "Omnitok para Electrónica y Tecnología",
  description: "Especificaciones técnicas complejas que deben ser perfectas en cada retailer. Omnitok para marcas de electrónica en LATAM.",
};

export default function ElectronicaPage() {
  return (
    <>
      <section className="pt-28 pb-20 gradient-hero relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal/20 border border-teal/30 mb-5">
            <Monitor size={13} className="text-teal-light" />
            <span className="text-xs font-semibold text-white">Electrónica y Tecnología</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Especificaciones técnicas perfectas{" "}
            <span className="text-gradient-brand">en cada retailer de LATAM</span>
          </h1>
          <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto">
            Los productos de electrónica tienen cientos de atributos técnicos. Un error en las especificaciones cuesta ventas y genera devoluciones. Omnitok garantiza precisión y consistencia.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">El desafío de electrónica en retail digital</h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            Un televisor puede tener más de 80 atributos técnicos. Cada retailer los requiere en formatos diferentes. Sin una plataforma que gestione esa complejidad, los errores son inevitables — y cada error impacta la conversión o genera devoluciones.
          </p>
          <div className="bg-teal/5 rounded-2xl border border-teal/10 p-6">
            <p className="text-3xl font-extrabold text-teal">−55%</p>
            <p className="text-gray-700 font-semibold mt-1">reducción en tiempo de actualización de catálogo</p>
            <p className="text-sm text-gray-400 mt-1">Fabricante de electrónica en Perú y Colombia — caso real con Omnitok</p>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-hero">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">¿Tu marca de electrónica está en todos los retailers con datos perfectos?</h2>
          <Link href="/es/contacto" className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-xl text-sm font-semibold text-white gradient-brand hover:opacity-90 transition-opacity">
            Conversemos <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
