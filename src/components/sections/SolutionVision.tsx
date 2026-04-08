import { ArrowRight, Building2, Layers, Store } from "lucide-react";
import Link from "next/link";

export default function SolutionVision() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-xs font-semibold text-primary">La solución</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Omnitok es tu plataforma de{" "}
              <span className="text-gradient-brand">ejecución digital en retail</span>
            </h2>
            <p className="mt-5 text-lg text-gray-500 leading-relaxed">
              Conectamos tu marca con cada retailer digital, asegurando que tus productos
              aparezcan correctos, completos y optimizados para convertir — en todos los canales,
              al mismo tiempo.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Control total sobre cómo aparecen tus productos en cada canal",
                "Distribución automática a múltiples retailers desde una sola plataforma",
                "Visibilidad en tiempo real sobre tu ejecución digital",
                "IA que mejora la experiencia del consumidor en el punto de decisión",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full gradient-brand flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>

            <Link
              href="/plataforma"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl text-sm font-semibold text-white gradient-primary hover:opacity-90 transition-opacity"
            >
              Explorar la plataforma
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right: flow diagram */}
          <div className="relative">
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              {/* Flow */}
              <div className="space-y-3">
                {/* Marca */}
                <div className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-gray-100 shadow-card">
                  <div className="w-10 h-10 rounded-xl gradient-card flex items-center justify-center flex-shrink-0">
                    <Building2 size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Tu Marca</p>
                    <p className="text-xs text-gray-500">Catálogo, contenido e información del producto</p>
                  </div>
                </div>

                {/* Arrow down */}
                <div className="flex justify-center">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-4 bg-primary/30" />
                    <div className="w-2 h-2 rounded-full bg-primary/50" />
                    <div className="w-px h-4 bg-primary/30" />
                  </div>
                </div>

                {/* Omnitok platform */}
                <div className="flex items-center gap-4 rounded-2xl p-4 gradient-brand shadow-lg">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Layers size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Omnitok Platform</p>
                    <p className="text-xs text-white/80">Centraliza, enriquece, distribuye y monitorea</p>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {["C", "C", "A", "D"].map((letter, i) => (
                      <div key={i} className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-white">{letter}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow down */}
                <div className="flex justify-center">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-4 bg-primary/30" />
                    <div className="w-2 h-2 rounded-full bg-primary/50" />
                    <div className="w-px h-4 bg-primary/30" />
                  </div>
                </div>

                {/* Retailers */}
                <div className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-gray-100 shadow-card">
                  <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center flex-shrink-0">
                    <Store size={20} className="text-success" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Retailers y Marketplaces</p>
                    <p className="text-xs text-gray-500">Falabella · Mercado Libre · Walmart · Jumbo · +</p>
                  </div>
                </div>
              </div>

              {/* Stats at bottom */}
              <div className="grid grid-cols-3 gap-3 mt-5">
                {[
                  { val: "100%", label: "Cobertura" },
                  { val: "< 48h", label: "Onboarding" },
                  { val: "6+", label: "Retailers" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center bg-white rounded-xl p-3 border border-gray-100">
                    <p className="text-lg font-bold text-primary">{stat.val}</p>
                    <p className="text-[10px] text-gray-400 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
