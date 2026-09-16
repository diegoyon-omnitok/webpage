import type { ReactNode } from "react";
import type { MarketKey } from "@/lib/markets";
import MarketNavbar from "./MarketNavbar";
import MarketFooter from "./MarketFooter";
import ShellFrame from "./ShellFrame";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";

type MarketShellProps = {
  market: MarketKey;
  children: ReactNode;
};

/**
 * Envuelve cada mercado con navbar, footer y WhatsApp. `ShellFrame` decide,
 * según la ruta, si esa envoltura se muestra o si la página va "desnuda"
 * (landings cerradas como /es/summit).
 */
export default function MarketShell({ market, children }: MarketShellProps) {
  return (
    <ShellFrame
      navbar={<MarketNavbar market={market} />}
      footer={<MarketFooter market={market} />}
      widget={<WhatsAppWidget locale={market === "usa" ? "en" : market === "brasil" ? "pt" : "es"} />}
    >
      {children}
    </ShellFrame>
  );
}
