"use client";

const retailers = [
  "Falabella",
  "Mercado Libre",
  "Walmart",
  "Paris",
  "Easy",
  "Sodimac",
  "Éxito",
  "Jumbo",
  "Alkosto",
  "Homecenter",
  "Liverpool",
  "Coppel",
  "Costco",
  "Plaza Vea",
  "Tottus",
  "Hiraoka",
  "OnCity",
  "Naldo",
  "Ripley",
  "Linio",
];

// Duplicate for seamless loop
const track = [...retailers, ...retailers];

export default function LogoBar() {
  return (
    <section
      className="relative py-6 overflow-hidden gradient-hero"
    >
      {/* Same grid pattern as hero */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Pink & purple glows */}
      <div className="absolute top-1/2 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      {/* Title */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-10 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Conectados con los principales retailers de LATAM
        </h3>
      </div>

      {/* Marquee */}
      <div className="relative z-10">
        {/* Edge fades */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #211f4b, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #1a1838, transparent)" }}
        />

        {/* Track */}
        <div className="logobar-track flex items-center gap-12 w-max py-2">
          {track.map((name, i) => (
            <span
              key={i}
              className="text-2xl font-semibold text-white/80 whitespace-nowrap flex-shrink-0 hover:text-white transition-colors cursor-default"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-right {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logobar-track {
          animation: scroll-right 30s linear infinite;
        }
        .logobar-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
