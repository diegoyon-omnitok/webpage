import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShoppingBag, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Ejecución en Marketplaces — Falabella, Mercado Libre, Walmart",
  description:
    "Controla cómo aparecen tus productos en los principales marketplaces y retailers de LATAM. Consistencia, completitud y performance en cada canal.",
};

export default function MarketplacesPage() {
  const retailers = [
    { name: "Falabella", markets: "Chile · Perú · Colombia" },
    { name: "Mercado Libre", markets: "LATAM" },
    { name: "Walmart", markets: "Chile · México" },
    { name: "Jumbo", markets: "Chile · Argentina" },
    { name: "Ripley", markets: "Chile · Perú" },
    { name: "Paris", markets: "Chile" },
  ];

  return (
    <>
      <section className="pt-28 pb-20 gradient-hero relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 mb-5">
            <ShoppingBag size={13} className="text-white" />
            <span className="text-xs font-semibold text-white">Solución</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ejecución perfecta en{" "}
            <span className="text-gradient-brand">cada marketplace de LATAM</span>
          </h1>
          <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto">
            Gestiona, optimiza y monitorea la presencia de tu marca en Falabella, Mercado Libre, Walmart y más, desde una sola plataforma.
          </p>
          <Link href="/es/contacto" className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl text-sm font-semibold text-white gradient-brand hover:opacity-90 transition-opacity">
            Ver Demo <ArrowRight size={16} />
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none"><path d="M0 40L1440 40L1440 10C1200 40 900 0 720 10C540 20 240 0 0 10L0 40Z" fill="white" /></svg>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Retailers y marketplaces conectados</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {retailers.map((r) => (
              <div key={r.name} className="bg-gray-50 rounded-2xl border border-gray-100 p-5 text-center hover:border-primary/30 hover:bg-primary/5 transition-colors">
                <p className="font-bold text-gray-900">{r.name}</p>
                <p className="text-xs text-gray-400 mt-1">{r.markets}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Qué controla Omnitok en cada marketplace</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {["Completitud del contenido del producto", "Calidad y cantidad de imágenes", "Precisión de atributos técnicos", "Consistencia de precio entre canales", "Disponibilidad de stock en tiempo real", "Posicionamiento en resultados de búsqueda", "Calidad y cantidad de reviews", "Cumplimiento de especificaciones por retailer"].map((item) => (
              <div key={item} className="flex items-center gap-2 bg-white rounded-xl p-3.5 border border-gray-100">
                <CheckCircle2 size={15} className="text-success flex-shrink-0" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 gradient-hero">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">¿Cuántos retailers gestionas hoy de forma manual?</h2>
          <Link href="/es/contacto" className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-xl text-sm font-semibold text-white gradient-brand hover:opacity-90 transition-opacity">
            Conversemos <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
