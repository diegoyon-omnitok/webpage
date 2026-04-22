"use client";

import Image from "next/image";
import Link from "next/link";
import { Network, LayoutTemplate, Bot, BarChart2, ArrowRight } from "lucide-react";
import { canonicalRoutes } from "@/lib/markets";

const modules = [
  {
    icon: Network,
    label: "Estructura",
    product: "Omnitok Connect",
    href: canonicalRoutes.latam.connect,
    title: "Gestiona el contenido de producto desde una sola plataforma.",
    desc: "Centraliza y adapta información de producto para retailers y marketplaces sin retrabajo.",
    detail: "Cada retailer pide formatos distintos, validaciones únicas y flujos que cambian constantemente. Esto genera retrabajo, errores y una carga operativa que frena la publicación de tus productos.\n\nCentraliza descripciones, especificaciones e imágenes en un catálogo digital único y adáptalas automáticamente a los requisitos de cada retailer, manteniendo tu información siempre consistente y actualizada.",
    bullets: ["Elimina el retrabajo operativo de tu equipo", "Reduce errores en publicaciones de productos", "Actualiza cientos de SKUs en segundos", "Un solo catálogo para todos tus canales"],
    position: "left",
  },
  {
    icon: LayoutTemplate,
    label: "Contenido",
    product: "Omnitok Content",
    href: canonicalRoutes.latam.content,
    title: "Mejora tus páginas de producto con contenido enriquecido y consistente.",
    desc: "Lleva contenido enriquecido a cada retailer para destacar beneficios, atributos y valor de marca.",
    detail: "Muchas páginas de producto no logran reflejar el valor real en los retailers. Esto afecta la conversión, genera dudas y debilita la percepción de marca.\n\nCrea fichas técnicas de productos claras, completas y enriquecidas desde un catálogo centralizado, manteniendo la misma información como descripciones, imágenes y especificaciones en todos tus retailers.",
    bullets: ["Aumenta la tasa de conversión en tus PDPs", "Publica más rápido con menos rechazos", "Contenido consistente en todos tus retailers", "Fortalece la percepción de marca en cada canal"],
    position: "right",
  },
  {
    icon: Bot,
    label: "Experiencia",
    product: "Omnitok Assistant",
    href: canonicalRoutes.latam.assistant,
    title: "Acompaña al shopper y convierte mejor en el momento de decisión.",
    desc: "Suma un asistente de compra para ecommerce que responda dudas y recomiende productos.",
    detail: "Tus clientes tienen preguntas al momento de comprar, pero muchas veces no encuentran cómo resolverlas. Esto genera fricción, dudas y abandonos de carrito.\n\nIntegra asistencia inteligente, humana o automatizada en todos tus puntos de venta digitales. Un asistente virtual con IA guía a tus clientes, resuelve dudas en tiempo real y recomienda el producto ideal para cada caso, en cualquier canal.",
    bullets: ["Reduce el abandono de carrito en el punto de compra", "Resuelve dudas del consumidor sin intervención humana", "Aumenta la confianza antes de la compra", "Mejora la experiencia en cada punto de contacto digital"],
    position: "left",
  },
  {
    icon: BarChart2,
    label: "Performance",
    product: "Digital Shelf Analytics",
    href: canonicalRoutes.latam.dsa,
    title: "Convierte señales del digital shelf en acción",
    desc: "Monitorea precio, stock, contenido y visibilidad antes de que impacten tus ventas.",
    detail: "Tus productos están en múltiples canales, pero muchas veces no tienes visibilidad de cómo se muestran, si están disponibles o cómo están posicionados frente a la competencia. Esto impacta directamente en tus ventas.\n\nCentraliza tus datos y conviértelos en insights accionables. Monitorea precios, stock, contenido y posicionamiento en tiempo real para mejorar tu visibilidad y conversión en cada canal.",
    bullets: ["Detecta problemas antes de que impacten tus ventas", "Toma decisiones basadas en datos reales de cada canal", "Monitorea a la competencia en precio y posicionamiento", "Optimiza tu visibilidad y ejecución en cada retailer"],
    position: "right",
  },
];

type Module = typeof modules[0];

function ModuleCard({ mod }: { mod: Module }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 sm:p-7 shadow-card transition-all duration-200 lg:hover:-translate-y-1 lg:hover:scale-[1.04] lg:hover:shadow-card-hover flex flex-col">
      <div
        className="absolute left-0 right-0 top-0 h-0.5 rounded-t-2xl"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,23,123,0.92) 0%, #A78BFA 48%, rgba(77,74,157,0.85) 100%)",
        }}
      />
      {/* Header */}
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl gradient-hero">
          <mod.icon size={18} className="text-white" />
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gradient-brand">{mod.label}</p>
          <p className="text-xs font-bold" style={{ color: "#4D4A9D" }}>
            {mod.product}
          </p>
        </div>
      </div>
      <h3 className="mb-2 text-base font-bold text-gray-900">{mod.title}</h3>
      <p className="mb-5 text-sm leading-relaxed text-gray-500 flex-1">{mod.desc}</p>
      <Link
        href={mod.href}
        className="module-btn inline-flex items-center gap-1.5 self-start px-3 py-1.5 rounded-lg text-xs font-semibold"
      >
        Conoce más <ArrowRight size={12} />
      </Link>
    </div>
  );
}

export default function HowItWorks() {
  const leftModules  = modules.filter(m => m.position === "left");
  const rightModules = modules.filter(m => m.position === "right");

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Controla cómo aparece tu marca en canales digitales
          </h2>
          <p className="mt-5 text-base sm:text-lg lg:text-xl text-gray-500">
            Omnitok conecta gestión de contenido de producto, contenido enriquecido, asistencia y digital shelf analytics para mejorar visibilidad, experiencia y conversión.
          </p>
        </div>

        {/* Cluster — desktop */}
        <div className="hidden lg:grid grid-cols-3 gap-10 items-center relative">

          {/* Connector line – top row */}
          <div className="absolute left-0 right-0 pointer-events-none overflow-hidden z-0" style={{ top: "25%", height: "3px", background: "linear-gradient(90deg, #FF177B 0%, #A78BFA 50%, #FF177B 100%)", opacity: 0.75 }}>
            <div className="arrow-marker" style={{ animationDelay: "0s" }} />
            <div className="arrow-marker" style={{ animationDelay: "0.9s" }} />
            <div className="arrow-marker" style={{ animationDelay: "1.8s" }} />
          </div>

          {/* Connector line – bottom row */}
          <div className="absolute left-0 right-0 pointer-events-none overflow-hidden z-0" style={{ top: "75%", height: "3px", background: "linear-gradient(90deg, #FF177B 0%, #A78BFA 50%, #FF177B 100%)", opacity: 0.75 }}>
            <div className="arrow-marker" style={{ animationDelay: "0.45s" }} />
            <div className="arrow-marker" style={{ animationDelay: "1.35s" }} />
            <div className="arrow-marker" style={{ animationDelay: "2.25s" }} />
          </div>

          {/* Left */}
          <div className="flex flex-col gap-5 relative z-10">
            {leftModules.map(m => <ModuleCard key={m.product} mod={m}  />)}
          </div>

          {/* Center hub */}
          <div className="relative z-10 flex items-center justify-center">
            <div
              className="relative z-10 w-full cursor-default rounded-3xl p-8 text-center shadow-modal transition-transform duration-300 hover:scale-[1.08]"
              style={{ background: "linear-gradient(135deg, #211f4b 0%, #2d2a6e 50%, #1a1838 100%)" }}
            >
              <div
                className="absolute inset-0 rounded-3xl opacity-[0.05]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="relative z-10">
                <div className="mx-auto mb-4 flex items-center justify-center" style={{ width: "64px", height: "64px" }}>
                  <Image src="/Favicon.png" alt="Omnitok favicon — plataforma de ejecución digital" title="Omnitok" width={64} height={64} style={{ width: "64px", height: "64px", objectFit: "contain" }} />
                </div>
                <p className="mb-1 text-2xl font-bold text-white">Omnitok</p>
                <p className="mb-6 text-base font-medium text-white">Product Experience Suite</p>
                <div className="mb-5 h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(255,23,123,0.4), transparent)" }} />
                <p className="text-sm leading-relaxed text-white/60">
                  Un sistema conectado que controla cómo tu producto se muestra, convierte y compite en cada retailer.
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-5 relative z-10">
            {rightModules.map(m => <ModuleCard key={m.product} mod={m}  />)}
          </div>
        </div>

        {/* Mobile grid */}
        <div className="lg:hidden grid sm:grid-cols-2 gap-4 sm:gap-5">
          {modules.map(m => <ModuleCard key={m.product} mod={m}  />)}
        </div>

        <div className="mt-12 flex justify-center lg:mt-16">
          <Link
            href={canonicalRoutes.latam.contacto}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white gradient-brand shadow-lg transition-opacity hover:opacity-90"
          >
            Conversemos
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>

      </div>

      <style jsx>{`
        @keyframes flowArrow {
          0%   { left: -4%; opacity: 0; }
          8%   { opacity: 1; }
          92%  { opacity: 1; }
          100% { left: 104%; opacity: 0; }
        }
        .arrow-marker {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          border-left: 11px solid #FF177B;
          filter: drop-shadow(0 0 4px #FF177B);
          animation: flowArrow 2.7s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
