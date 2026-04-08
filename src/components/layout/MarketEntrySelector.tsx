"use client";

import Link from "next/link";
import { Globe2, ChevronRight } from "lucide-react";
import { MARKET_COOKIE } from "@/lib/markets";

function savePreference(value: "latam" | "usa") {
  document.cookie = `${MARKET_COOKIE}=${value}; path=/; max-age=31536000; samesite=lax`;
}

export default function MarketEntrySelector() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <Link
        href="/es"
        onClick={() => savePreference("latam")}
        className="group rounded-3xl border border-white/15 bg-white/10 p-7 text-left backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-white/25 hover:bg-white/15"
      >
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
          <Globe2 size={20} />
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">LATAM</p>
        <h2 className="mt-2 text-2xl font-bold text-white">Espanol</h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
          Digital shelf execution, product content syndication and retail execution for brands
          selling across Latin America.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
          Enter LATAM site <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
        </div>
      </Link>

      <Link
        href="/en-us"
        onClick={() => savePreference("usa")}
        className="group rounded-3xl border border-white/15 bg-white/10 p-7 text-left backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-white/25 hover:bg-white/15"
      >
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
          <Globe2 size={20} />
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">UNITED STATES</p>
        <h2 className="mt-2 text-2xl font-bold text-white">English</h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
          MAP monitoring, seller compliance, unauthorized seller visibility and digital shelf
          analytics for brands operating in the US market.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
          Enter US site <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
        </div>
      </Link>
    </div>
  );
}
