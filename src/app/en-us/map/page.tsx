import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LogoBar from "@/components/markets/usa/LogoBar";
import MapImpact from "@/components/markets/usa/MapImpact";
import { ArrowRight, Clock, EyeOff, ShieldAlert, Users } from "lucide-react";
import { buildMetadata, canonicalRoutes } from "@/lib/markets";
import { UsaHero, UsaFinalCta } from "@/components/markets/usa/UsaBlocks";
import SeoBreadcrumbs from "@/components/seo/SeoBreadcrumbs";
import MapCarousel from "./MapCarousel";
import MapAiAgent from "./MapAiAgent";

export const metadata: Metadata = buildMetadata({
  title: "MAP Monitoring Software | Detect Violations and Enforce MAP",
  description:
    "AI-powered MAP monitoring software that detects price violations, identifies unauthorized sellers and generates compliance reports automatically.",
  path: canonicalRoutes.usa.map,
  locale: "en-US",
  keywords: [
    "MAP monitoring software",
    "MAP enforcement software",
    "MAP compliance software",
    "minimum advertised price monitoring",
    "MAP violation monitoring",
    "unauthorized seller monitoring",
    "MAP policy enforcement",
  ],
});

export default function MapPage() {
  return (
    <>
      <UsaHero
        eyebrow="AI-Powered MAP Enforcement Software"
        title="MAP Monitoring + AI: detect violations, enforce with confidence"
        highlight="AI"
        description="Detect MAP violations, monitor unauthorized sellers and enforce price compliance across retailers and marketplaces. Our AI agent analyzes patterns, prioritizes cases and generates compliance reports automatically."
        primaryCta="Talk to sales"
        primaryHref={canonicalRoutes.usa.contact}
        aside={
          <Image
            src="/map-hero.png"
            alt="MAP monitoring software dashboard with AI-powered compliance insights"
            width={800}
            height={600}
            className="block h-auto w-full max-w-[min(100%,32rem)] sm:max-w-[min(100%,36rem)] lg:max-w-[min(100%,40rem)] xl:max-w-[min(100%,44rem)] object-contain object-right-bottom lg:translate-x-5 xl:translate-x-8 2xl:translate-x-12 origin-center lg:origin-right"
            style={{ filter: "drop-shadow(0 24px 48px rgba(77,74,157,0.4))" }}
            priority
          />
        }
      />

      <LogoBar />

      <SeoBreadcrumbs
        items={[
          { label: "Home", href: canonicalRoutes.usa.home },
          { label: "MAP Monitoring" },
        ]}
      />

      {/* Problem section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">The problem</p>
            <h2 className="text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
              You catch violations, but enforcement still takes too long
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-gray-500">
              Most brands detect MAP violations days late, lack evidence to act quickly, and spend hours building reports that should be automatic. The problem is not just detection. It is turning compliance data into fast, effective enforcement.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5" style={{ background: "linear-gradient(90deg, #FF177B 0%, #4D4A9D 100%)" }} />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {[
                { num: "01", icon: EyeOff, title: "Violations detected too late", desc: "By the time you find a price violation, it has already affected margin and retailer trust. Manual checks can't keep up with marketplace speed." },
                { num: "02", icon: Users, title: "Unauthorized sellers keep appearing", desc: "New unauthorized resellers pop up faster than your team can track them. Without automated monitoring, you're always a step behind." },
                { num: "03", icon: Clock, title: "Enforcement takes days, not hours", desc: "Gathering evidence, building cases and sending alerts manually is slow. Repeat offenders stay non-compliant because follow-up isn't systematic." },
                { num: "04", icon: ShieldAlert, title: "No clear picture of compliance health", desc: "Your team knows there are problems but can't easily see trends, repeat offenders or which channels need the most attention." },
              ].map((item) => (
                <div key={item.num} className="relative flex flex-col items-center text-center group h-full">
                  <div className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 gradient-brand shadow-md transition-all duration-300 group-hover:-translate-y-2">
                    <item.icon size={28} className="text-white" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest mb-2 text-gradient-brand">{item.num}</span>
                  <h3 className="text-base font-bold text-gray-900 mb-3 leading-snug min-h-[4rem] flex items-start justify-center">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed min-h-[4.75rem]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Link href={canonicalRoutes.usa.contact} className="flex items-center gap-2 px-10 py-4 rounded-xl text-base font-semibold text-white gradient-brand hover:opacity-90 transition-opacity shadow-lg">
              Talk to sales <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* AI Agent */}
      <MapAiAgent />

      {/* Feature carousel with HTML mockups */}
      <MapCarousel />

      {/* How it works */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">How it works</p>
            <h2 className="text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
              From setup to enforcement in 3 steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Setup and data collection",
                desc: "Define your MAP policy, product catalog and authorized seller list. We configure monitoring across all target retailers and marketplaces and start collecting pricing data within days.",
              },
              {
                num: "02",
                title: "Detection and verification",
                desc: "Our AI engine matches products across channels with 99.5% accuracy. Every violation is verified before it reaches your dashboard, so you only act on confirmed cases with timestamped evidence.",
              },
              {
                num: "03",
                title: "Enforcement and reporting",
                desc: "Send branded violation alerts directly from the platform. Track resolution, follow up on repeat offenders and generate compliance reports automatically with the AI agent.",
              },
            ].map((step) => (
              <div key={step.num} className="relative group rounded-2xl border border-gray-100 bg-gray-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 gradient-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute -top-2 -right-1 text-7xl font-black leading-none select-none pointer-events-none opacity-[0.04]" style={{ color: "#4D4A9D" }}>{step.num}</span>
                <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center mb-5 shadow-md">
                  <span className="text-sm font-black text-white">{step.num}</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <MapImpact />

      <UsaFinalCta
        title="Ready to enforce MAP policies with AI-powered data?"
        description="Give your team the visibility to monitor price violations, identify unauthorized sellers and protect retailer relationships, with an AI agent that tells you what to prioritize."
        cta="Talk to sales"
      />
    </>
  );
}
