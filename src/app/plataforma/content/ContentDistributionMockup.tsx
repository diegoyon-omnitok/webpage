"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Check, Sparkles, ArrowDown } from "lucide-react";

const FICHA = "/plataforma/content/ficha ejemplo.png";

const retailers = [
  { name: "Retail 1" },
  { name: "Retail 2" },
  { name: "Retail 3" },
  { name: "Retail 4" },
  { name: "Retail 5" },
  { name: "Retail 6" },
];

export default function ContentDistributionMockup() {
  const [published, setPublished] = useState<number[]>([]);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setPublished([]);
    const timers: ReturnType<typeof setTimeout>[] = [];
    retailers.forEach((_, i) => {
      timers.push(setTimeout(() => setPublished((prev) => [...prev, i]), i * 350 + 500));
    });
    const restart = setTimeout(() => setCycle((c) => c + 1), 4500);
    return () => { timers.forEach(clearTimeout); clearTimeout(restart); };
  }, [cycle]);

  return (
    <div className="w-full flex flex-col items-center gap-4">

      {/* Source: the enriched content card using real ficha */}
      <div className="w-56 rounded-xl overflow-hidden shadow-lg border border-gray-200 relative">
        <div className="absolute top-2 left-2 z-10">
          <span className="inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[6px] font-bold text-white shadow-md" style={{ background: "linear-gradient(90deg, #FF177B 0%, #4D4A9D 100%)" }}>
            <Sparkles size={6} /> Tu contenido enriquecido
          </span>
        </div>
        <Image
          src={FICHA}
          alt="Ficha de contenido enriquecido lista para distribuir"
          width={224}
          height={160}
          className="w-full h-40 object-cover object-top"
        />
        <div className="bg-white px-2.5 py-1.5 flex items-center justify-center gap-1.5 border-t border-gray-100">
          {["Inpage", "Hotspots", "Banner"].map((m) => (
            <span key={m} className="text-[6px] font-bold rounded-full px-2 py-0.5 text-white" style={{ background: m === "Hotspots" ? "#4D4A9D" : "#FF177B" }}>{m}</span>
          ))}
        </div>
      </div>

      {/* Arrow */}
      <div className="flex flex-col items-center gap-1">
        <div className="w-px h-4" style={{ background: "linear-gradient(180deg, #FF177B 0%, #4D4A9D 100%)" }} />
        <div className="w-7 h-7 rounded-full flex items-center justify-center shadow-md" style={{ background: "linear-gradient(135deg, #FF177B 0%, #4D4A9D 100%)" }}>
          <ArrowDown size={12} className="text-white" />
        </div>
        <p className="text-[7px] font-bold text-gray-400 uppercase tracking-wider">Distribución automática</p>
      </div>

      {/* Retailer grid */}
      <div className="w-full grid grid-cols-3 gap-2">
        {retailers.map((r, i) => {
          const done = published.includes(i);
          return (
            <div
              key={r.name}
              className={`rounded-lg border overflow-hidden transition-all duration-500 ${done ? "border-green-300 shadow-sm" : "border-gray-200"}`}
            >
              {/* Mini ficha preview */}
              <div className={`h-16 transition-all duration-500 overflow-hidden ${done ? "opacity-100" : "opacity-30"}`}>
                {done ? (
                  <Image src={FICHA} alt="" width={150} height={64} className="w-full h-full object-cover object-top" />
                ) : (
                  <div className="h-full bg-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-8 h-5 mx-auto rounded-sm bg-gray-200 mb-1" />
                      <div className="w-10 h-0.5 mx-auto rounded-full bg-gray-200" />
                    </div>
                  </div>
                )}
              </div>

              {/* Status */}
              <div className={`px-2 py-1.5 flex items-center justify-between transition-colors duration-500 ${done ? "bg-green-50" : "bg-gray-50"}`}>
                <span className={`text-[7px] font-bold ${done ? "text-gray-800" : "text-gray-400"}`}>{r.name}</span>
                <span className={`inline-flex items-center gap-0.5 text-[6px] font-semibold ${done ? "text-green-600" : "text-gray-300"}`}>
                  {done ? <><Check size={7} /> Live</> : "..."}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Counter */}
      <div className="text-center">
        <p className="text-[11px] font-black tabular-nums" style={{ color: "#FF177B" }}>
          {published.length}/{retailers.length} retailers actualizados
        </p>
        <p className="text-[8px] text-gray-400">
          Más de 150 retailers conectados en la red de Omnitok
        </p>
      </div>
    </div>
  );
}
