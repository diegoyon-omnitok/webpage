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
      className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`,
      }}
    >
      {/* Accent line top */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(90deg, #FF177B 0%, #4D4A9D 100%)",
        }}
      />

      <div className="flex items-start gap-4">
        {/* Number + icon */}
        <div className="flex-shrink-0">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
            style={{ background: "rgba(255, 23, 123, 0.08)" }}
          >
            <Icon size={22} className="text-accent" />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="text-[11px] font-bold tabular-nums tracking-wider"
              style={{ color: "#FF177B" }}
            >
              {problem.number}
            </span>
          </div>
          <h3 className="text-base font-bold text-gray-900 leading-snug mb-2">
            {problem.title}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            {problem.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ProblemSection() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
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
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#FF177B" }}
            />
            <span className="text-xs font-semibold text-accent">
              El desafío de las marcas hoy
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Tu marca está en los retailers.{" "}
            <span className="text-gradient-brand">
              Pero, ¿cómo se ve?
            </span>
          </h2>

          <p className="mt-5 text-lg text-gray-500 leading-relaxed max-w-xl mx-auto">
            Vender a través de retailers y marketplaces es solo el primer paso.
            El verdadero reto es controlar cómo se ejecuta tu marca en cada
            canal digital.
          </p>
        </div>

        {/* Problem cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((problem, i) => (
            <ProblemCard
              key={problem.number}
              problem={problem}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Bottom connector */}
        <div className="mt-14 text-center">
          <div
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full border"
            style={{
              borderColor: "rgba(77, 74, 157, 0.2)",
              background: "rgba(77, 74, 157, 0.04)",
            }}
          >
            <div
              className="w-8 h-[2px] rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #FF177B 0%, #4D4A9D 100%)",
              }}
            />
            <p className="text-sm font-semibold text-primary">
              Omnitok resuelve estos problemas con una plataforma modular
            </p>
            <div
              className="w-8 h-[2px] rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #4D4A9D 0%, #FF177B 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
