"use client";

import Image from "next/image";

const steps = [
  {
    number: "01",
    subtitle: "MAP Monitoring Target Definition and Data Acquisition",
    title: "Setup & rapid deployment",
    bullets: [
      {
        label: "Rapid Setup",
        text: "Instantly configure and deploy MAP monitoring software across multiple retailers and marketplaces, ensuring quick visibility of your brand's pricing.",
      },
      {
        label: "Dynamic Compliance Adaptation",
        text: "Stay ahead with a MAP compliance software that automatically adjusts to pricing policy changes in real time, keeping your brand protected.",
      },
      {
        label: "Reliable Pricing Data Collection",
        text: "Benefit from a robust MAP pricing software that delivers continuous and accurate market data, allowing immediate responses to any MAP violations.",
      },
    ],
    image: "/map-step-1.png",
    imageAlt: "MAP monitoring software setup and data acquisition dashboard",
  },
  {
    number: "02",
    subtitle: "MAP Compliance Processing and Analysis",
    title: "Violation detection & confirmation",
    bullets: [
      {
        label: "Accurate Product Matching",
        text: "Ensure precise identification across marketplaces with our advanced monitoring and compliance software.",
      },
      {
        label: "Comprehensive MAP Violation Analysis",
        text: "Our MAP compliance software doesn't just detect discrepancies; it deeply analyzes them to confirm genuine MAP violations, helping you focus only on real issues.",
      },
      {
        label: "Automated Violation Evidence Capture",
        text: "Once a violation is confirmed, the system automatically captures visual proof — such as screenshots, reports, or photos — providing accurate and verifiable evidence for any necessary enforcement actions.",
      },
    ],
    image: "/map-step-2.png",
    imageAlt: "MAP compliance processing and violation analysis dashboard",
  },
  {
    number: "03",
    subtitle: "Proactive MAP Enforcement and Reporting",
    title: "Enforcement actions at scale",
    bullets: [
      {
        label: "Automated Enforcement Notifications",
        text: "The system dispatches compliance alerts and detailed reports directly to violators, streamlining your MAP enforcement software process and reducing administrative workload.",
      },
      {
        label: "Real-Time Compliance Dashboard",
        text: "Get instant visibility into pricing violations with a live dashboard, enabling you to take swift, data-driven actions to protect your brand.",
      },
      {
        label: "Insightful Market Analysis",
        text: "Use comprehensive market trend data to understand pricing dynamics and adjust your compliance strategies, ensuring they remain effective and aligned with current market conditions.",
      },
    ],
    image: "/map-step-3.png",
    imageAlt: "MAP enforcement notifications and real-time compliance dashboard",
  },
];

export default function MapStepsTabs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">How it works</p>
          <h2 className="text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
            How Our MAP Monitoring and Enforcement Software Works
          </h2>
        </div>

        {/* Stepper */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-primary opacity-20 lg:left-8" />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex gap-8 lg:gap-12">

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
                <div className={`grid flex-1 gap-8 pb-16 lg:grid-cols-2 lg:items-center ${i === steps.length - 1 ? "pb-0" : ""}`}>

                  {/* Image — left only on step 2 (i===1), right on steps 1 and 3 */}
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

                  {/* Text — mirrors image order */}
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
