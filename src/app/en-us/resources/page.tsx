import type { Metadata } from "next";
import SeoBreadcrumbs from "@/components/seo/SeoBreadcrumbs";
import { buildMetadata, canonicalRoutes, marketAlternates } from "@/lib/markets";
import {
  UsaHero,
  SectionHeader,
  CardLinkGrid,
  UsaFinalCta,
} from "@/components/markets/usa/UsaBlocks";

export const metadata: Metadata = buildMetadata({
  title: "Resources for MAP monitoring and digital shelf execution",
  description:
    "Explore guides, glossary terms, and educational content for brands that need better pricing visibility, seller compliance, and digital shelf control.",
  path: canonicalRoutes.usa.resources,
  locale: "en-US",
  keywords: [
    "MAP monitoring resources",
    "digital shelf execution resources",
    "pricing visibility resources",
  ],
  alternates: {
    es: marketAlternates.resources.latam,
    "en-US": marketAlternates.resources.usa,
  },
});

export default function UsaResourcesPage() {
  return (
    <>
      <UsaHero
        eyebrow="Resources"
        title="Resources for MAP monitoring and digital shelf execution"
        highlight="MAP monitoring and digital shelf execution"
        description="Explore guides, glossary terms, and educational content for brands that need better pricing visibility, seller compliance, and digital shelf control."
        primaryCta="Explore the glossary"
        primaryHref={canonicalRoutes.usa.glossary}
        secondaryCta="Visit the blog"
        secondaryHref={canonicalRoutes.usa.blog}
        aside={
          <div className="space-y-3 text-white">
            {[
              "MAP monitoring concepts and compliance terminology",
              "Educational content for pricing visibility and digital shelf execution",
              "Practical resources for brand, ecommerce, and channel teams",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm font-semibold text-white/85">
                {item}
              </div>
            ))}
          </div>
        }
      />

      <SeoBreadcrumbs
        items={[
          { label: "Home", href: canonicalRoutes.usa.home },
          { label: "Resources" },
        ]}
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Start here"
            title="Find the right resource for your next question"
            description="Whether you are evaluating software, learning the language of MAP compliance, or exploring digital shelf best practices, this section helps you get to the right content faster."
          />
          <CardLinkGrid
            items={[
              {
                title: "MAP monitoring software",
                description:
                  "Learn how brands monitor violations, protect pricing, and improve compliance across retailers and marketplaces.",
                href: canonicalRoutes.usa.map,
                label: "Explore MAP monitoring",
              },
              {
                title: "Digital Shelf Analytics software",
                description:
                  "See how brands track pricing, availability, product content, and shelf visibility across digital channels.",
                href: canonicalRoutes.usa.dsa,
                label: "Explore digital shelf analytics",
              },
              {
                title: "Ebooks",
                description:
                  "Access downloadable resources on MAP monitoring, seller compliance, and digital shelf strategy.",
                href: canonicalRoutes.usa.ebooks,
                label: "Browse ebooks",
              },
              {
                title: "Glossary",
                description:
                  "Understand key terms like MAP, unauthorized sellers, digital shelf analytics, and pricing visibility.",
                href: canonicalRoutes.usa.glossary,
                label: "Browse glossary",
              },
              {
                title: "Blog",
                description:
                  "Read articles on category trends, channel challenges, and best practices for brand execution online.",
                href: canonicalRoutes.usa.blog,
                label: "Read blog",
              },
            ]}
          />
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Featured topics"
            title="What you will find in this section"
            description="Our resources are designed for teams working on ecommerce growth, channel execution, pricing control, and brand consistency across retailers and marketplaces."
          />
          <CardLinkGrid
            items={[
              {
                title: "Buyer education",
                description:
                  "Articles and guides that help teams understand the problems, workflows, and decisions behind MAP monitoring and digital shelf execution.",
                href: canonicalRoutes.usa.blog,
                label: "Read articles",
              },
              {
                title: "Practical frameworks",
                description:
                  "Content built to help brands evaluate tools, improve execution, and align internal teams around measurable action.",
                href: canonicalRoutes.usa.ebooks,
                label: "Browse resources",
              },
              {
                title: "Glossary and terminology",
                description:
                  "Clear definitions for the concepts that matter in pricing compliance, unauthorized seller monitoring, and digital shelf visibility.",
                href: canonicalRoutes.usa.glossary,
                label: "Browse glossary",
              },
            ]}
          />
        </div>
      </section>

      <UsaFinalCta
        title="Talk to the Omnitok team"
        description="If you are evaluating MAP monitoring or digital shelf analytics, we can help you understand where to start and what to prioritize."
        cta="Talk to sales"
      />
    </>
  );
}
