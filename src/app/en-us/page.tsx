import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BarChart3, Shield, Sparkles, MessageSquare, FileText, TrendingUp } from "lucide-react";
import {
  buildMetadata,
  canonicalRoutes,
  marketAlternates,
} from "@/lib/markets";
import { UsaHero, UsaFinalCta } from "@/components/markets/usa/UsaBlocks";
import LogoBar from "@/components/markets/usa/LogoBar";
import ImpactSection from "@/components/markets/usa/ImpactSection";
import ProblemsSlider from "@/components/markets/usa/ProblemsSlider";
import HowItWorksDiagram from "@/components/markets/usa/HowItWorksDiagram";
import { featuredPostEn, secondaryPostsEn } from "@/lib/blog-posts-en";

export const metadata: Metadata = buildMetadata({
  title: "MAP Monitoring & Digital Shelf Analytics | Omnitok",
  description:
    "Protect margins, monitor price violations and gain digital shelf visibility with Omnitok. MAP Monitoring and Digital Shelf Analytics for brands.",
  path: canonicalRoutes.usa.home,
  locale: "en-US",
  keywords: [
    "MAP monitoring software",
    "MAP enforcement software",
    "digital shelf analytics software",
    "unauthorized seller monitoring",
    "pricing visibility software",
    "brand protection software for ecommerce",
  ],
  alternates: {
    es: marketAlternates.home.latam,
    "en-US": marketAlternates.home.usa,
    "x-default": "/es",
  },
});

export default function UsaHomePage() {
  return (
    <>
      <UsaHero
        eyebrow="MAP Monitoring and Digital Shelf Analytics"
        title="Protect margins with AI-powered MAP Monitoring and Digital Shelf Analytics"
        highlight="AI-powered"
        description="Omnitok helps brands monitor MAP violations, detect unauthorized sellers and gain digital shelf visibility across retailers and marketplaces. Our AI agent turns millions of data points into prioritized actions and compliance reports."
        primaryCta="Talk to sales"
        primaryHref={canonicalRoutes.usa.contact}
        secondaryCta="See how the AI works"
        secondaryHref={canonicalRoutes.usa.dsa}
        aside={
          <Image
            src="/img-header-en.png"
            alt="Omnitok MAP monitoring and digital shelf analytics platform"
            title="Omnitok — AI-powered MAP monitoring and digital shelf analytics software"
            width={800}
            height={600}
            className="block h-auto w-full max-w-[min(100%,32rem)] sm:max-w-[min(100%,36rem)] lg:max-w-[min(100%,40rem)] xl:max-w-[min(100%,44rem)] object-contain object-right-bottom lg:translate-x-5 xl:translate-x-8 2xl:translate-x-12 translate-y-[10%] origin-center lg:origin-right"
            style={{
              filter: "drop-shadow(0 24px 48px rgba(77,74,157,0.4))",
              maskImage: "linear-gradient(to bottom, black 82%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 82%, transparent 100%)",
            }}
            priority
          />
        }
      />

      <LogoBar />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Header block: eyebrow + H2 + subcopy stacked */}
          <div className="mb-14 mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">What we do</p>
            <h2 className="text-3xl font-bold leading-tight text-gray-900 lg:text-5xl">
              Software built for brand protection and digital shelf visibility
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-500">
              One platform to enforce{" "}
              <Link href={canonicalRoutes.usa.map} className="font-semibold text-primary hover:underline">
                MAP compliance
              </Link>
              {" "}and gain{" "}
              <Link href={canonicalRoutes.usa.dsa} className="font-semibold text-primary hover:underline">
                digital shelf visibility
              </Link>
              {" "}across every retailer and marketplace, with AI that generates insights and compliance reports automatically.
            </p>
          </div>

          {/* Two product cards */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl gradient-hero p-8">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-accent">
                <Shield size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">MAP Monitoring &amp; Enforcement</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                MAP monitoring software to detect violations, monitor unauthorized sellers and protect pricing integrity.
              </p>
              <Link
                href={canonicalRoutes.usa.map}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
              >
                Learn about MAP monitoring <ArrowRight size={15} />
              </Link>
            </div>

            <div className="rounded-3xl gradient-hero p-8">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-accent">
                <BarChart3 size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">Digital Shelf Analytics</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Digital shelf analytics software for pricing, availability, content quality and product visibility across retailers.
              </p>
              <Link
                href={canonicalRoutes.usa.dsa}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
              >
                Learn about Digital Shelf Analytics <ArrowRight size={15} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:items-start">

            {/* Left: title */}
            <h2 className="text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
              Brands using Omnitok to improve digital execution
            </h2>

            {/* Right: quote + author */}
            <div className="border-l-2 border-primary/20 pl-8">
              <blockquote className="text-xl font-medium leading-relaxed text-gray-700 sm:text-2xl">
                &ldquo;We chose to work with Omnitok because they adapted perfectly to our needs, offering an excellent price-to-quality ratio. With their support, we successfully increased our brand visibility, identified opportunities to enhance customer experience, and optimized our investments, resulting in significant revenue growth.&rdquo;
              </blockquote>

              <div className="mt-8 flex items-center gap-4">
                <Image
                  src="/diego-ibarra.png"
                  alt="Diego Ibarra, HP Inc"
                  width={48}
                  height={48}
                  className="h-12 w-12 shrink-0 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-bold text-gray-900">Diego Ibarra</p>
                  <p className="mt-0.5 text-xs text-gray-500">AMS Marketplaces Analytics and Program Manager, HP Inc</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="relative overflow-hidden py-20 lg:py-28" style={{ background: "linear-gradient(135deg, #211f4b 0%, #2d2a6e 50%, #1a1838 100%)" }}>
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/30 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5" style={{ background: "linear-gradient(90deg,#FF177B 0%,#4D4A9D 100%)" }}>
              <Sparkles size={13} className="text-white" />
              <span className="text-xs font-semibold text-white">AI-powered reports</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
              Stop building reports manually.{" "}
              <span className="text-gradient-brand">Let the AI do it.</span>
            </h2>
            <p className="mt-5 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
              Our AI agent is connected to every data point we monitor. Ask it a question, request a compliance summary, or generate a full QBR report in seconds.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: MessageSquare,
                title: "Ask anything about your data",
                desc: "Which sellers violated MAP this week? What is my compliance trend? The AI answers with verified data, not guesses.",
                example: "\"Which product has the most violations on Amazon?\"",
              },
              {
                icon: FileText,
                title: "Auto-generated executive reports",
                desc: "Get structured analyses with what changed, why it matters and what to do. Built for weekly reviews, QBRs and fast decisions.",
                example: "\"Generate my quarterly compliance report\"",
              },
              {
                icon: TrendingUp,
                title: "Prioritized actions, not just alerts",
                desc: "The AI ranks violations by impact, flags repeat offenders and tells you where to focus enforcement efforts first.",
                example: "\"What are the 5 most urgent actions this month?\"",
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-7 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(255,23,123,0.15)" }}>
                    <Icon size={22} className="text-accent" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-4">{card.desc}</p>
                  <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2">
                    <p className="text-xs text-white/40 italic">{card.example}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex justify-center gap-4">
            <Link href={canonicalRoutes.usa.map} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white gradient-brand hover:opacity-90 transition-opacity shadow-lg">
              See MAP AI in action <ArrowRight size={15} />
            </Link>
            <Link href={canonicalRoutes.usa.dsa} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white border border-white/20 bg-white/10 hover:bg-white/15 transition-colors">
              See DSA AI in action <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <ImpactSection />

      <ProblemsSlider />

      <HowItWorksDiagram />


      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Header */}
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">From the blog</p>
              <h2 className="text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
                Resources for MAP monitoring and digital shelf analytics
              </h2>
            </div>
            <Link
              href={canonicalRoutes.usa.blog}
              className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-primary hover:underline lg:inline-flex"
            >
              View all posts <ArrowRight size={15} />
            </Link>
          </div>

          {/* Featured post */}
          <Link
            href={featuredPostEn?.href ?? canonicalRoutes.usa.blog}
            className="group mb-6 block rounded-3xl gradient-hero p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:p-10"
          >
            <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-accent">
              {featuredPostEn?.category ?? "MAP Monitoring"}
            </span>
            <h3 className="mt-4 text-xl font-bold leading-snug text-white sm:text-2xl">
              {featuredPostEn?.title ?? "Why MAP monitoring software is becoming a core system for brand protection"}
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
              {featuredPostEn?.excerpt ?? "A strong US market narrative starts by framing MAP not as a legal checkbox, but as a commercial control layer that protects margin and channel health."}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:underline">
              Read article <ArrowRight size={14} />
            </div>
          </Link>

          {/* Secondary posts */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {secondaryPostsEn.slice(0, 4).map((post) => (
              <Link
                key={post.title}
                href={post.href}
                className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-accent">
                  {post.category}
                </span>
                <h3 className="mt-3 text-sm font-bold leading-snug text-gray-900">
                  {post.title}
                </h3>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:underline">
                  Read more <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-8 flex justify-center lg:hidden">
            <Link
              href={canonicalRoutes.usa.blog}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              View all posts <ArrowRight size={15} />
            </Link>
          </div>

        </div>
      </section>

      <UsaFinalCta
        title="Ready to protect margins and improve digital shelf visibility?"
        description="Give your team one platform to monitor MAP violations, detect unauthorized sellers and act on pricing and shelf signals across every channel."
        cta="Talk to us"
      />
    </>
  );
}
