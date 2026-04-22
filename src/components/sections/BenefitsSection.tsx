import { TrendingUp, Clock, ShieldCheck, Target } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: "+23%",
    label: "Aumento promedio en conversión",
    desc: "En PDPs optimizados con Omnitok Content en los primeros 90 días.",
    color: "text-success",
    bg: "bg-success/10",
  },
  {
    icon: Clock,
    value: "−60%",
    label: "Reducción en tiempo operativo",
    desc: "Menos horas dedicadas a actualización manual de catálogos y contenido.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: ShieldCheck,
    value: "98%",
    label: "Consistencia entre retailers",
    desc: "Los mismos atributos, precios e imágenes en todos los canales digitales.",
    color: "text-info",
    bg: "bg-info/10",
  },
  {
    icon: Target,
    value: "< 48h",
    label: "Tiempo al primer resultado",
    desc: "Desde el onboarding hasta los primeros productos distribuidos y monitoreados.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 border border-success/20 mb-4">
            <span className="text-xs font-semibold text-success">Resultados reales</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Métricas que impactan el negocio
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Datos de marcas que ya operan con Omnitok en LATAM.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 text-center"
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl ${m.bg} flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                <m.icon size={20} className={m.color} />
              </div>
              <div className={`text-3xl sm:text-4xl font-extrabold ${m.color} mb-2`}>{m.value}</div>
              <div className="text-sm font-bold text-gray-900 mb-2">{m.label}</div>
              <p className="text-xs text-gray-500 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
