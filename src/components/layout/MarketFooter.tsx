import Link from "next/link";
import Image from "next/image";
import type { MarketKey } from "@/lib/markets";
import { marketConfigs, canonicalRoutes } from "@/lib/markets";

type MarketFooterProps = {
  market: MarketKey;
};

export default function MarketFooter({ market }: MarketFooterProps) {
  const config = marketConfigs[market];

  return (
    <footer className="relative z-10 bg-sidebar text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-5 md:gap-8 md:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="mb-4">
              <Image
                src="/omnitok-logo.svg"
                alt="Omnitok"
                width={180}
                height={47}
                className="h-10 w-auto object-contain sm:h-11"
              />
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/50">{config.footerText}</p>
            <p className="mt-4 text-xs font-medium leading-relaxed text-white/35">
              Omnitok, formerly Pervasive Mind.
            </p>
          </div>

          {Object.entries(config.footerColumns).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/40">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/60 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-white/60 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 sm:flex-row lg:px-8">
          <Link
            href={market === "latam" ? canonicalRoutes.latam.privacyPolicy : canonicalRoutes.usa.privacyPolicy}
            className="text-xs text-white/40 hover:text-white/70 transition-colors"
          >
            © {new Date().getFullYear()} Omnitok. All rights reserved.
          </Link>
          <p className="text-xs text-white/40">{config.brandText}</p>
        </div>
      </div>
    </footer>
  );
}
