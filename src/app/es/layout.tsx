import type { Metadata } from "next";
import MarketShell from "@/components/layout/MarketShell";
import { buildMetadata } from "@/lib/markets";

export const metadata: Metadata = buildMetadata({
  title: "Omnitok LATAM",
  description:
    "Digital shelf execution, enriched product content and retail consistency for brands selling across LATAM.",
  path: "/es",
  locale: "es",
  alternates: {
    es: "/es",
    "en-US": "/en-us",
    "x-default": "/",
  },
});

export default function LatamLayout({ children }: { children: React.ReactNode }) {
  return <MarketShell market="latam">{children}</MarketShell>;
}
