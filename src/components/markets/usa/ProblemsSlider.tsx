"use client";


const problems = [
  {
    number: "01",
    problem: "Brand Protection and Pricing Strategy",
    solution: "Protect brand equity and ensure your pricing strategy remains intact.",
    cta: "Explore MAP monitoring",
    href: "/en-us/map-monitoring",
  },
  {
    number: "02",
    problem: "Unfair Competition Among Resellers",
    solution: "Monitor resellers to maintain fair pricing practices and strengthen relationships.",
    cta: "See how it works",
    href: "/en-us/map-monitoring",
  },
  {
    number: "03",
    problem: "Marketplace Confusion & Missing Seller Info",
    solution: "Control brand image across marketplaces and extract detailed information about sellers.",
    cta: "Explore Digital Shelf Analytics",
    href: "/en-us/digital-shelf-analytics",
  },
  {
    number: "04",
    problem: "Slow Program Launch Time",
    solution: "Avoid waiting months to launch your MAP program. Monitor and enforce 50% faster than other providers.",
    cta: "Talk to us",
    href: "/en-us/contact",
  },
  {
    number: "05",
    problem: "Poorly Matched or Incorrect Products",
    solution: "Trust the reporting and data you receive to act with confidence and minimize errors.",
    cta: "Talk to us",
    href: "/en-us/contact",
  },
  {
    number: "06",
    problem: "Poor Visibility into Brand Presence",
    solution: "Obtain a clear view of your market position and how it compares with your competitors.",
    cta: "Explore Digital Shelf Analytics",
    href: "/en-us/digital-shelf-analytics",
  },
  {
    number: "07",
    problem: "High CS Response Time / No Response",
    solution: "Get responses when you need them. Our dedicated team offers some of the industry's best SLAs.",
    cta: "Talk to us",
    href: "/en-us/contact",
  },
  {
    number: "08",
    problem: "Manual Update & Data Blindness",
    solution: "Your time is valuable. Automate key workflows and extract insights at the speed your business requires.",
    cta: "Talk to us",
    href: "/en-us/contact",
  },
];

export default function ProblemsList() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">Problems we solve</p>
          <h2 className="text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
            Monitor MAP violations and unauthorized sellers
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-500">
            Omnitok helps brand teams solve pricing, seller compliance and digital shelf visibility problems without relying on fragmented workflows.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((item) => (
            <div
              key={item.number}
              className="group h-52 [perspective:1000px]"
            >
              <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                {/* Front */}
                <div className="absolute inset-0 flex flex-col justify-between rounded-3xl p-6 [backface-visibility:hidden] overflow-hidden" style={{ background: "linear-gradient(135deg, #211f4b 0%, #2d2a6e 50%, #1a1838 100%)" }}>
                  <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-pink-500/20 blur-2xl pointer-events-none" />
                  <div className="absolute -top-4 -left-4 h-16 w-16 rounded-full bg-fuchsia-500/15 blur-xl pointer-events-none" />
                  <span className="relative text-4xl font-bold text-white/20">{item.number}</span>
                  <h3 className="relative text-base font-bold leading-snug text-white">
                    {item.problem}
                  </h3>
                </div>

                {/* Back */}
                <div className="absolute inset-0 flex flex-col justify-center rounded-3xl border border-gray-100 bg-white p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent">How we help</p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-700">
                    {item.solution}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
