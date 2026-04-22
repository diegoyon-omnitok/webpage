import { ArrowRight, Search, DollarSign, FileText } from "lucide-react";

const tools = [
  {
    icon: Search,
    title: "Share of Search",
    desc: "Analiza el posicionamiento de tus productos en las categorías clave de cada retailer.",
  },
  {
    icon: DollarSign,
    title: "Bandas de Precio",
    desc: "Visualiza cómo se distribuyen los precios en tu categoría y dónde se posiciona tu marca.",
  },
  {
    icon: FileText,
    title: "Análisis de PDP",
    desc: "Evalúa la completitud y calidad de tus páginas de producto en cada canal digital.",
  },
];

export default function LabsSection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #211f4b 0%, #2d2a6e 50%, #1a1838 100%)" }}>
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/30 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 mb-5">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-semibold text-white">Gratis, sin registro</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            Analiza tu ejecución digital gratis con{" "}
            <span className="text-gradient-brand">Omnitok Labs</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            Tres herramientas de diagnóstico para entender cómo se posiciona tu marca en retailers y marketplaces. Sin compromiso.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div key={tool.title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(255,23,123,0.15)" }}>
                  <Icon size={20} className="text-accent" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{tool.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{tool.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <a
            href="https://lab.omnitok.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-brand hover:opacity-90 transition-opacity shadow-lg"
          >
            Ir a Omnitok Labs
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
