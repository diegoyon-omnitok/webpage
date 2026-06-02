import type { ReactNode } from "react";
import type { MarketKey } from "@/lib/markets";
import MarketNavbar from "./MarketNavbar";
import MarketFooter from "./MarketFooter";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";

type MarketShellProps = {
  market: MarketKey;
  children: ReactNode;
};

export default function MarketShell({ market, children }: MarketShellProps) {
  return (
    <>
      <MarketNavbar market={market} />
      <main>{children}</main>
      <MarketFooter market={market} />
      <WhatsAppWidget locale={market === "usa" ? "en" : "es"} />
    </>
  );
}
