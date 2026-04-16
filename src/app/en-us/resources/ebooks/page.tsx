import type { Metadata } from "next";
import { Download, BookOpen, CheckCircle2 } from "lucide-react";
import SeoBreadcrumbs from "@/components/seo/SeoBreadcrumbs";
import HubSpotFormEmbed from "@/components/ui/HubSpotFormEmbed";
import { hubspotForms } from "@/lib/hubspot-forms";
import { buildMetadata, canonicalRoutes } from "@/lib/markets";
import { InsightGrid, SectionHeader, UsaFinalCta, UsaHero } from "@/components/markets/usa/UsaBlocks";

const pitfalls = [
  "Inconsistent or incomplete MAP data",
  "Weak support and low service quality from providers",
  "Coverage gaps across key marketplaces",
  "Slow workflows that make enforcement feel harder than it should",
  "Outdated approaches that damage margin and brand trust",
];

export const metadata: Metadata = buildMetadata({
  title: "MAP eBook: 5 Pitfalls Hurting Your MAP Program",
  description:
    "Get a practical guide to the common gaps that make MAP programs harder to manage, slower to enforce, and less effective across retailers and marketplaces.",
  path: canonicalRoutes.usa.ebooks,
  locale: "en-US",
});

export default function UsaEbooksPage() {
  return (
    <>
      <UsaHero
        eyebrow="Ebook"
        title="Is your MAP enforcement approach falling behind?"
        highlight="MAP enforcement approach"
        description="Get a practical guide to the common gaps that make MAP programs harder to manage, slower to enforce, and less effective across retailers and marketplaces."
        primaryCta="Request the ebook"
        primaryHref="#ebook-form"
        secondaryCta="Back to resources"
        secondaryHref={canonicalRoutes.usa.resources}
        aside={
          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-white">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
              <BookOpen size={20} />
            </div>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Featured guide
            </p>
            <h2 className="mt-3 text-xl font-bold">
              5 Common Pitfalls Hurting Your MAP Program in 2025
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              A practical resource for brand teams reviewing outdated enforcement workflows,
              provider limitations, and marketplace coverage gaps.
            </p>
          </div>
        }
      />

      <SeoBreadcrumbs
        items={[
          { label: "Home", href: canonicalRoutes.usa.home },
          { label: "Resources", href: canonicalRoutes.usa.resources },
          { label: "Ebooks" },
        ]}
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Featured resource"
            title="What you will learn in this guide"
            description="This ebook is built for teams that need better visibility, stronger workflows, and a more scalable approach to MAP monitoring and enforcement."
          />
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-3xl border border-gray-100 bg-white p-8 shadow-card">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Download size={18} />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-gray-900">
                5 Common Pitfalls Hurting Your MAP Program in 2025
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                The guide explores the issues that most often slow down MAP enforcement and weaken
                pricing control across digital channels.
              </p>
              <div className="mt-6 space-y-3">
                {pitfalls.map((pitfall) => (
                  <div key={pitfall} className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-4">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
                    <span className="text-sm text-gray-700">{pitfall}</span>
                  </div>
                ))}
              </div>
            </article>

            <div className="space-y-6">
              <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8 shadow-card">
                <h2 className="text-xl font-bold text-gray-900">Who this ebook is for</h2>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  Ideal for ecommerce, marketplace, pricing, and brand protection teams evaluating
                  how to improve MAP visibility and enforcement without adding more operational
                  friction.
                </p>
              </div>

              <div id="ebook-form" className="rounded-3xl border border-gray-100 bg-gray-50 p-8 shadow-card scroll-mt-28">
                <h2 className="text-xl font-bold text-gray-900">Request the guide</h2>
                <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-5">
                  <p className="text-sm font-semibold text-gray-900">
                    Request the ebook and our team will share the resource with the right context
                    for your MAP program.
                  </p>
                  <div className="mt-5">
                    <HubSpotFormEmbed config={hubspotForms.usaEbook} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why it matters"
            title="MAP enforcement gets harder when the workflow is outdated"
            description="As marketplaces expand and reseller ecosystems become more complex, brands need more than isolated monitoring. They need better data, clearer workflows, and faster action."
          />
          <InsightGrid
            items={[
              {
                title: "Better visibility",
                description:
                  "Understand where pricing issues appear and how they affect coverage across retailers and marketplaces.",
              },
              {
                title: "Faster enforcement",
                description:
                  "Reduce manual work and improve how your team responds to violations and seller issues.",
              },
              {
                title: "Stronger control",
                description:
                  "Build a more consistent MAP program that protects margins, brand trust, and channel relationships.",
              },
            ]}
            columns="three"
          />
        </div>
      </section>

      <UsaFinalCta
        title="Start with the guide, then talk to Omnitok"
        description="Use this ebook as a starting point to evaluate where your MAP program is falling short and what your team should improve next."
        cta="Talk to sales"
      />
    </>
  );
}
