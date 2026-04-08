import type { Metadata } from "next";
import MarketEntrySelector from "@/components/layout/MarketEntrySelector";
import { buildMetadata } from "@/lib/markets";

export const metadata: Metadata = buildMetadata({
  title: "Choose your market",
  description:
    "Select the Omnitok experience that matches your market: LATAM in Spanish or United States in English.",
  path: "/",
  locale: "en_US",
  alternates: {
    es: "/es",
    "en-US": "/en-us",
    "x-default": "/",
  },
});

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden gradient-hero px-6 py-12 lg:px-8">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl items-center">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-medium text-white/80">Smart market entry</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Omnitok adapts to your{" "}
              <span className="text-gradient-brand">market positioning</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              Choose the experience that best matches your region. LATAM focuses on digital
              shelf execution, enriched product content and retail consistency. The US site is
              built around MAP monitoring, seller compliance and margin protection.
            </p>
          </div>

          <MarketEntrySelector />
        </div>
      </div>
    </main>
  );
}
