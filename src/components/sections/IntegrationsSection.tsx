"use client";

const integrations = [
  { name: "Falabella", category: "Retailer" as const },
  { name: "Mercado Libre", category: "Marketplace" as const },
  { name: "Walmart", category: "Retailer" as const },
  { name: "Paris", category: "Retailer" as const },
  { name: "Easy", category: "Retailer" as const },
  { name: "Sodimac", category: "Retailer" as const },
  { name: "Éxito", category: "Retailer" as const },
  { name: "Jumbo", category: "Retailer" as const },
  { name: "Alkosto", category: "Retailer" as const },
  { name: "Homecenter", category: "Retailer" as const },
  { name: "Liverpool", category: "Retailer" as const },
  { name: "Coppel", category: "Retailer" as const },
  { name: "Costco", category: "Retailer" as const },
  { name: "Plaza Vea", category: "Retailer" as const },
  { name: "Tottus", category: "Retailer" as const },
  { name: "Hiraoka", category: "Retailer" as const },
  { name: "OnCity", category: "Marketplace" as const },
  { name: "Naldo", category: "Retailer" as const },
  { name: "Diggit", category: "Marketplace" as const },
];

const track = [...integrations, ...integrations];

function MarqueeChip({
  name,
  category,
}: {
  name: string;
  category: "Retailer" | "Marketplace";
}) {
  return (
    <div
      className="flex items-center gap-2 sm:gap-2.5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-white border border-gray-200/90 flex-shrink-0 min-w-[140px] sm:min-w-[160px] transition-[box-shadow,border-color] duration-200 shadow-[0_6px_20px_-4px_rgba(77,74,157,0.14),0_2px_10px_-4px_rgba(0,0,0,0.07)] hover:border-primary/35 hover:shadow-[0_12px_28px_-6px_rgba(77,74,157,0.2),0_4px_14px_-4px_rgba(0,0,0,0.08)]"
      title={`${name} · ${category}`}
    >
      <span
        className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-xs sm:text-sm font-bold text-white"
        style={{ background: "linear-gradient(135deg, #4D4A9D 0%, #3B3880 100%)" }}
      >
        {name[0]}
      </span>
      <span className="text-xs sm:text-sm font-bold text-gray-800 leading-tight text-left line-clamp-2">
        {name}
      </span>
    </div>
  );
}

type IntegrationsSectionProps = {
  /** Sin título ni subtítulo: solo el carrusel de retailers (p. ej. páginas de producto). */
  hideTitle?: boolean;
};

export default function IntegrationsSection({ hideTitle = false }: IntegrationsSectionProps) {
  return (
    <section
      className={
        hideTitle
          ? "w-full overflow-hidden bg-white py-4 sm:py-5"
          : "w-full overflow-hidden bg-white pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8 lg:pb-10"
      }
    >
      {!hideTitle && (
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="mx-auto mb-5 w-full max-w-3xl text-center sm:mb-6 lg:mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Conectado con todo tu ecosistema digital
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Omnitok se integra con los principales retailers y marketplaces de Latinoamérica.
            </p>
          </div>
        </div>
      )}

      <div className="relative bg-white">
        <div
          className="absolute left-0 top-0 bottom-0 w-20 sm:w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #ffffff, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 sm:w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #ffffff, transparent)" }}
        />

        <div className="integrations-track flex items-center gap-3 sm:gap-4 w-max py-2">
          {track.map((item, i) => (
            <MarqueeChip key={`${item.name}-${i}`} name={item.name} category={item.category} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-integrations {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .integrations-track {
          animation: scroll-integrations 38s linear infinite reverse;
        }
        .integrations-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
