"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

const stats = [
  {
    value: 1,
    suffix: "MM+",
    label: "LISITNGS AUDITED DAILY",
    back: "Our platform processes over 1 million product listings every day across retailers and marketplaces — giving your team a complete, real-time view of your brand's digital execution.",
    color: "#FF177B",
  },
  {
    value: 1,
    suffix: "M",
    label: "SITES ANALYZED DAILY",
    back: "We monitor more than 1,000 retailer and marketplace sites daily — ensuring no channel is left untracked and your brand's performance is always visible.",
    color: "#4D4A9D",
  },
  {
    value: 99,
    suffix: "%",
    label: "ACCURACY",
    back: "Our AI engine combined with manual review guarantees 99.5% accuracy when identifying and comparing products across all channels — so you act on reliable data, not noise.",
    color: "#FF177B",
  },
];

export default function DsaImpact() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const counts = [
    useCountUp(stats[0].value, 1200, active),
    useCountUp(stats[1].value, 1400, active),
    useCountUp(stats[2].value, 1600, active),
  ];

  return (
    <section ref={ref} className="gradient-hero py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 lg:mb-14 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-pink-400">Our technology in numbers</p>
          <h2 className="mx-auto max-w-2xl text-2xl sm:text-3xl font-bold leading-tight text-white lg:text-4xl">
            Trusted results for digital shelf analytics
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60">
            Leading brands in technology, appliances, beauty, and consumer goods already trust Omnitok to monitor their execution and improve their performance.
          </p>
        </div>

        {/* Flip cards */}
        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <div key={stat.label} className="group h-72 [perspective:1000px]">
              <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                {/* Front */}
                <div className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border border-gray-100 bg-gray-50 p-8 text-center shadow-card [backface-visibility:hidden]">
                  <div
                    className="mb-3 text-6xl font-black leading-none lg:text-7xl xl:text-8xl"
                    style={{ color: stat.color }}
                  >
                    {counts[i]}{stat.suffix}
                  </div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-gray-500">
                    {stat.label}
                  </p>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl p-8 text-center text-white shadow-card [backface-visibility:hidden] [transform:rotateY(180deg)]"
                  style={{ background: `linear-gradient(135deg, #211f4b 0%, #2d2a6e 60%, #1a1838 100%)` }}
                >
                  <div
                    className="mb-4 text-4xl font-black leading-none"
                    style={{ color: stat.color }}
                  >
                    {stat.value}{stat.suffix}
                  </div>
                  <p className="text-sm leading-relaxed text-white/80">{stat.back}</p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
