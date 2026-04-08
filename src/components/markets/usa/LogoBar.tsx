"use client";

import Image from "next/image";

const logos = [
  { name: "HP",      src: "/logos/logo-hp.jpg" },
  { name: "Samsung", src: "/logos/logo-samsung.jpg" },
  { name: "Oster",   src: "/logos/logo-oster.jpg" },
  { name: "Brand",   src: "/logos/logo-5.png" },
];

const track = [...logos, ...logos, ...logos, ...logos];

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
          {track.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ width: "180px", height: "80px" }}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={180}
                height={80}
                className="h-full w-auto max-w-full object-contain"
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
          animation: scroll-logos 18s linear infinite;
        }
      `}</style>
    </section>
  );
}
