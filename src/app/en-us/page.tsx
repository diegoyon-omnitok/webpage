import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BarChart3, Shield } from "lucide-react";
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
  title: "MAP Monitoring and Digital Shelf Analytics Software | Omnitok US",
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
    "x-default": "/",
  },
});

export default function UsaHomePage() {
  return (
    <>
      <UsaHero
        eyebrow="MAP Monitoring and Digital Shelf Analytics"
        title="Protect margins with MAP Monitoring and Digital Shelf Analytics"
        highlight="MAP Monitoring and Digital Shelf Analytics"
        description="Omnitok helps brands monitor MAP violations, detect unauthorized sellers and gain digital shelf visibility across retailers and marketplaces."
        primaryCta="Talk to us"
        aside={
          <Image
            src="/img-header-en.png"
            alt="Omnitok MAP monitoring and digital shelf analytics platform"
            width={800}
            height={600}
            className="block h-auto w-full max-w-[min(100%,32rem)] sm:max-w-[min(100%,36rem)] lg:max-w-[min(100%,40rem)] xl:max-w-[min(100%,44rem)] object-contain object-right-bottom lg:translate-x-5 xl:translate-x-8 2xl:translate-x-12 origin-center lg:origin-right"
            style={{ filter: "drop-shadow(0 24px 48px rgba(77,74,157,0.4))" }}
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
              Omnitok gives brand teams one platform to monitor{" "}
              <Link href={canonicalRoutes.usa.home} className="font-semibold text-primary hover:underline">
                Omnitok
              </Link>{" "}
              work across ecommerce channels, enforcing{" "}
              <Link href={canonicalRoutes.usa.map} className="font-semibold text-primary hover:underline">
                MAP compliance
              </Link>{" "}
              while improving{" "}
              <Link href={canonicalRoutes.usa.dsa} className="font-semibold text-primary hover:underline">
                digital shelf visibility
              </Link>
              .
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
