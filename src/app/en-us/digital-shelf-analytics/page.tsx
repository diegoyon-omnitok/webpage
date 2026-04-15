import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LogoBar from "@/components/markets/usa/LogoBar";
import { ArrowRight, BarChart3, Search, Tags } from "lucide-react";
import priceMonitoringImage from "../../../../Price monitoring.jpg";
import productAvailabilityImage from "../../../../Product availability.jpg";
import shareOfSearchImage from "../../../../search of search.jpg";
import contentOptimizationImage from "../../../../content optimization.jpg";

import { buildMetadata, canonicalRoutes, marketAlternates } from "@/lib/markets";
import { UsaHero, UsaFinalCta } from "@/components/markets/usa/UsaBlocks";
import DsaImpact from "@/components/markets/usa/DsaImpact";

export const metadata: Metadata = buildMetadata({
  title: "Digital Shelf Analytics Software | Price, Availability and Content Monitoring",
  description:
    "Monitor pricing, availability, content quality and product visibility across retailers and marketplaces with Digital Shelf Analytics.",
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
        title="Digital Shelf Analytics for Brands Selling Through Retailers and Marketplaces"
        highlight="Digital Shelf Analytics"
        description="Monitor pricing, availability, content quality and product visibility across retailers and marketplaces with Omnitok."
        primaryCta="Talk to us"
        aside={
          <Image
            src="/dsa-hero.png"
            alt="Omnitok Digital Shelf Analytics dashboard — pricing, availability and content monitoring"
            width={800}
            height={600}
            className="block h-auto w-full max-w-[min(100%,32rem)] sm:max-w-[min(100%,36rem)] lg:max-w-[min(100%,40rem)] xl:max-w-[min(100%,44rem)] object-contain object-right-bottom lg:translate-x-5 xl:translate-x-8 2xl:translate-x-12 origin-center lg:origin-right"
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

      {/* Why choose section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">Why Omnitok</p>
            <h2 className="text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
              Monitor pricing, availability and content in one place
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-500">
              We process data from all your channels, standardize it with precision, and transform it into clear insights your team can use to act faster.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: <Tags size={22} />,
                title: "Data Collection",
                description: "We extract key information from all retailers and marketplaces: pricing, availability, positioning, content, and reviews.",
              },
              {
                icon: <Search size={22} />,
                title: "Product Matching",
                description: "Our AI engine + manual review guarantees 99.5% accuracy when identifying and comparing the exact same product across all channels.",
              },
              {
                icon: <BarChart3 size={22} />,
                title: "Actionable Analytics",
                description: "We transform thousands of data points into clear insights, visual reports, and alerts that prioritize what is most urgent and impactful.",
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
        <div className="max-w-4xl mx-auto px-6 lg:px-8 mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">Benefits</p>
          <h2 className="text-3xl font-bold uppercase leading-tight text-gray-900 lg:text-4xl">
            Gain visibility into digital shelf execution
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-500">
            Monitor the retailer signals that affect visibility, conversion and consistency across your digital shelf.
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
          <div className="flex flex-col gap-10 lg:gap-14">
            {[
              {
                accent: "from-[#FF177B] to-[#c0136a]",
                dot: "#FF177B",
                eyebrow: "Promotions and Pricing",
                title: "Promotions and Pricing",
                desc: "",
                bullets: [
                  { label: "Price Comparison", text: "Monitor how your prices are displayed across each retailer." },
                  { label: "Price History", text: "Analyze the evolution of prices and promotions over time." },
                  { label: "Variations", text: "Identify price changes or unplanned discounts." },
                ],
                imageSrc: priceMonitoringImage,
                imageAlt: "Promotions and pricing monitoring across retailers",
              },
              {
                accent: "from-[#4D4A9D] to-[#6366f1]",
                dot: "#4D4A9D",
                eyebrow: "Product Availability",
                title: "Product Availability",
                desc: "",
                bullets: [
                  { label: "Availability", text: "Monitor whether your products are active or out of stock at each retailer." },
                  { label: "History", text: "Access historical availability logs." },
                  { label: "Stockouts", text: "Receive automated alerts for prolonged stockouts." },
                ],
                imageSrc: productAvailabilityImage,
                imageAlt: "Digital shelf availability monitoring dashboard",
              },
              {
                accent: "from-[#FF177B] to-[#EC4899]",
                dot: "#FF177B",
                eyebrow: "Search Positioning (Share of Search)",
                title: "Search Positioning (Share of Search)",
                desc: "",
                bullets: [
                  { label: "Position Monitoring", text: "Measure your products' placement in search results and key categories." },
                  { label: "Brand Visibility", text: "Compare how many of your brand's products versus competitors appear on the first page for specific keywords or categories." },
                  { label: "Promotions and Paid Visibility", text: "Identify if your search ranking at a retailer stems from organic visibility or paid ads within the platform." },
                ],
                imageSrc: shareOfSearchImage,
                imageAlt: "Search positioning and share of search analytics dashboard",
              },
              {
                accent: "from-[#4D4A9D] to-[#6366f1]",
                dot: "#4D4A9D",
                eyebrow: "Content Optimization",
                title: "Content Optimization",
                desc: "",
                bullets: [
                  { label: "Product Detail Page (PDP) Completeness", text: "Verify if each PDP contains all essential elements: images, titles, descriptions, attributes, videos, and enhanced content." },
                  { label: "SEO Optimization", text: "Evaluate the use of keywords and content structure within each retailer." },
                  { label: "Brand Guidelines Monitoring", text: "Control that visual and communication guidelines are applied correctly." },
                ],
                imageSrc: contentOptimizationImage,
                imageAlt: "Content optimization and PDP completeness monitoring",
              },
            ].map((f, i) => {
              const reverse = i % 2 === 1;
              const textOrderClass = reverse ? "order-1 lg:order-2" : "order-1";
              const visualOrderClass = reverse ? "order-2 lg:order-1" : "order-2";
              const textCell = (
                <div key="text" className={`flex min-h-0 flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12 ${textOrderClass}`}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: f.dot }}>
                    {String(i + 1).padStart(2, "0")} — {f.eyebrow}
                  </p>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 leading-snug mb-3">{f.title}</h3>
                  {"bullets" in f && f.bullets ? (
                    <ul className="space-y-3">
                      {f.bullets.map((b: { label: string; text: string }) => (
                        <li key={b.label} className="flex items-start gap-2 text-base text-gray-500 leading-relaxed">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span><span className="font-semibold text-gray-700">{b.label}:</span> {b.text}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-base text-gray-500 leading-relaxed">{f.desc}</p>
                  )}
                </div>
              );
              const visualCell = (
                <div key="visual" className={`flex items-center justify-center p-4 lg:p-6 ${visualOrderClass}`}>
                  <Image
                    src={f.imageSrc}
                    alt={f.imageAlt}
                    width={800}
                    height={500}
                    className="w-full h-auto object-contain motion-safe:transition-transform duration-300 lg:group-hover:scale-105"
                  />
                </div>
              );
              return (
                <article key={f.title} className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-card motion-safe:transition-transform duration-300 lg:hover:scale-[1.02]">
                  <div className={`h-1 w-full bg-gradient-to-r ${f.accent}`} />
                  <div className="grid items-stretch min-h-0 lg:min-h-[400px] lg:grid-cols-2">
                    {textCell}
                    {visualCell}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="flex justify-center mt-12 pt-10 border-t border-gray-200">
            <Link
              href={canonicalRoutes.usa.contact}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-brand hover:opacity-90 transition-opacity shadow-lg"
            >
              Talk to us <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <DsaImpact />

      {/* DSA CTA Banner */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-black uppercase leading-tight text-primary lg:text-3xl">
              Turn shelf data into faster action
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-gray-600">
              Your products&apos; performance in digital channels can no longer depend on intuition or isolated retailer reports. With Omnitok Digital Shelf Analytics, you get a complete view of pricing, availability, content and search visibility — and if MAP enforcement is also part of your strategy, you can connect this workflow with our{" "}
              <Link href={canonicalRoutes.usa.map} className="font-semibold text-primary hover:underline">
                MAP monitoring software
              </Link>{" "}
              or explore practical guidance in the{" "}
              <Link href={canonicalRoutes.usa.blog} className="font-semibold text-primary hover:underline">
                Omnitok blog
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
      </section>

      <UsaFinalCta
        title="Ready to improve digital shelf visibility across retailers?"
        description="Give your team complete visibility into pricing, availability, content quality and search positioning across every retailer and marketplace."
        cta="Contact us"
      />
    </>
  );
}
