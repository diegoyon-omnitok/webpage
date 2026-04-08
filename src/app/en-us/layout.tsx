import type { Metadata } from "next";
import MarketShell from "@/components/layout/MarketShell";
import { buildMetadata } from "@/lib/markets";

export const metadata: Metadata = buildMetadata({
  title: "Omnitok for the United States",
  description:
    "MAP monitoring, seller compliance, pricing visibility and digital shelf analytics for brands operating in the US market.",
  path: "/en-us",
  locale: "en-US",
  alternates: {
    es: "/es",
    "en-US": "/en-us",
    "x-default": "/",
  },
});

export default function UsaLayout({ children }: { children: React.ReactNode }) {
  return <MarketShell market="usa">{children}</MarketShell>;
}
