import type { Metadata } from "next";
import { Search } from "lucide-react";
import SeoBreadcrumbs from "@/components/seo/SeoBreadcrumbs";
import { buildMetadata, canonicalRoutes } from "@/lib/markets";
import {
  UsaHero,
  SectionHeader,
  InsightGrid,
  UsaFinalCta,
} from "@/components/markets/usa/UsaBlocks";

export const metadata: Metadata = buildMetadata({
  title: "MAP Enforcement Terms: A Complete Glossary",
  description:
    "A glossary of essential MAP monitoring, seller compliance and digital shelf terms for brand teams.",
  path: canonicalRoutes.usa.glossary,
  locale: "en-US",
});

const terms = [
  {
    title: "Minimum Advertised Price (MAP) Policy",
    description:
      "A pricing policy that establishes the lowest price at which a retailer can publicly advertise a product, helping brands protect equity and support fair competition.",
  },
  {
    title: "Unilateral Pricing Policy (UPP)",
    description:
      "A policy similar to MAP, but sometimes broader in scope because it can govern both the advertised price and the actual sale price.",
  },
  {
    title: "MAP Compliance",
    description:
      "The degree to which retailers and sellers adhere to a brand's MAP policy across public listings and product detail pages.",
  },
  {
    title: "MAP Violation",
    description:
      "A case where a retailer advertises a product below the brand's minimum advertised price and must be documented with evidence.",
  },
  {
    title: "Unauthorized Sellers",
    description:
      "Retailers or merchants selling a brand's products without approval, often creating pricing volatility and channel conflict.",
  },
  {
    title: "Buy Box",
    description:
      "The section of an Amazon product page that wins the default purchase placement and often intensifies pricing pressure.",
  },
  {
    title: "Gray Market",
    description:
      "The sale of genuine products through unintended or unauthorized channels, which can undermine MAP discipline and brand control.",
  },
  {
    title: "Blocking Technology",
    description:
      "The anti-scraping and anti-bot systems retailers use to restrict extraction of pricing, listing and seller data from their sites.",
  },
  {
    title: "Automated Workflow",
    description:
      "A cloud-based MAP enforcement workflow that monitors websites, captures evidence and helps brand teams organize infringement actions at scale.",
  },
  {
    title: "Channel Conflict",
    description:
      "Tension between sales channels when one retailer, marketplace or seller undercuts pricing or disrupts the intended market strategy.",
  },
];

const additionalTerms = [
  "Scraping",
  "Bots / Extractors",
  "Strikes",
  "Coercion",
  "Infringement",
  "MAP Holiday",
  "Rebates",
  "Allowances",
  "Chargebacks",
  "Authorized Seller Program",
  "Dynamic Pricing",
  "Brand Equity",
  "Third-Party Marketplace",
];

const legalCases = [
  "Dr. Miles Medical Co. v. John D. Park & Sons Co. (1911)",
  "Leegin Creative Leather Products, Inc. v. PSKS, Inc. (2007)",
  "United States v. Colgate & Co. (1919)",
  "State Oil Co. v. Khan (1997)",
  "Monsanto Co. v. Spray-Rite Service Corp. (1984)",
  "Continental T.V., Inc. v. GTE Sylvania Inc. (1977)",
];

export default function UsaGlossaryPage() {
  return (
    <>
      <UsaHero
        eyebrow="Glossary"
        title="MAP Enforcement Terms: a complete glossary for 2025"
        highlight="MAP Enforcement Terms"
        description="A practical reference for brand teams evaluating MAP monitoring, seller compliance, and digital shelf workflows. Use it to clarify terminology, compare approaches, and make better enforcement decisions."
        primaryCta="Explore MAP monitoring"
        primaryHref={canonicalRoutes.usa.map}
        aside={
          <div className="space-y-4 text-white">
            <div className="rounded-3xl border border-white/15 bg-white/10 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                Use this glossary to
              </p>
              <div className="mt-4 space-y-3">
                {[
                  "Understand the language vendors and marketplaces use",
                  "Align ecommerce, legal, pricing, and channel teams",
                  "Ask better questions during provider evaluation",
                  "Clarify policy, enforcement, and reporting terms",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm font-semibold text-white/85">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        }
      />

      <SeoBreadcrumbs
        items={[
          { label: "Home", href: canonicalRoutes.usa.home },
          { label: "Resources", href: canonicalRoutes.usa.resources },
          { label: "Glossary" },
        ]}
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Introduction"
            title="A reference built for brand and channel teams"
            description="This glossary is meant to help prospective customers, operators, and stakeholders understand the terms that shape MAP programs, seller compliance, and marketplace enforcement."
          />
          <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-8 shadow-card">
            <p className="text-sm leading-relaxed text-gray-600">
              MAP enforcement touches pricing, ecommerce, legal, sales, and channel management.
              When those teams use the same definitions, it becomes easier to evaluate tools,
              diagnose problems, and communicate clearly with internal stakeholders and retail
              partners.
            </p>
            <div className="flex items-center gap-3 rounded-2xl bg-gray-50 px-4 py-3">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search terms like MAP, Buy Box, gray market, or unauthorized seller..."
                className="w-full bg-transparent text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
                readOnly
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Core terms"
            title="Essential MAP and compliance definitions"
            description="Start here if you need the core language behind MAP policy design, seller compliance, and modern marketplace enforcement."
          />
          <InsightGrid items={terms} columns="three" />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Additional vocabulary"
            title="More terms commonly used in MAP programs"
            description="These are related terms that often come up in provider demos, policy reviews, retailer conversations, and compliance operations."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {additionalTerms.map((term) => (
              <div key={term} className="rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4 text-sm font-semibold text-gray-800 shadow-card">
                {term}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Legal context"
            title="Relevant court cases often referenced in MAP discussions"
            description="These landmark U.S. cases are frequently cited when brands discuss pricing policy design, unilateral enforcement, and compliance risk."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {legalCases.map((item) => (
              <div key={item} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-card">
                <p className="text-sm font-semibold text-gray-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <UsaFinalCta
        title="Ready to connect these terms to a real MAP workflow?"
        description="If your team is evaluating how to monitor sellers, validate violations, and operationalize enforcement, the next step is seeing how these concepts work in practice."
        cta="Talk to sales"
      />
    </>
  );
}
