import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

const cases = [
  {
    brand: "Marca FMCG líder",
    industry: "Consumer Goods · Chile",
    result: "+31% en conversión en Mercado Libre",
    detail:
      "Optimizaron 2,400 PDPs en 3 semanas usando Omnitok Content y eliminaron inconsistencias entre Falabella y MercadoLibre.",
    modules: ["Content", "Connect"],
    href: "/casos-de-exito/fmcg-chile",
  },
  {
    brand: "Fabricante de electrónica",
    industry: "Electrónica · Perú & Colombia",
    result: "−55% tiempo de actualización de catálogo",
    detail:
      "Centralizaron 800 SKUs y los distribuyen a 5 retailers simultáneamente. Lo que tomaba 2 semanas ahora toma 2 horas.",
    modules: ["Connect", "Analytics"],
    href: "/casos-de-exito/electronica-latam",
  },
  {
    brand: "Marca de belleza premium",
    industry: "Belleza · México",
    result: "Score de ejecución de 38 a 91 en 60 días",
    detail:
      "Implementaron Digital Shelf Analytics para detectar en tiempo real qué productos necesitaban mejora urgente.",
    modules: ["Analytics", "Content"],
    href: "/casos-de-exito/belleza-mexico",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 lg:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-xs font-semibold text-primary">Casos de éxito</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Marcas que ya controlan su digital shelf
            </h2>
          </div>
          <Link
            href="/casos-de-exito"
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors whitespace-nowrap"
          >
            Ver todos los casos
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <Link
              key={c.brand}
              href={c.href}
              className="group bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 overflow-hidden flex flex-col"
            >
              {/* Top */}
              <div className="gradient-hero p-6">
                <p className="text-xs text-white/50 font-medium mb-1">{c.industry}</p>
                <p className="text-base font-bold text-white">{c.brand}</p>
              </div>

              <div className="p-6 flex flex-col flex-1">
                {/* Result highlight */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp size={14} className="text-success" />
                  </div>
                  <p className="text-sm font-bold text-success">{c.result}</p>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed flex-1">{c.detail}</p>

                {/* Module tags */}
                <div className="flex items-center gap-2 mt-4">
                  {c.modules.map((m) => (
                    <span
                      key={m}
                      className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-primary/10 text-primary"
                    >
                      {m}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1 mt-4 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  Leer caso completo
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
