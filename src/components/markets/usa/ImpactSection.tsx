"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

const stats = [
  { prefix: "Up to", value: 5, suffix: "%", label: "Revenue Increase" },
  { prefix: "", value: 10, suffix: "X", label: "ROI" },
  { prefix: "", value: 50, suffix: "%", label: "Faster to Market" },
];

function StatCard({
  prefix,
  value,
  suffix,
  label,
  animate,
  delay,
}: {
  prefix: string;
  value: number;
  suffix: string;
  label: string;
  animate: boolean;
  delay: number;
}) {
  const [started, setStarted] = useState(false);
  const count = useCountUp(value, 1600, started);

  useEffect(() => {
    if (!animate) return;
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [animate, delay]);

  return (
    <div className="group relative flex flex-col items-center justify-center rounded-3xl border border-white/20 bg-white px-8 py-10 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover overflow-hidden">
      {prefix ? (
        <p className="relative text-xs font-bold uppercase tracking-[0.2em] text-gray-400">{prefix}</p>
      ) : (
        <p className="relative text-xs font-bold uppercase tracking-[0.2em] text-transparent select-none">—</p>
      )}

      <p className="relative mt-1 text-6xl font-bold leading-none tracking-tight text-accent sm:text-7xl">
        {count}
        <span>{suffix}</span>
      </p>

      <p className="relative mt-3 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">{label}</p>
    </div>
  );
}

export default function ImpactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden gradient-hero py-28">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glows */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/30 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">Impact</p>
          <h2 className="text-3xl font-bold leading-tight text-white lg:text-4xl">
            Measured impact across pricing, compliance and execution
          </h2>
        </div>

        <div ref={ref} className="grid gap-6 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              {...stat}
              animate={animate}
              delay={i * 150}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
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
