import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Casos de Éxito — Marcas que controlan su digital shelf",
  description:
    "Descubre cómo marcas líderes de LATAM usan Omnitok para mejorar conversión, reducir trabajo manual y controlar su ejecución digital.",
};

const cases = [
  {
    brand: "Marca FMCG líder",
    industry: "Consumer Goods",
    country: "Chile",
    modules: ["Content", "Connect"],
    result: "+31% conversión en Mercado Libre",
    detail: "Optimizaron 2,400 PDPs en 3 semanas y eliminaron inconsistencias entre Falabella y MercadoLibre.",
    href: "/casos-de-exito/fmcg-chile",
  },
  {
    brand: "Fabricante de electrónica",
    industry: "Electrónica",
    country: "Perú & Colombia",
    modules: ["Connect", "Analytics"],
    result: "−55% tiempo de actualización de catálogo",
    detail: "Centralizaron 800 SKUs y los distribuyen a 5 retailers simultáneamente en horas, no semanas.",
    href: "/casos-de-exito/electronica-latam",
  },
  {
    brand: "Marca de belleza premium",
    industry: "Belleza",
    country: "México",
    modules: ["Analytics", "Content"],
    result: "Score de ejecución de 38 a 91 en 60 días",
    detail: "Digital Shelf Analytics identificó los productos críticos a mejorar y Content implementó las mejoras.",
    href: "/casos-de-exito/belleza-mexico",
  },
];

export default function CasosDeExitoPage() {
  return (
    <>
      <section className="pt-28 pb-20 gradient-hero relative overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Resultados reales de{" "}
            <span className="text-gradient-brand">marcas reales</span>
          </h1>
          <p className="mt-5 text-lg text-white/70">
            Casos de éxito de marcas que usan Omnitok para controlar y optimizar su ejecución digital en LATAM.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none"><path d="M0 40L1440 40L1440 10C1200 40 900 0 720 10C540 20 240 0 0 10L0 40Z" fill="white" /></svg>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="space-y-6">
            {cases.map((c) => (
              <Link key={c.brand} href={c.href} className="group block bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="gradient-hero p-6 md:w-48 flex flex-col justify-center flex-shrink-0">
                    <p className="text-xs text-white/50 mb-1">{c.country}</p>
                    <p className="font-bold text-white text-sm">{c.brand}</p>
                    <p className="text-xs text-white/50 mt-1">{c.industry}</p>
                  </div>
                  <div className="p-6 flex flex-col md:flex-row items-start md:items-center gap-4 flex-1">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp size={15} className="text-success" />
                        <span className="text-sm font-bold text-success">{c.result}</span>
                      </div>
                      <p className="text-sm text-gray-500">{c.detail}</p>
                      <div className="flex gap-2 mt-3">
                        {c.modules.map((m) => (
                          <span key={m} className="px-2 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary">{m}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all flex-shrink-0">
                      Leer caso <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 gradient-hero">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">¿Tu marca podría ser el próximo caso de éxito?</h2>
          <Link href="/es/contacto" className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-xl text-sm font-semibold text-white gradient-brand hover:opacity-90 transition-opacity">
            Conversemos <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
