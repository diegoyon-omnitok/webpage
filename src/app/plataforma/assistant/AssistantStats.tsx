"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 35, suffix: "%", label: "Aumento en conversión" },
  { value: 40, suffix: "%", label: "Ahorro en costos operativos" },
  { value: 95, suffix: "%", label: "Resolución de dudas autónomas" },
];

function StatCard({ value, suffix, label, started, delay }: { value: number; suffix: string; label: string; started: boolean; delay: number }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!started) {
      setDisplay(0);
      return;
    }
    const timeout = setTimeout(() => {
      const duration = 1600;
      const steps = 60;
      const interval = duration / steps;
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const eased = 1 - (1 - step / steps) * (1 - step / steps);
        setDisplay(Math.round(eased * value));
        if (step >= steps) {
          setDisplay(value);
          clearInterval(timer);
        }
      }, interval);
      return () => clearInterval(timer);
    }, delay);
    return () => clearTimeout(timeout);
  }, [started, value, delay]);

  return (
    <div
      className="flex flex-col items-center justify-center rounded-2xl px-8 py-10 bg-white"
      style={{ border: "1px solid rgba(255,23,123,0.2)", boxShadow: "0 2px 12px rgba(77,74,157,0.08)" }}
    >
      <p className="text-5xl lg:text-6xl font-bold tabular-nums" style={{ color: "#FF177B" }}>
        {display}
        {suffix}
      </p>
      <p className="mt-3 text-xs font-semibold text-gray-500 uppercase tracking-widest text-center">{label}</p>
    </div>
  );
}

export default function AssistantStats() {
  const ref = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(false);
          requestAnimationFrame(() => setStarted(true));
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-0 lg:min-h-[100dvh] flex flex-col justify-center py-16 lg:py-24 overflow-hidden box-border w-full gradient-hero"
    >
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-primary/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">El impacto de Omnitok Assistant</h2>
          <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
            Tecnología diseñada con resultados medibles.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} started={started} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
