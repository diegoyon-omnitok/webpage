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
    value: 99,
    suffix: "%",
    label: "Detection Accuracy",
    front: "AI-powered product matching and human validation workflows achieve a 99.5% accuracy rate — so you only act on real violations.",
    back: "Thanks to our AI-powered product matching and human verification workflows, our MAP monitoring platform achieves a 99.5% accuracy rate — ensuring you only take action on real violations, not noise.",
    color: "#FF177B",
  },
  {
    value: 4,
    suffix: "X",
    label: "More Listings Detected",
    front: "Proprietary crawling infrastructure and broad marketplace coverage detect 4X more product listings than legacy MAP monitoring tools.",
    back: "Our proprietary crawling infrastructure and marketplace coverage allow us to detect 4X more product listings than legacy MAP monitoring tools — revealing violations others miss.",
    color: "#4D4A9D",
  },
  {
    value: 10,
    suffix: "X",
    label: "Return on Investment",
    front: "Brands using Omnitok MAP enforcement software typically achieve a 10X ROI by recovering margin losses and reducing manual enforcement work.",
    back: "Our clients typically achieve a 10X ROI — by recovering margin losses, protecting retail relationships, and reducing manual enforcement work.",
    color: "#FF177B",
  },
];

export default function MapImpact() {
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
    useCountUp(stats[0].value, 1600, active),
    useCountUp(stats[1].value, 1200, active),
    useCountUp(stats[2].value, 1400, active),
  ];

  return (
    <section ref={ref} className="gradient-hero py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 lg:mb-14 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-pink-400">Proven results</p>
          <h2 className="mx-auto max-w-2xl text-2xl sm:text-3xl font-bold leading-tight text-white lg:text-4xl">
            Trusted results for MAP pricing compliance
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60">
            Our MAP monitoring platform combines automation and human validation to deliver highly accurate price tracking and reliable policy enforcement.
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
