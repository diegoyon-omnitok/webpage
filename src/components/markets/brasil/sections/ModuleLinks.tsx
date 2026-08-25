"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { canonicalRoutes } from "@/lib/markets";

export type ProductModuleId = "content" | "connect" | "digital-shelf-analytics";

const allModules: { id: ProductModuleId; label: string; href: string; color: string }[] = [
  { id: "digital-shelf-analytics", label: "Omnitok DSA", href: canonicalRoutes.brasil.dsa, color: "#393689" },
  { id: "content", label: "Omnitok Content", href: canonicalRoutes.brasil.content, color: "#FF177B" },
  { id: "connect", label: "Omnitok PIM", href: canonicalRoutes.brasil.connect, color: "#1F87B5" },
];

/** Bloco “Combine com” para incorporar dentro da mesma seção que o FAQ */
export function CombineWithLinks({ exclude }: { exclude: ProductModuleId }) {
  const modules = allModules.filter((m) => m.id !== exclude);

  return (
    <>
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-[0.2em] mb-6">Combine com</p>
      <div className="flex flex-wrap justify-center gap-3">
        {modules.map((m) => (
          <Link
            key={m.id}
            href={m.href}
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl border bg-white text-sm font-semibold transition-all duration-200 hover:text-white hover:border-transparent hover:shadow-md"
            style={{ borderColor: "rgba(77,74,157,0.25)", color: m.color }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, #FF177B 0%, #4D4A9D 100%)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "";
              e.currentTarget.style.color = m.color;
            }}
          >
            {m.label} <ArrowRight size={14} />
          </Link>
        ))}
      </div>
    </>
  );
}

/** Seção independente (p. ex. Digital Shelf sem FAQ) */
export default function ModuleLinks({ exclude }: { exclude: ProductModuleId }) {
  return (
    <section className="py-14 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <CombineWithLinks exclude={exclude} />
      </div>
    </section>
  );
}
