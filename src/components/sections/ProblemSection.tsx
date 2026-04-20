"use client";

import { useEffect, useRef, useState } from "react";
import {
  FileX,
  RefreshCcw,
  EyeOff,
  Clock,
  BarChart2,
  AlertTriangle,
} from "lucide-react";

const problems = [
  {
    icon: FileX,
    number: "01",
    title: "PDPs que no convierten",
    desc: "Páginas de producto incompletas, sin contenido enriquecido ni argumentos de compra claros. Cada visita sin conversión es una venta perdida.",
  },
  {
    icon: RefreshCcw,
    number: "02",
    title: "Información inconsistente entre canales",
    desc: "El mismo producto aparece diferente en cada retailer. Precios, descripciones e imágenes que no coinciden dañan la percepción de marca.",
  },
  {
    icon: EyeOff,
    number: "03",
    title: "Sin visibilidad de ejecución digital",
    desc: "No sabes cómo se muestran tus productos en cada canal, qué está fallando ni dónde estás perdiendo frente a la competencia.",
  },
  {
    icon: Clock,
    number: "04",
    title: "Operación manual que no escala",
    desc: "Hojas de cálculo, emails y procesos manuales para actualizar catálogos en decenas de retailers. Cada cambio toma días en lugar de minutos.",
  },
  {
    icon: BarChart2,
    number: "05",
    title: "Datos dispersos, decisiones lentas",
    desc: "Información de precio, stock y contenido repartida en múltiples fuentes. Sin una vista consolidada, las oportunidades se pierden.",
  },
  {
    icon: AlertTriangle,
    number: "06",
    title: "Productos invisibles al consumidor",
    desc: "Contenido no optimizado para los algoritmos de cada retailer hace que tus productos pierdan posicionamiento y visibilidad frente a competidores.",
  },
];

function ProblemCard({
  problem,
  index,
  isVisible,
}: {
  problem: (typeof problems)[0];
  index: number;
  isVisible: boolean;
}) {
  const Icon = problem.icon;

  return (
    <div
      className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      style={{
        background: "linear-gradient(145deg, #1e1c42 0%, #272560 100%)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.55s ease ${index * 0.09}s, transform 0.55s ease ${index * 0.09}s, box-shadow 0.3s ease`,
      }}
    >
      <div className="relative h-full overflow-hidden">
        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: "radial-gradient(circle at 15% 50%, rgba(255,23,123,0.1) 0%, transparent 65%)" }}
        />

        {/* Ghost number */}
        <span
          className="absolute -bottom-2 -right-1 text-[96px] font-black leading-none select-none pointer-events-none"
          style={{ color: "rgba(255,255,255,0.05)" }}
        >
          {problem.number}
        </span>

        {/* Icon */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
          style={{ background: "rgba(255,23,123,0.18)", boxShadow: "0 0 18px rgba(255,23,123,0.18)" }}
        >
          <Icon size={20} style={{ color: "#FF6AAA" }} />
        </div>

        <span className="text-[11px] font-bold tracking-widest mb-1.5 block" style={{ color: "#FF6AAA" }}>
          {problem.number}
        </span>

        <h3 className="text-base font-bold text-white leading-snug mb-2">
          {problem.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
          {problem.desc}
        </p>
      </div>
    </div>
  );
}

export default function ProblemSection() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-5">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#FF177B" }} />
            <span className="text-xs font-semibold text-accent">El desafío de las marcas hoy</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Tu marca está en los retailers.
          </h2>

          <p className="mt-5 text-lg text-gray-500 leading-relaxed max-w-xl mx-auto">
            Vender a través de retailers y marketplaces es solo el primer paso.
            El verdadero reto es controlar cómo se ejecuta tu marca en cada canal digital.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((problem, i) => (
            <ProblemCard key={problem.number} problem={problem} index={i} isVisible={isVisible} />
          ))}
        </div>

        {/* Bottom connector */}
        <div className="mt-14 text-center">
          <div
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full border"
            style={{ borderColor: "rgba(77,74,157,0.2)", background: "rgba(77,74,157,0.04)" }}
          >
            <div className="w-8 h-[2px] rounded-full" style={{ background: "linear-gradient(90deg, #FF177B 0%, #4D4A9D 100%)" }} />
            <p className="text-sm font-semibold text-primary">
              Omnitok resuelve estos problemas con una plataforma modular
            </p>
            <div className="w-8 h-[2px] rounded-full" style={{ background: "linear-gradient(90deg, #4D4A9D 0%, #FF177B 100%)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
