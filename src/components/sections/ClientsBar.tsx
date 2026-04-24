"use client";

import Image from "next/image";

// `tall` = stacked logos (icon + wordmark) that need extra height to stay legible.
// `shiftUp` = logos whose wordmark sits below the visual center because the source
//             image has extra content (taglines, secondary text) below the wordmark.
const clients: { name: string; src: string; tall?: boolean; shiftUp?: boolean }[] = [
  { name: "HP",            src: "/clients/hp-logo.png" },
  { name: "Panasonic",     src: "/clients/panasonic-logo.png" },
  { name: "Electrolux",    src: "/clients/electrolux-logo.png", tall: true },
  { name: "Midea",         src: "/clients/midea-logo.png" },
  { name: "Hisense",       src: "/clients/hisense-logo.png" },
  { name: "TCL",           src: "/clients/tcl-logo.png" },
  { name: "L'Oréal",       src: "/clients/loreal-logo.png" },
  { name: "Beiersdorf",    src: "/clients/beiersdorf-logo.png" },
  { name: "Newell Brands", src: "/clients/newell-logo.png" },
  { name: "Reckitt",       src: "/clients/reckitt-logo.png",   shiftUp: true },
  { name: "Edgewell",      src: "/clients/edgewell-logo.png",  shiftUp: true },
  { name: "Kärcher",       src: "/clients/karcher-logo.png" },
  { name: "Red Bull",      src: "/clients/redbull-logo.png" },
];

// Duplicate for seamless infinite loop
const track = [...clients, ...clients];

export default function ClientsBar() {
  return (
    <section className="bg-white pt-6 pb-8 overflow-hidden">
      {/* Marquee */}
      <div className="relative">
        {/* Edge fades */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #ffffff, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #ffffff, transparent)" }}
        />

        {/* Track — margin-right on every item (including the last) keeps spacing
            uniform across the seam so the loop restarts without a visible gap. */}
        <div className="clients-track flex items-center w-max">
          {track.map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center mr-12 sm:mr-14"
              style={{ width: "140px", height: "56px" }}
            >
              <Image
                src={client.src}
                alt={`Logo de ${client.name} — cliente de Omnitok`}
                title={client.name}
                width={140}
                height={56}
                className={
                  (client.tall
                    ? "max-h-16 "
                    : client.shiftUp
                      ? "max-h-12 "
                      : "max-h-10 ") +
                  (client.shiftUp ? "-translate-y-[5px] " : "") +
                  "w-auto max-w-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                }
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-clients {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .clients-track {
          animation: scroll-clients 40s linear infinite;
        }
        .clients-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
