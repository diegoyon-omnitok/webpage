"use client";

import Image from "next/image";

/* scale compensates for different amounts of internal whitespace in each PNG
   so every logo appears roughly the same visual weight in the marquee.
   wide: true → ultra-wide logos (e.g. Ripley 8:1); removes max-w so
   the image renders at full container height, centered and clipped. */
const integrations: { name: string; src: string; scale?: number; wide?: boolean }[] = [
  { name: "Falabella",    src: "/retailers/falabella.png"                  },
  { name: "Mercado Livre", src: "/retailers/mercado-libre.png"              },
  { name: "Walmart",      src: "/retailers/walmart.png"                   },
  { name: "Paris",        src: "/retailers/paris.png"                      },
  { name: "Easy",         src: "/retailers/easy.png"                       },
  { name: "Éxito",        src: "/retailers/exito.png"                      },
  { name: "Jumbo",        src: "/retailers/jumbo.png"                      },
  { name: "Alkosto",      src: "/retailers/alkosto.png"                    },
  { name: "Homecenter",   src: "/retailers/homecenter.png"                 },
  { name: "Liverpool",    src: "/retailers/liverpool.png",    scale: 1.8  },
  { name: "Coppel",       src: "/retailers/coppel.png"                     },
  { name: "Plaza Vea",    src: "/retailers/plaza-vea.png",    scale: 1.6  },
  { name: "Tottus",       src: "/retailers/tottus.png"                     },
  { name: "OnCity",       src: "/retailers/oncity.png",       scale: 1.4  },
  { name: "Naldo",        src: "/retailers/naldo.png",        scale: 0.6  },
  { name: "Oechsle",      src: "/retailers/oechsle.png"                    },
  { name: "Ripley",       src: "/retailers/ripley.png",       wide: true  },
  { name: "Salcobrand",   src: "/retailers/salcobrand.png"                 },
  { name: "Farmacias Ahumada", src: "/retailers/farmacias-ahumada.png"     },
];

// Duplicate for seamless infinite loop
const track = [...integrations, ...integrations];

type IntegrationsSectionProps = {
  /** Sem título nem subtítulo: apenas o carrossel de varejistas (p. ex. páginas de produto). */
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Conectado a todo o seu ecossistema digital
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A Omnitok se integra aos principais varejistas e marketplaces da América Latina.
            </p>
          </div>
        </div>
      )}

      <div className="relative bg-white">
        {/* Edge fades */}
        <div
          className="absolute left-0 top-0 bottom-0 w-10 sm:w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #ffffff, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-10 sm:w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #ffffff, transparent)" }}
        />

        {/* Track */}
        <div className="integrations-track flex items-center gap-10 w-max">
          {track.map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className="flex-shrink-0 flex items-center justify-center overflow-hidden group"
              style={{ width: item.wide ? "220px" : "120px", height: "50px" }}
            >
              <Image
                src={item.src}
                alt={`Logotipo da ${item.name} — integração da Omnitok`}
                title={item.name}
                width={item.wide ? 220 : 120}
                height={50}
                className="h-full w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                style={{
                  ...(item.scale ? { transform: `scale(${item.scale})` } : {}),
                  maxWidth: item.scale && !item.wide ? "none" : "100%",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-integrations {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
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
