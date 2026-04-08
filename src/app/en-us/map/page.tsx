import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LogoBar from "@/components/markets/usa/LogoBar";
import MapStepsTabs from "@/components/markets/usa/MapStepsTabs";
import MapImpact from "@/components/markets/usa/MapImpact";
import { ArrowRight, Bell, Search, ShieldCheck, Workflow } from "lucide-react";
import { buildMetadata, canonicalRoutes } from "@/lib/markets";
import {
  UsaHero,
  UsaFinalCta,
} from "@/components/markets/usa/UsaBlocks";

export const metadata: Metadata = buildMetadata({
  title: "MAP Monitoring Software | Detect Violations and Enforce MAP",
  description:
    "Monitor MAP violations, detect unauthorized sellers and enforce pricing policies with Omnitok’s MAP monitoring software.",
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
        title="MAP Monitoring Software for Price Compliance and Brand Protection"
        highlight="MAP Monitoring Software"
        description="Detect MAP violations, monitor unauthorized sellers and enforce price compliance across retailers and marketplaces with Omnitok."
        primaryCta="Talk to us"
        aside={
          <Image
            src="/map-hero.png"
            alt="MAP monitoring software dashboard — pricing compliance and unauthorized seller detection"
            width={800}
            height={600}
            className="block h-auto w-full max-w-[min(100%,32rem)] sm:max-w-[min(100%,36rem)] lg:max-w-[min(100%,40rem)] xl:max-w-[min(100%,44rem)] object-contain object-right-bottom lg:translate-x-5 xl:translate-x-8 2xl:translate-x-12 origin-center lg:origin-right"
            style={{ filter: "drop-shadow(0 24px 48px rgba(77,74,157,0.4))" }}
            priority
          />
        }
      />

      <LogoBar />

      {/* Why choose section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">Why Omnitok</p>
            <h2 className="text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
              Enforce price compliance with better visibility
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Search size={22} />,
                title: "Accurate Product Matching",
                description: "Accurate product identification across retailers and marketplaces — so your data is always tied to the right listing.",
              },
              {
                icon: <ShieldCheck size={22} />,
                title: "Premium Support",
                description: "Get responses when you need them. Our team is built around fast, reliable support with industry-leading SLAs.",
              },
              {
                icon: <Workflow size={22} />,
                title: "Flexible Service Adaptation",
                description: "Whether you are launching a new MAP policy or scaling an existing one, Omnitok adapts to your workflow and requirements.",
              },
              {
                icon: <Bell size={22} />,
                title: "Advanced Anti-Scraping Technology",
                description: "Reliable, high-quality data collection built to bypass anti-scraping barriers — so your monitoring never misses a violation.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-gray-50 p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="absolute left-0 right-0 top-0 h-1 gradient-brand" />
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold leading-snug text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zigzag feature sections */}
      <section className="py-12 lg:py-20 bg-gray-50 w-full">
        {/* Header inside the same section */}
        <div className="max-w-4xl mx-auto px-6 lg:px-8 mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">Benefits</p>
          <h2 className="text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
            Protect margins and retailer relationships
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-500">
            Gain visibility into MAP violations, identify unauthorized sellers faster and create a more consistent enforcement workflow.
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
          <div className="flex flex-col gap-10 lg:gap-14">
            {[
              {
                accent: "from-[#4D4A9D] to-[#6366f1]",
                dot: "#4D4A9D",
                eyebrow: "Price violation detection",
                title: "Detect Price Violations with Unmatched Accuracy",
                desc: "Our proprietary MAP monitoring software captures pricing data across all retailers and marketplaces — without being blocked. Combined with AI-driven product matching and human verification, we detect at least 4x more listings than traditional tools, with 99.5% accuracy. If your current MAP price monitoring is missing listings, you're leaving margin on the table.",
                imageSrc: "/map-feature-1.png",
                imageAlt: "MAP price violation detection dashboard",
              },
              {
                accent: "from-[#FF177B] to-[#c0136a]",
                dot: "#FF177B",
                eyebrow: "Unauthorized seller monitoring",
                title: "Identify Unauthorized Sellers with Precision",
                desc: "Not all sellers play by the rules. Our system compares real-time listings against your authorized seller list to uncover violators across marketplaces — even those hiding under aliases. This level of visibility is essential for consistent MAP compliance and protecting your brand's retail ecosystem.",
                imageSrc: "/map-feature-2.png",
                imageAlt: "Unauthorized seller identification across marketplaces",
              },
              {
                accent: "from-[#4D4A9D] to-[#6366f1]",
                dot: "#4D4A9D",
                eyebrow: "MAP enforcement at scale",
                title: "Scalable, Controlled MAP Enforcement",
                desc: "Enforce your policy at scale with our automated MAP compliance software. Send branded violation alerts directly from our platform, complete with timestamped screenshots as evidence. Automate communication without losing control — and ensure fast, traceable actions when pricing is violated.",
                imageSrc: "/map-feature-3.png",
                imageAlt: "Scalable MAP enforcement with automated violation alerts",
              },
            ].map((f, i) => {
              const reverse = i % 2 === 1;
              const textCell = (
                <div key="text" className="flex flex-col justify-center p-8 lg:p-10 xl:p-12 min-h-0">
                  <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: f.dot }}>
                    {String(i + 1).padStart(2, "0")} — {f.eyebrow}
                  </p>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 leading-snug mb-3">{f.title}</h3>
                  <p className="text-base text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              );
              const visualCell = (
                <div key="visual" className="flex items-center justify-center p-4 lg:p-6">
                  <Image
                    src={f.imageSrc}
                    alt={f.imageAlt}
                    width={800}
                    height={500}
                    className="w-full h-auto object-contain motion-safe:transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              );
              return (
                <article key={f.title} className="group rounded-3xl bg-white border border-gray-100 shadow-card overflow-hidden motion-safe:transition-transform duration-300 hover:scale-[1.02]">
                  <div className={`h-1 w-full bg-gradient-to-r ${f.accent}`} />
                  <div className="grid lg:grid-cols-2 items-stretch min-h-[280px] lg:min-h-[400px]">
                    {reverse ? <>{visualCell}{textCell}</> : <>{textCell}{visualCell}</>}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="flex justify-center mt-12 pt-10 border-t border-gray-200">
            <Link
              href="/en-us/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-brand hover:opacity-90 transition-opacity shadow-lg"
            >
              Talk to us <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <MapStepsTabs />
      <MapImpact />

      {/* MAP CTA Banner */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div>
              <h2 className="mb-4 text-2xl font-black uppercase leading-tight text-primary lg:text-3xl">
                Detect MAP violations online before they spread
              </h2>
              <p className="mb-8 text-sm leading-relaxed text-gray-600">
                Omnitok combines MAP monitoring software, unauthorized seller monitoring and pricing visibility to help brands protect margins with confidence. If you also need broader retailer execution insight, explore our{" "}
                <Link href={canonicalRoutes.usa.dsa} className="font-semibold text-primary hover:underline">
                  digital shelf analytics software
                </Link>{" "}
                or review the latest guidance in our{" "}
                <Link href={canonicalRoutes.usa.blog} className="font-semibold text-primary hover:underline">
                  MAP monitoring blog
                </Link>
                .
              </p>
              <div className="flex justify-center">
                <Link
                  href={canonicalRoutes.usa.contact}
                  className="gradient-brand inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-opacity hover:opacity-90"
                >
                  <ArrowRight size={17} /> Talk to us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <UsaFinalCta
        title="Ready to enforce MAP policies with better data?"
        description="Give your team the visibility to monitor price violations, identify unauthorized sellers and protect retailer relationships across every marketplace."
        cta="Contact us"
      />
    </>
  );
}
