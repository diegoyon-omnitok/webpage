import type { Metadata } from "next";
import MarketShell from "@/components/layout/MarketShell";
import { buildMetadata } from "@/lib/markets";

export const metadata: Metadata = buildMetadata({
  title: "Omnitok Brasil",
  description:
    "Execução digital no varejo, conteúdo enriquecido de produto e consistência entre canais para marcas que vendem no Brasil.",
  path: "/br",
  locale: "pt-BR",
  alternates: {
    es: "/es",
    "en-US": "/en-us",
    "pt-BR": "/br",
    "x-default": "/es",
  },
});

export default function BrasilLayout({ children }: { children: React.ReactNode }) {
  return <MarketShell market="brasil">{children}</MarketShell>;
}
