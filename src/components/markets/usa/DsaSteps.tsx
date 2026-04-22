"use client";

import Image from "next/image";

const steps = [
  {
    number: "01",
    subtitle: "Data Collection",
    title: "Extract data from every channel",
    bullets: [
      {
        label: "Complete Channel Coverage",
        text: "We extract key information from all retailers and marketplaces: pricing, availability, positioning, content, and reviews.",
      },
      {
        label: "Real-Time Data Feeds",
        text: "Continuous data collection ensures your team always has the most up-to-date view of your brand's digital execution.",
      },
      {
        label: "Multi-Retailer Standardization",
        text: "Data from all sources is standardized with precision so you can compare performance across channels in one unified view.",
      },
    ],
    image: "/dsa-step-1.png",
    imageAlt: "Digital shelf data collection from retailers and marketplaces",
  },
  {
    number: "02",
    subtitle: "Product Matching & Analysis",
    title: "99.5% accuracy across all channels",
    bullets: [
      {
        label: "AI-Powered Product Matching",
        text: "Our AI engine + manual review guarantees 99.5% accuracy when identifying and comparing the exact same product across all channels.",
      },
      {
        label: "Cross-Channel Comparison",
        text: "Instantly compare how your products are positioned, priced, and presented across every retailer — with no manual effort.",
      },
      {
        label: "Anomaly Detection",
        text: "Automatically surface discrepancies in content, pricing, or availability that deviate from your brand standards.",
      },
    ],
    image: "/dsa-step-2.png",
    imageAlt: "AI product matching and digital shelf analysis",
  },
  {
    number: "03",
    subtitle: "Actionable Analytics & Reporting",
    title: "Clear insights that drive action",
    bullets: [
      {
        label: "Prioritized Alerts",
        text: "We transform thousands of data points into clear insights, visual reports, and alerts that prioritize what is most urgent and impactful.",
      },
      {
        label: "Visual Dashboards",
        text: "Get instant visibility into your brand's digital execution with live dashboards — enabling swift, data-driven decisions.",
      },
      {
        label: "Exportable Reports",
        text: "Share performance reports across teams and use them in retailer conversations to drive improvements where they matter most.",
      },
    ],
    image: "/dsa-step-3.png",
    imageAlt: "Digital shelf analytics dashboard and reporting",
  },
];

export default function DsaSteps() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 lg:mb-16 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">How it works</p>
          <h2 className="text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
            How Our Digital Shelf Analytics Software Works
          </h2>
        </div>

        {/* Stepper */}
        <div className="relative">
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-primary opacity-20 lg:left-8" />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex gap-5 lg:gap-12">

                {/* Node */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="gradient-brand flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-black text-white shadow-lg lg:h-16 lg:w-16 lg:text-base">
                    {step.number}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-primary/30 to-transparent" style={{ minHeight: "3rem" }} />
                  )}
                </div>

                {/* Content */}
                <div className={`grid flex-1 gap-6 pb-10 lg:gap-8 lg:grid-cols-2 lg:items-center lg:pb-16 ${i === steps.length - 1 ? "pb-0 lg:pb-0" : ""}`}>

                  {/* Image */}
                  <div className={`flex items-center justify-center overflow-hidden rounded-2xl p-4 ${i === 1 ? "lg:order-first bg-transparent border-0 shadow-none" : "lg:order-last bg-white border border-gray-100 shadow-card"}`}>
                    {step.image ? (
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        width={600}
                        height={380}
                        quality={100}
                        unoptimized
                        className="h-auto w-full object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-52 w-full items-center justify-center text-sm text-gray-300">
                        Image coming soon
                      </div>
                    )}
                  </div>

                  {/* Text */}
                  <div className={i === 1 ? "lg:order-last" : "lg:order-first"}>
                    <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-accent">
                      {step.subtitle}
                    </p>
                    <h3 className="mb-5 text-xl font-bold text-gray-900 lg:text-2xl">
                      {step.title}
                    </h3>
                    <ul className="space-y-4">
                      {step.bullets.map((b) => (
                        <li key={b.label} className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <p className="text-sm leading-relaxed text-gray-600">
                            <span className="font-semibold text-gray-900">{b.label}: </span>
                            {b.text}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
