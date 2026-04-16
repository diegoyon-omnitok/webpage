"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Marcas confían en Omnitok" },
  { value: 150, suffix: "+", label: "Retailers conectados" },
  { value: 1, suffix: "M+", label: "Publicaciones auditadas al día" },
  { value: 99, suffix: "%", label: "Precisión de datos" },
];

function StatCard({
  value,
  suffix,
  label,
  started,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  started: boolean;
  delay: number;
}) {
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
        const progress = step / steps;
        // ease out quad
        const eased = 1 - (1 - progress) * (1 - progress);
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
    <div className="flex flex-col items-center justify-center rounded-2xl px-8 py-10 transition-colors duration-300 bg-white"
      style={{ border: "1px solid rgba(255,23,123,0.2)" }}>
      <p
        className="text-5xl lg:text-6xl font-bold tabular-nums"
        style={{ color: "#FF177B" }}
      >
        {display}{suffix}
      </p>
      <p className="mt-3 text-xs font-semibold text-gray-500 uppercase tracking-widest text-center">
        {label}
      </p>
    </div>
  );
}

export default function ResultsSection() {
  const ref = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(false);
          // small tick so state resets before restarting
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
      className="relative py-32 lg:py-40 overflow-hidden gradient-hero"
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow accents */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-primary/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
            La plataforma en números
          </h2>
          <p className="mt-4 text-base text-white/60 max-w-xl mx-auto">
            Marcas líderes en tecnología, electro, belleza y consumo masivo confían en Omnitok para mejorar su ejecución digital en retailers y marketplaces.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} started={started} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
