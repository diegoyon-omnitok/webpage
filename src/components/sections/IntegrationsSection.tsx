"use client";

import Image from "next/image";

const retailers: { name: string; src: string; logoClassName?: string }[] = [
  { name: "Jumbo",     src: "/integrations/jumbo.png"     },
  { name: "Naldo",     src: "/integrations/naldo.png"     },
  { name: "Paris",     src: "/integrations/paris.png"     },
  { name: "Diggit",    src: "/integrations/diggit.png"    },
  { name: "Hiraoka",   src: "/integrations/hiraoka.png"   },
  { name: "Falabella", src: "/integrations/falabella.png" },
  { name: "Alkosto",   src: "/integrations/alkosto.png"   },
  { name: "Sodimac",   src: "/integrations/sodimac.png"   },
  { name: "Plaza Vea",     src: "/integrations/plazavea.png"     },
  { name: "Mercado Libre", src: "/integrations/mercadolibre.png" },
  {
    name: "Liverpool",
    src: "/integrations/liverpool.png",
    logoClassName: "h-full w-auto max-w-full object-contain bg-white",
  },
  { name: "OnCity",        src: "/integrations/oncity.png"       },
];

// Mismo sistema que ClientsBar: duplicar para loop infinito
const track = [...retailers, ...retailers];

type IntegrationsSectionProps = {
  /** Solo carrusel (p. ej. páginas de producto). */
  hideTitle?: boolean;
};

export default function IntegrationsSection({ hideTitle = false }: IntegrationsSectionProps) {
  return (
    <section
      className={
        hideTitle
          ? "bg-white py-4 sm:py-5 overflow-hidden"
          : "bg-white pt-6 pb-8 overflow-hidden"
      }
    >
      {!hideTitle && (
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Conectado con todo tu ecosistema digital
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Omnitok se integra con los principales retailers y marketplaces de Latinoamérica.
          </p>
        </div>
      )}

      {/* Carrusel — mismo sistema visual que ClientsBar */}
      {retailers.length > 0 && (
        <div className="relative">
          <div
            className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #ffffff, transparent)" }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #ffffff, transparent)" }}
          />

          <div className="retailers-track flex items-center gap-16 w-max">
            {track.map((r, i) => (
              <div
                key={`${r.name}-${i}`}
                className="flex-shrink-0 flex items-center justify-center"
                style={{ width: "180px", height: "80px" }}
              >
                <Image
                  src={r.src}
                  alt={r.name}
                  width={180}
                  height={80}
                  className={
                    r.logoClassName ??
                    "h-full w-auto max-w-full object-contain opacity-100"
                  }
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scroll-retailers {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .retailers-track {
          animation: scroll-retailers 28s linear infinite;
        }
        .retailers-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
