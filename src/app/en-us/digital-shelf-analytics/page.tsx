import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, EyeOff, Brain, BarChart2 } from "lucide-react";
import LogoBar from "@/components/markets/usa/LogoBar";
import { buildMetadata, canonicalRoutes, marketAlternates } from "@/lib/markets";
import { UsaHero, UsaFinalCta } from "@/components/markets/usa/UsaBlocks";
import DsaImpact from "@/components/markets/usa/DsaImpact";
import SeoBreadcrumbs from "@/components/seo/SeoBreadcrumbs";
import UsaDsaCarousel from "./UsaDsaCarousel";
import DsaAiAgent from "@/app/plataforma/digital-shelf-analytics/DsaAiAgent";

export const metadata: Metadata = buildMetadata({
  title: "Digital Shelf Analytics Software | Omnitok US",
  description:
    "Monitor pricing, availability, content quality and product visibility across retailers and marketplaces. AI-powered analytics that tell you what changed, why it matters and what to do.",
  path: canonicalRoutes.usa.dsa,
  locale: "en-US",
  keywords: [
    "digital shelf analytics software",
    "digital shelf analytics",
    "digital shelf monitoring software",
    "product listing monitoring software",
    "price availability and content monitoring",
    "ecommerce shelf analytics",
  ],
  alternates: {
    es: marketAlternates.dsa.latam,
    "en-US": marketAlternates.dsa.usa,
  },
});

export default function UsaDigitalShelfAnalyticsPage() {
  return (
    <>
      <UsaHero
        eyebrow="Digital Shelf Analytics Software"
        title="Monitoring + AI: turn digital shelf data into decisions"
        highlight="AI"
        description="Monitor pricing, availability, content and visibility across retailers. Then ask the AI what's happening and what to prioritize. Omnitok DSA combines continuous digital shelf monitoring with an AI agent connected to millions of real-time data points."
        primaryCta="Talk to sales"
        primaryHref={canonicalRoutes.usa.contact}
        aside={
          <Image
            src="/dsa-hero.png"
            alt="Omnitok Digital Shelf Analytics dashboard with AI-powered insights"
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
          { label: "Digital Shelf Analytics" },
        ]}
      />

      {/* Problem section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">The problem</p>
            <h2 className="text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
              You have data, but you don't have answers
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-gray-500">
              Brands monitor pricing and stock, but still can't quickly answer why things changed, what to prioritize and where to act first. The problem is no longer having data. It's turning it into decisions.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5" style={{ background: "linear-gradient(90deg, #FF177B 0%, #4D4A9D 100%)" }} />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {[
                { num: "01", icon: EyeOff, title: "Dashboards nobody reads completely", desc: "Your team has access to data but no time to analyze it all. Problems are detected late or lost between metrics." },
                { num: "02", icon: Clock, title: "Manual analysis that takes days", desc: "Building an execution report, comparing prices or preparing a QBR requires hours of manual work crossing multiple sources." },
                { num: "03", icon: Brain, title: "Context lost between teams", desc: "Insights stay in the head of whoever found them. Without a layer connecting analysis with action, knowledge doesn't scale." },
                { num: "04", icon: BarChart2, title: "Data without prioritization", desc: "You know there are problems but not which to tackle first. Without automatic prioritization, everything feels equally urgent." },
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

      {/* AI Agent section */}
      <DsaAiAgent locale="en" />

      {/* Feature carousel with HTML mockups */}
      <UsaDsaCarousel />

      <DsaImpact />

      <UsaFinalCta
        title="Ready to turn digital shelf data into decisions?"
        description="Give your team complete visibility into pricing, availability, content quality and search positioning, with an AI agent that tells you what to prioritize."
        cta="Talk to sales"
      />
    </>
  );
}
