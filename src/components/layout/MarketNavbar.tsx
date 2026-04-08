"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import type { MarketKey } from "@/lib/markets";
import { marketConfigs } from "@/lib/markets";
import MarketSwitcher from "./MarketSwitcher";

type MarketNavbarProps = {
  market: MarketKey;
};

export default function MarketNavbar({ market }: MarketNavbarProps) {
  const config = marketConfigs[market];
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [pinnedDropdown, setPinnedDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setPinnedDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const activeDropdown = pinnedDropdown ?? openDropdown;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-nav backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex min-h-[4.5rem] max-w-7xl items-center justify-between px-6 py-2 lg:px-8 sm:min-h-20 sm:py-0">
        <Link href={config.homePath} className="flex items-center flex-shrink-0">
          <Image
            src="/omnitok-logo.svg"
            alt="Omnitok"
            width={200}
            height={52}
            className={`h-10 w-auto object-contain transition-all sm:h-11 lg:h-12 ${
              isScrolled
                ? "[filter:brightness(0)_saturate(100%)_invert(28%)_sepia(60%)_saturate(600%)_hue-rotate(220deg)_brightness(85%)]"
                : ""
            }`}
            priority
          />
        </Link>

        <nav ref={navRef} className="hidden items-center gap-1 lg:flex">
          {config.navGroups.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => !pinnedDropdown && setOpenDropdown(group.label)}
              onMouseLeave={() => !pinnedDropdown && setOpenDropdown(null)}
            >
              <button
                type="button"
                onClick={() =>
                  setPinnedDropdown(pinnedDropdown === group.label ? null : group.label)
                }
                className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {group.label}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${activeDropdown === group.label ? "rotate-180" : ""}`}
                />
              </button>
              {activeDropdown === group.label ? (
                <div className="absolute left-0 top-full mt-1 w-72 rounded-2xl border border-gray-100 bg-white p-2 shadow-modal">
                  {group.items.map((item) =>
                    item.external ? (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-xl px-3 py-3 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                      >
                        <div className="font-semibold text-gray-900">{item.label}</div>
                        {item.desc ? <div className="mt-0.5 text-xs text-gray-500">{item.desc}</div> : null}
                      </a>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-xl px-3 py-3 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                        onClick={() => setPinnedDropdown(null)}
                      >
                        <div className="font-semibold text-gray-900">{item.label}</div>
                        {item.desc ? <div className="mt-0.5 text-xs text-gray-500">{item.desc}</div> : null}
                      </Link>
                    ),
                  )}
                  {group.overviewHref ? (
                    <div className="mt-1 border-t border-gray-100 pt-2">
                      <Link
                        href={group.overviewHref}
                        className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-gray-50"
                        onClick={() => setPinnedDropdown(null)}
                      >
                        <span>{group.overviewLabel ?? "View all"}</span>
                        <span className="text-xs">→</span>
                      </Link>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          ))}

          {config.topLevelNav?.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  : "text-white/90 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <MarketSwitcher currentMarket={market} inverted={!isScrolled} />
          <Link
            href={config.ctaHref}
            className="rounded-xl px-5 py-2 text-sm font-semibold text-white shadow-sm transition-opacity gradient-brand hover:opacity-90"
          >
            {config.ctaLabel}
          </Link>
        </div>

        <button
          type="button"
          className={`rounded-lg p-2 lg:hidden ${isScrolled ? "text-gray-700" : "text-white"}`}
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-gray-100 bg-white shadow-lg lg:hidden">
          <div className="space-y-4 px-6 py-4">
            {config.navGroups.map((group) => (
              <div key={group.label}>
                <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  {group.label}
                </p>
                <div className="space-y-1">
                  {group.items.map((item) =>
                    item.external ? (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ),
                  )}
                  {group.overviewHref ? (
                    <Link
                      href={group.overviewHref}
                      className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-primary hover:bg-gray-50"
                      onClick={() => setMobileOpen(false)}
                    >
                      {group.overviewLabel ?? "View all"}
                    </Link>
                  ) : null}
                </div>
              </div>
            ))}

            {config.topLevelNav?.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="flex items-center justify-between gap-3 border-t border-gray-100 pt-3">
              <MarketSwitcher currentMarket={market} />
              <Link
                href={config.ctaHref}
                className="rounded-xl px-5 py-3 text-sm font-semibold text-white gradient-brand"
                onClick={() => setMobileOpen(false)}
              >
                {config.ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
