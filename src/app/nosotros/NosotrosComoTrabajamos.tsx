import {
  Database,
  RefreshCw,
  ShieldAlert,
  TrendingUp,
  Rocket,
} from "lucide-react";

const beneficios = [
  {
    icon: Database,
    titulo: "Centralización de información",
    desc: "Un solo lugar para gestionar el contenido de todos tus productos en todos los retailers.",
    accent: "#4D4A9D",
  },
  {
    icon: RefreshCw,
    titulo: "Consistencia entre retailers",
    desc: "El mismo mensaje, los mismos atributos y la misma calidad en cada punto de venta digital.",
    accent: "#FF177B",
  },
  {
    icon: ShieldAlert,
    titulo: "Detección temprana de errores",
    desc: "Alertas automáticas antes de que un error afecte la conversión o la visibilidad del producto.",
    accent: "#4D4A9D",
  },
  {
    icon: TrendingUp,
    titulo: "Mejora de conversión",
    desc: "Fichas completas, enriquecidas y actualizadas que reducen la fricción en la decisión de compra.",
    accent: "#FF177B",
  },
  {
    icon: Rocket,
    titulo: "Escalabilidad operativa",
    desc: "Gestiona cientos de SKUs y múltiples retailers sin multiplicar el equipo ni los procesos manuales.",
    accent: "#4D4A9D",
  },
];

export default function NosotrosComoTrabajamos() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Header centrado */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center px-4 py-1.5 rounded-full mb-4"
            style={{ background: "linear-gradient(90deg,#FF177B 0%,#4D4A9D 100%)" }}
          >
            <span className="text-xs font-semibold text-white">Cómo trabajamos</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 text-balance">
            Cómo es trabajar con Omnitok
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            No es implementar una herramienta más. Es pasar de procesos manuales y fragmentados
            a tener <strong className="text-gray-700">control real</strong> sobre cómo se ejecutan
            tus productos en el canal digital.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* Tarjetas de beneficios */}
          {beneficios.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={b.titulo}
                className="group relative bg-gray-50 rounded-2xl border border-gray-100 p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Número decorativo de fondo */}
                <span
                  className="absolute -top-3 -right-1 text-8xl font-black leading-none select-none pointer-events-none opacity-[0.06]"
                  style={{ color: b.accent }}
                >
                  {i + 1}
                </span>

                {/* Ícono */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${b.accent}18` }}
                >
                  <Icon size={20} style={{ color: b.accent }} />
                </div>

                <h3 className="text-sm font-bold text-gray-900 mb-2 leading-snug">
                  {b.titulo}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {b.desc}
                </p>

                {/* Línea inferior de acento */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                  style={{ background: b.accent }}
                />
              </div>
            );
          })}

          {/* Tarjeta de cierre — ocupa el espacio restante */}
          <div
            className="sm:col-span-2 lg:col-span-1 rounded-2xl p-7 flex flex-col justify-between"
            style={{ background: "linear-gradient(135deg,#4D4A9D 0%,#FF177B 100%)" }}
          >
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              El resultado de trabajar con Omnitok no es solo eficiencia operativa.
              Es un cambio de postura frente al canal digital.
            </p>
            <p className="text-white text-2xl font-bold leading-snug">
              Dejan de reaccionar.
              <br />
              Empiezan a controlar.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
