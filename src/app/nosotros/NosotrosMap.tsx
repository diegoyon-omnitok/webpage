"use client";

/**
 * Posiciones calibradas al asset `world-map-outline.svg` (viewBox 0 0 950 620).
 * Cada `leftPct`/`topPct` sale de inspeccionar los paths del SVG (centro visual del país / capital de referencia).
 */
type MapPin = {
  name: string;
  /** 0–100, posición horizontal respecto al ancho del mapa */
  leftPct: number;
  /** 0–100, posición vertical respecto al alto del mapa */
  topPct: number;
  /** Tamaño visual del punto en el mapa */
  size: 1 | 2 | 3;
};

const pins: MapPin[] = [
  /* Chile: faja costera del path ~x 268–285; Santiago ~y 435–445 en este SVG (no usar lat/lng suelto) */
  { name: "Chile", leftPct: 28.2, topPct: 70.9, size: 2 },
  { name: "Argentina", leftPct: 32.1, topPct: 69.4, size: 2 },
  { name: "Colombia", leftPct: 26.5, topPct: 51.0, size: 2 },
  { name: "Perú", leftPct: 25.0, topPct: 59.8, size: 2 },
  { name: "México", leftPct: 16.6, topPct: 42.0, size: 3 },
  { name: "Ecuador", leftPct: 24.6, topPct: 56.2, size: 1 },
  { name: "Centroamérica", leftPct: 22.7, topPct: 47.2, size: 2 },
  { name: "Estados Unidos", leftPct: 20.9, topPct: 32.0, size: 3 },
  { name: "Canadá", leftPct: 20.5, topPct: 22.5, size: 2 },
  { name: "Brasil", leftPct: 35.3, topPct: 61.0, size: 3 },
  { name: "Europa", leftPct: 49.0, topPct: 27.0, size: 2 },
];

const sizeClass: Record<MapPin["size"], string> = {
  1: "w-[6px] h-[6px]",
  2: "w-[9px] h-[9px]",
  3: "w-[12px] h-[12px]",
};

const presenceMarqueeTrack = [...pins, ...pins];

function RegionMarqueeChip({ name }: { name: string }) {
  const initial = name[0] ?? "?";
  return (
    <div
      className="flex items-center gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-white border border-gray-200/90 flex-shrink-0 min-w-[118px] sm:min-w-[132px] shadow-[0_4px_14px_-4px_rgba(255,23,123,0.12),0_2px_8px_-4px_rgba(0,0,0,0.06)] transition-[box-shadow,border-color] duration-200 hover:border-[#FF177B]/35"
      title={`${name} · Presencia Omnitok`}
    >
      <span
        className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-[10px] sm:text-xs font-bold text-white shadow-[0_0_12px_rgba(255,23,123,0.45)]"
        style={{ background: "linear-gradient(135deg, #FF177B 0%, #d91468 100%)" }}
      >
        {initial}
      </span>
      <span className="text-[11px] sm:text-xs font-bold text-gray-800 leading-tight text-left line-clamp-2">{name}</span>
    </div>
  );
}

export default function NosotrosMap() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#FF177B" }}>
            Presencia
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Estamos donde están tus retailers</h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Operamos en la mayor parte de Latinoamérica, con presencia además en Europa y Estados Unidos.
          </p>
        </div>
      </div>

      {/* Mini carrusel de regiones (mismo patrón que retailers en home) */}
      <div className="relative w-full overflow-hidden mb-8">
        <div
          className="absolute left-0 top-0 bottom-0 w-14 sm:w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #ffffff, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-14 sm:w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #ffffff, transparent)" }}
        />
        <div className="presence-map-marquee flex items-center gap-2.5 sm:gap-3 w-max py-1.5">
          {presenceMarqueeTrack.map((pin, i) => (
            <RegionMarqueeChip key={`${pin.name}-${i}`} name={pin.name} />
          ))}
        </div>
        <style jsx>{`
          @keyframes scroll-presence-map {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .presence-map-marquee {
            animation: scroll-presence-map 32s linear infinite reverse;
          }
          .presence-map-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Marco: borde + sombra + padding para que los bordes del SVG no se vean “cortados” sobre el fondo */}
        <div
          className="relative w-full max-w-5xl mx-auto rounded-2xl border border-gray-200/90 bg-gradient-to-b from-gray-50/90 to-white p-2.5 sm:p-3
            shadow-[0_12px_40px_-16px_rgba(77,74,157,0.18),0_0_0_1px_rgba(17,24,39,0.04)]"
        >
          <div className="relative overflow-hidden rounded-xl bg-white ring-1 ring-gray-200/60 shadow-inner">
            <div className="relative select-none leading-none">
              {/* eslint-disable-next-line @next/next/no-img-element -- SVG mapa plano; evita optimizador de imágenes con SVG complejo */}
              <img
                src="/world-map-outline.svg"
                alt=""
                width={950}
                height={620}
                className="w-full h-auto max-w-none block align-top pointer-events-none
                  [filter:grayscale(1)_brightness(0.42)_contrast(1.02)]"
              />

              <div className="absolute inset-0 pointer-events-none overflow-visible" aria-hidden>
            {pins.map((pin, i) => {
              const left = `${pin.leftPct}%`;
              const top = `${pin.topPct}%`;
              const delay = `${(i % 6) * 0.22}s`;
              return (
                <div
                  key={pin.name}
                  className="absolute flex items-center justify-center"
                  style={{ left, top, transform: "translate(-50%, -50%)" }}
                >
                      <div className="relative flex items-center justify-center">
                        <span
                          className="map-dot-halo pointer-events-none absolute w-8 h-8 rounded-full bg-[#FF177B]/45"
                          style={{ animationDelay: delay }}
                        />
                        <span
                          className={`map-dot-core relative z-[1] rounded-full bg-[#FF177B] shadow-[0_0_14px_rgba(255,23,123,0.55)] ${sizeClass[pin.size]}`}
                          style={{ animationDelay: delay }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500 max-w-md mx-auto">
          Las marcas indican presencia u operación en la región. Tamaño orientativo.
        </p>
      </div>
    </section>
  );
}
