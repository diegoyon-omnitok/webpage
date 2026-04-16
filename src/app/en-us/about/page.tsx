import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  BarChart2,
  Database,
  Eye,
  ShieldCheck,
  Target,
  Users,
  Zap,
} from "lucide-react";
import SeoBreadcrumbs from "@/components/seo/SeoBreadcrumbs";
import { UsaHero, UsaFinalCta } from "@/components/markets/usa/UsaBlocks";
import LogoBar from "@/components/markets/usa/LogoBar";
import { buildMetadata, canonicalRoutes } from "@/lib/markets";

export const metadata: Metadata = buildMetadata({
  title: "About Omnitok | Digital Shelf Execution Platform",
  description:
    "Omnitok is a B2B SaaS platform that helps brands improve digital execution across retailers and marketplaces. Learn about our mission, platform and team.",
  path: "/en-us/about",
  locale: "en-US",
  keywords: [
    "about Omnitok",
    "digital shelf execution platform",
    "Omnitok company",
    "MAP monitoring company",
    "digital shelf analytics company",
  ],
});

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const stats = [
  { value: "50+", label: "Brands trust Omnitok" },
  { value: "150+", label: "Retailers connected" },
  { value: "1M+", label: "Listings monitored daily" },
  { value: "99.5%", label: "Data accuracy" },
];

const principles = [
  {
    icon: Target,
    title: "Execution over theory",
    desc: "We build tools that help brands act — not just measure. Every feature is designed to close the gap between insight and action.",
  },
  {
    icon: Eye,
    title: "Visibility drives control",
    desc: "Brands can only fix what they can see. Our platform surfaces what matters across every channel, every day.",
  },
  {
    icon: Zap,
    title: "Operational speed",
    desc: "Manual processes don't scale. We automate the repetitive work so teams can focus on strategy and growth.",
  },
  {
    icon: Users,
    title: "Built for real teams",
    desc: "Our platform is designed for the people who actually manage product content, pricing and channel execution — not just executives reviewing dashboards.",
  },
];

const timeline = [
  {
    year: "2018",
    title: "Founded as Pervasive Mind",
    desc: "Started as a digital shelf analytics company, helping brands monitor pricing, availability and content across retailers in Latin America.",
  },
  {
    year: "2021",
    title: "From data to execution",
    desc: "Realized that monitoring alone wasn't enough. Brands needed tools to act on the data — centralize content, enrich PDPs and fix execution gaps.",
  },
  {
    year: "2023",
    title: "Rebranded as Omnitok",
    desc: "Evolved into a full Digital Shelf Execution Platform. Launched Connect, Content, Assistant and DSA as integrated modules under one platform.",
  },
  {
    year: "2025",
    title: "Expanded to the US market",
    desc: "Brought MAP monitoring and digital shelf analytics to brands in the United States, combining AI-powered detection with human verification for 99.5% accuracy.",
  },
];

const capabilities = [
  {
    icon: ShieldCheck,
    label: "MAP monitoring",
    desc: "Detect price violations and unauthorized sellers across retailers and marketplaces with AI-powered product matching and human verification.",
  },
  {
    icon: BarChart2,
    label: "Digital shelf analytics",
    desc: "Monitor pricing, availability, content quality and product visibility across every channel — in one consolidated view.",
  },
  {
    icon: Eye,
    label: "Pricing visibility",
    desc: "Track how your products are priced across retailers in real time. Detect deviations before they erode margin or damage channel relationships.",
  },
  {
    icon: Target,
    label: "Unauthorized seller detection",
    desc: "Identify unauthorized resellers listing your products and take action with evidence-backed violation reports.",
  },
  {
    icon: Database,
    label: "Product matching at scale",
    desc: "Our AI engine matches your products across retailers with 99.5% accuracy, verified by human review to eliminate false positives.",
  },
  {
    icon: Zap,
    label: "Actionable reporting",
    desc: "Turn millions of data points into clear, prioritized insights your team can act on — from daily alerts to quarterly business reviews.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <UsaHero
        eyebrow="About Omnitok"
        title="We help brands control how their products appear across retail channels"
        highlight="control"
        description="Omnitok is a B2B SaaS platform built for brands that sell through retailers and marketplaces. We combine MAP monitoring and digital shelf analytics so brands can protect margins, detect violations and gain visibility across every channel."
        primaryCta="Talk to sales"
        primaryHref={canonicalRoutes.usa.contact}
        secondaryCta="Explore the platform"
        secondaryHref={canonicalRoutes.usa.map}
        aside={
          <Image
            src="/Imagen principal.png"
            alt="Omnitok platform — MAP monitoring and digital shelf analytics dashboard"
            title="About Omnitok — brand protection and digital shelf visibility platform"
            width={1600}
            height={1000}
            className="block h-auto w-full max-w-[min(100%,40rem)] object-contain"
            style={{ filter: "drop-shadow(0 24px 48px rgba(77,74,157,0.5))" }}
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        }
      />

      <SeoBreadcrumbs
        items={[
          { label: "Home", href: canonicalRoutes.usa.home },
          { label: "About" },
        ]}
      />

      {/* ── Stats bar ── */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p
                  className="text-4xl lg:text-5xl font-bold tabular-nums"
                  style={{ color: "#FF177B" }}
                >
                  {s.value}
                </p>
                <p className="mt-2 text-xs font-semibold text-gray-500 uppercase tracking-widest">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Origin story ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <div
              className="inline-flex items-center px-4 py-1.5 rounded-full mb-5"
              style={{
                background: "linear-gradient(90deg,#FF177B 0%,#4D4A9D 100%)",
              }}
            >
              <span className="text-xs font-semibold text-white">
                Our story
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              From analytics to{" "}
              <span className="text-gradient-brand">execution</span>
            </h2>
            <p className="mt-5 text-lg text-gray-500 leading-relaxed">
              We started by measuring digital shelf performance. We quickly
              learned that data without the ability to act on it doesn&apos;t
              move the needle. That&apos;s why we built a platform that connects
              monitoring with execution.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div
              className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px lg:-translate-x-px"
              style={{
                background:
                  "linear-gradient(180deg, #FF177B 0%, #4D4A9D 100%)",
              }}
            />

            <div className="space-y-12">
              {timeline.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={item.year}
                    className={`relative flex items-start gap-6 lg:gap-0 ${
                      isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-[3px] border-white shadow-md z-10 gradient-brand" />

                    {/* Content */}
                    <div
                      className={`ml-14 lg:ml-0 lg:w-[calc(50%-2rem)] ${
                        isLeft ? "lg:pr-8 lg:text-right" : "lg:pl-8"
                      }`}
                    >
                      <span
                        className="text-xs font-bold tracking-widest"
                        style={{ color: "#FF177B" }}
                      >
                        {item.year}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mt-1">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Principles ── */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              What drives us
            </h2>
            <p className="mt-4 text-lg text-gray-500 leading-relaxed">
              These principles shape every product decision, every feature and
              every conversation we have with brands.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(90deg, #FF177B 0%, #4D4A9D 100%)",
                    }}
                  />
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(77, 74, 157, 0.08)" }}
                  >
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What we do (capabilities) ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              What we do for US brands
            </h2>
            <p className="mt-4 text-lg text-gray-500 leading-relaxed">
              MAP monitoring and digital shelf analytics in one platform — built
              for brands that need pricing visibility and channel control.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.label}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all duration-200 hover:shadow-card hover:-translate-y-0.5"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "rgba(255, 23, 123, 0.08)" }}
                  >
                    <Icon size={20} className="text-accent" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">
                    {c.label}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Trusted by ── */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-10 text-center">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
            Trusted by leading brands
          </p>
        </div>
        <LogoBar />
      </section>

      {/* ── CTA ── */}
      <UsaFinalCta
        title="Ready to see how Omnitok works?"
        description="Talk to our team about MAP monitoring, digital shelf analytics and how we help brands gain control across retail channels."
      />
    </>
  );
}
