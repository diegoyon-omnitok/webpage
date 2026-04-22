import Link from "next/link";
import { Database, FileSearch, Bot, BarChart3, Users, FileText, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: <Database size={22} />,
    title: "Data Inputs",
    description: "Pricing data, seller listings and product content from retailers and marketplaces.",
    highlight: false,
    position: "bottom",
  },
  {
    icon: <FileSearch size={22} />,
    title: "Data Extraction",
    description: "Advanced extraction connected to thousands of retailers capturing MAP violations in real time.",
    highlight: false,
    position: "top",
  },
  {
    icon: <Bot size={22} />,
    title: "Omnitok AI Engine",
    description: "Normalization, product matching and deep analysis transforming raw inputs into pricing intelligence.",
    highlight: true,
    position: "bottom",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Data Analysis",
    description: "MAP violation detection, pricing trends and shelf performance metrics across channels.",
    highlight: false,
    position: "top",
  },
  {
    icon: <Users size={22} />,
    title: "Human Verification",
    description: "Expert review layer to validate critical findings before escalation.",
    highlight: false,
    position: "bottom",
  },
  {
    icon: <FileText size={22} />,
    title: "Reports & Insights",
    description: "Actionable MAP compliance reports and digital shelf analytics delivered to your team.",
    highlight: true,
    position: "top",
  },
];

export default function HowItWorksDiagram() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mb-12 lg:mb-20 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">Platform</p>
          <h2 className="text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
            Turn pricing and shelf signals into action
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500">
            From raw retailer data to actionable pricing intelligence, Omnitok connects MAP monitoring and digital shelf analytics in one workflow.
          </p>
        </div>

        {/* Desktop zigzag timeline */}
        <div className="hidden lg:block">
          <div className="relative">

            {/* Horizontal connector line */}
            <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10" />

            <div className="relative grid grid-cols-6 gap-6">
              {steps.map((step, i) => (
                <div key={step.title} className="flex flex-col items-center">

                  {/* Top card */}
                  {step.position === "top" && (
                    <div className={`relative mb-6 w-full overflow-hidden rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:shadow-card-hover ${
                      step.highlight ? "gradient-hero shadow-lg" : "border border-gray-100 bg-gray-50 shadow-card"
                    }`}>
                      {!step.highlight && <div className="absolute left-0 right-0 top-0 h-1 gradient-hero" />}
                      <h3 className={`text-sm font-bold leading-snug ${step.highlight ? "text-white" : "text-gray-900"}`}>
                        {step.title}
                      </h3>
                      <p className={`mt-2 text-xs leading-relaxed ${step.highlight ? "text-white/70" : "text-gray-500"}`}>
                        {step.description}
                      </p>
                    </div>
                  )}

                  {/* Spacer for bottom cards */}
                  {step.position === "bottom" && (
                    <div className="mb-6 w-full opacity-0 rounded-2xl p-5">
                      <p className="text-xs">&nbsp;</p>
                      <p className="mt-2 text-xs">&nbsp;</p>
                      <p className="mt-2 text-xs">&nbsp;</p>
                    </div>
                  )}

                  {/* Node */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-card ${
                      step.highlight ? "gradient-hero text-accent" : "border border-gray-100 bg-white text-primary"
                    }`}>
                      {step.icon}
                    </div>
                    <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-white">
                      {i + 1}
                    </span>
                  </div>

                  {/* Bottom card */}
                  {step.position === "bottom" && (
                    <div className={`relative mt-6 w-full overflow-hidden rounded-2xl p-5 text-center transition-all duration-300 hover:translate-y-2 hover:scale-110 hover:shadow-card-hover ${
                      step.highlight ? "gradient-hero shadow-lg" : "border border-gray-100 bg-gray-50 shadow-card"
                    }`}>
                      {!step.highlight && <div className="absolute left-0 right-0 bottom-0 h-1 gradient-hero" />}
                      <h3 className={`text-sm font-bold leading-snug ${step.highlight ? "text-white" : "text-gray-900"}`}>
                        {step.title}
                      </h3>
                      <p className={`mt-2 text-xs leading-relaxed ${step.highlight ? "text-white/70" : "text-gray-500"}`}>
                        {step.description}
                      </p>
                    </div>
                  )}

                  {/* Spacer for top cards */}
                  {step.position === "top" && (
                    <div className="mt-6 w-full opacity-0 rounded-2xl p-5">
                      <p className="text-xs">&nbsp;</p>
                      <p className="mt-2 text-xs">&nbsp;</p>
                      <p className="mt-2 text-xs">&nbsp;</p>
                    </div>
                  )}

                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: simple vertical list */}
        <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`flex items-start gap-4 rounded-2xl p-5 ${
                step.highlight ? "gradient-hero" : "border border-gray-100 bg-gray-50"
              }`}
            >
              <div className={`relative shrink-0 flex h-11 w-11 items-center justify-center rounded-xl ${
                step.highlight ? "bg-white/10 text-accent" : "bg-primary/10 text-primary"
              }`}>
                {step.icon}
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-white">
                  {i + 1}
                </span>
              </div>
              <div>
                <h3 className={`text-sm font-bold ${step.highlight ? "text-white" : "text-gray-900"}`}>
                  {step.title}
                </h3>
                <p className={`mt-1 text-xs leading-relaxed ${step.highlight ? "text-white/70" : "text-gray-500"}`}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/en-us/contact"
            className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white shadow-lg transition-opacity gradient-brand hover:opacity-90"
          >
            Talk to us
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}
