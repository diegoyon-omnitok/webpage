import { AlertTriangle, RefreshCcw, EyeOff, BarChart2, FileX, Clock } from "lucide-react";

const problems = [
  {
    icon: FileX,
    title: "PDPs incompletos que no convierten",
    desc: "Productos sin descripción, imágenes incorrectas o atributos vacíos que pierden ventas todos los días.",
  },
  {
    icon: RefreshCcw,
    title: "Información inconsistente entre retailers",
    desc: "El mismo producto aparece diferente en cada canal, dañando la percepción de marca y confundiendo al consumidor.",
  },
  {
    icon: EyeOff,
    title: "Sin visibilidad sobre tu ejecución digital",
    desc: "No sabes cómo aparecen tus productos en cada retailer ni qué está fallando hasta que ya es tarde.",
  },
  {
    icon: Clock,
    title: "Carga manual que escala mal",
    desc: "Hojas de cálculo, emails y procesos manuales para actualizar catálogos en 10, 50 o 200 puntos de venta digitales.",
  },
  {
    icon: BarChart2,
    title: "Poca claridad para detectar oportunidades",
    desc: "Datos dispersos, sin contexto y difíciles de analizar para tomar decisiones de optimización a tiempo.",
  },
  {
    icon: AlertTriangle,
    title: "Productos mal posicionados para conversión",
    desc: "Content no optimizado para los algoritmos de cada retailer hace que tus productos sean invisibles al consumidor.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-error/10 border border-error/20 mb-4">
            <AlertTriangle size={13} className="text-error" />
            <span className="text-xs font-semibold text-error">El costo de no actuar</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            ¿Cuánto te cuesta no controlar cómo aparecen tus productos?
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            Cada día que tu catálogo digital no está optimizado, estás dejando conversiones sobre la mesa. Estos son los problemas que enfrentan las marcas en LATAM.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-error/10 flex items-center justify-center mb-4">
                <p.icon size={20} className="text-error" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{p.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
