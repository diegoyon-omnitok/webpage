"use client";

import Image from "next/image";

const clients: { name: string; src: string; small?: boolean }[] = [
  { name: "Rheem",      src: "/clients/rheem-clean.png"      },
  { name: "Hisense",    src: "/clients/hisense-clean.png"    },
  { name: "L'Oréal",    src: "/clients/loreal-clean.png"     },
  { name: "roSen",      src: "/clients/rosen-clean.png"      },
  { name: "Newell",     src: "/clients/newell-clean.png"     },
  { name: "Beiersdorf", src: "/clients/beiersdorf-clean.png" },
  { name: "TCL",        src: "/clients/tcl-clean.png", small: true },
  { name: "Midea",      src: "/clients/midea-clean.png"      },
];

const track = [...clients, ...clients];

export default function LogoBar() {
  return (
    <section className="bg-white py-6 overflow-hidden">
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

        {/* Track */}
        <div className="logos-track flex items-center gap-16 w-max">
          {track.map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ width: "180px", height: "80px" }}
            >
              <Image
                src={client.src}
                alt={`${client.name} logo — Omnitok client`}
                title={client.name}
                width={180}
                height={80}
                className={
                  (client.small
                    ? "h-[60%] w-auto max-w-full object-contain"
                    : "h-full w-auto max-w-full object-contain") +
                  " grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                }
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-logos {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logos-track {
          animation: scroll-logos 28s linear infinite;
        }
        .logos-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
