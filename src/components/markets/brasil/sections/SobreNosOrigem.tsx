const cards = [
  {
    label: "Dados sem ação",
    emoji: "📊",
    bgStyle: { background: "rgba(156,163,175,0.12)" },
    iconStyle: { background: "rgba(156,163,175,0.2)" },
    before: true,
  },
  {
    label: "Controle real",
    emoji: "🎯",
    bgStyle: { background: "#4D4A9D" },
    iconStyle: { background: "rgba(255,255,255,0.2)" },
    before: false,
    badge: "Omnitok",
  },
  {
    label: "Erros sem correção",
    emoji: "⚠️",
    bgStyle: { background: "rgba(156,163,175,0.12)" },
    iconStyle: { background: "rgba(156,163,175,0.2)" },
    before: true,
  },
  {
    label: "Execução perfeita",
    emoji: "✅",
    bgStyle: { background: "#4D4A9D" },
    iconStyle: { background: "rgba(255,255,255,0.2)" },
    before: false,
    badge: "Omnitok",
  },
];

export default function SobreNosOrigem() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Texto */}
          <div className="text-left">
            <div
              className="inline-flex items-center px-4 py-1.5 rounded-full mb-5"
              style={{ background: "linear-gradient(90deg,#FF177B 0%,#4D4A9D 100%)" }}
            >
              <span className="text-xs font-semibold text-white">Sobre a Omnitok</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6 text-balance">
              Nascemos de um problema real do ecommerce
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                A Omnitok nasce de um problema que as marcas enfrentam no ecommerce:{" "}
                <strong className="text-gray-900">a falta de controle sobre a execução de seus produtos</strong>.
              </p>
              <p>
                Inicialmente medíamos preços, disponibilidade, conteúdo e desempenho. Tínhamos dados e insights,
                mas as marcas não conseguiam agir sobre essa informação.
              </p>
              <p>
                Elas não controlavam como seus produtos apareciam nem conseguiam corrigir erros.
              </p>
              <p
                className="font-semibold text-lg pl-4 text-left"
                style={{ borderLeft: "4px solid #4D4A9D", color: "#4D4A9D" }}
              >
                Foi aí que entendemos que o problema não era a informação, e sim a execução.
              </p>
            </div>
          </div>

          {/* Visual — cards con colores del UI kit */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-5">
              {cards.map((item) => (
                <div
                  key={item.label}
                  className={`group relative rounded-2xl p-6 text-center transition-all duration-300 border ${
                    item.before
                      ? "border-gray-200 opacity-55 grayscale"
                      : "border-transparent shadow-lg hover:scale-105 hover:shadow-xl cursor-default"
                  }`}
                  style={item.bgStyle}
                >
                  {/* Ícono */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 transition-transform duration-300 ${
                      !item.before ? "group-hover:scale-110" : ""
                    }`}
                    style={item.iconStyle}
                  >
                    <span className="text-3xl leading-none">{item.emoji}</span>
                  </div>

                  <p
                    className={`text-sm font-semibold ${
                      item.before ? "text-gray-400 line-through" : "text-white"
                    }`}
                  >
                    {item.label}
                  </p>

                  {item.badge && (
                    <span
                      className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-xs font-bold text-white/80 border border-white/30"
                    >
                      {item.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Flecha central */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center shadow-xl ring-4 ring-white"
                style={{ background: "linear-gradient(135deg,#FF177B 0%,#4D4A9D 100%)" }}
              >
                <span className="text-white font-bold text-base">→</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
