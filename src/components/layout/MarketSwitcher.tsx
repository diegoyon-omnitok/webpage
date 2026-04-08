"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import {
  MARKET_COOKIE,
  marketConfigs,
  type MarketKey,
  getMarketFromPathname,
  getSwitcherTarget,
} from "@/lib/markets";

type MarketSwitcherProps = {
  currentMarket: MarketKey;
  inverted?: boolean;
};

function savePreference(market: MarketKey) {
  document.cookie = `${MARKET_COOKIE}=${market}; path=/; max-age=31536000; samesite=lax`;
}

export default function MarketSwitcher({
  currentMarket,
  inverted = false,
}: MarketSwitcherProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const currentPath = useMemo(() => pathname ?? marketConfigs[currentMarket].homePath, [currentMarket, pathname]);
  const detectedMarket = getMarketFromPathname(currentPath) ?? currentMarket;

  const options = [
    {
      key: "latam" as const,
      label: marketConfigs.latam.label,
      href: getSwitcherTarget(currentPath, "latam"),
    },
    {
      key: "usa" as const,
      label: marketConfigs.usa.label,
      href: getSwitcherTarget(currentPath, "usa"),
    },
  ];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-semibold transition-colors ${
          inverted
            ? "border-white/20 bg-white/10 text-white hover:bg-white/15"
            : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
        }`}
      >
        <span>{marketConfigs[detectedMarket].label}</span>
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open ? (
        <div className="absolute right-0 mt-2 min-w-[220px] rounded-2xl border border-gray-100 bg-white p-2 shadow-xl">
          {options.map((option) => (
            <Link
              key={option.key}
              href={option.href}
              onClick={() => {
                savePreference(option.key);
                setOpen(false);
              }}
              className={`block rounded-xl px-3 py-2.5 text-sm transition-colors ${
                option.key === detectedMarket
                  ? "bg-primary/10 font-semibold text-primary"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {option.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
