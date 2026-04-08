"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Network, LayoutTemplate, Bot, BarChart2, X, ArrowRight } from "lucide-react";
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

function ModuleCard({ mod, onClick }: { mod: Module; onClick: () => void }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-card transition-all duration-200 hover:-translate-y-1 hover:scale-[1.04] hover:shadow-card-hover">
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
      <p className="mb-5 text-sm leading-relaxed text-gray-500">{mod.desc}</p>
      {/* Plus button */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={onClick}
          className="flex h-8 w-8 items-center justify-center rounded-full text-lg font-light text-white shadow-md transition-transform hover:scale-110"
          style={{ background: "linear-gradient(90deg, #FF177B 0%, #4D4A9D 100%)" }}
          aria-label={`Más sobre ${mod.product}`}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const [selected, setSelected] = useState<Module | null>(null);

  const leftModules  = modules.filter(m => m.position === "left");
  const rightModules = modules.filter(m => m.position === "right");

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Controla cómo aparece tu marca en canales digitales
          </h2>
          <p className="mt-5 text-xl text-gray-500">
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
            {leftModules.map(m => <ModuleCard key={m.product} mod={m} onClick={() => setSelected(m)} />)}
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
                  <Image src="/Favicon.png" alt="Omnitok" width={64} height={64} style={{ width: "64px", height: "64px", objectFit: "contain" }} />
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
            {rightModules.map(m => <ModuleCard key={m.product} mod={m} onClick={() => setSelected(m)} />)}
          </div>
        </div>

        {/* Mobile grid */}
        <div className="lg:hidden grid sm:grid-cols-2 gap-4">
          {modules.map(m => <ModuleCard key={m.product} mod={m} onClick={() => setSelected(m)} />)}
        </div>

        <div className="mt-12 flex justify-center lg:mt-16">
          <Link
            href={canonicalRoutes.latam.contacto}
            className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white gradient-brand shadow-lg transition-opacity hover:opacity-90"
          >
            Conversemos
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>

      </div>

      {/* Split modal */}
      {selected && (
        <>
          <div className="fixed inset-0 z-40 backdrop-blur-md" style={{ background: "rgba(10,8,30,0.8)" }} onClick={() => setSelected(null)} />
          <div className="fixed inset-4 lg:inset-10 z-50 rounded-3xl overflow-hidden shadow-modal flex" style={{ animation: "modalIn 0.4s cubic-bezier(0.34,1.4,0.64,1)" }}>

            {/* Left dark */}
            <div className="relative flex flex-col justify-between p-8 lg:p-12 w-full lg:w-1/2 flex-shrink-0 gradient-hero overflow-hidden">
              <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(255,23,123,0.25)" }} />
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(77,74,157,0.35)" }} />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}>
                  <selected.icon size={13} className="text-white/70" />
                  <span className="text-[11px] font-semibold text-white/70 uppercase tracking-widest">{selected.label}</span>
                </div>
                <p className="text-accent text-sm font-semibold mb-2">{selected.product}</p>
                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">{selected.title}</h3>
                <div className="space-y-4">
                  {selected.detail.split("\n\n").map((para, i) => (
                    <p key={i} className="text-white/60 leading-relaxed text-base">{para}</p>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mt-10">
                <Link href={selected.href} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white border border-white/20 hover:bg-white/10 transition-colors" onClick={() => setSelected(null)}>
                  Conocer {selected.product} <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Right white */}
            <div className="hidden lg:flex flex-col bg-white w-1/2 overflow-y-auto relative">
              <button onClick={() => setSelected(null)} className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                <X size={15} className="text-gray-600" />
              </button>
              <div className="p-10 flex flex-col gap-8 flex-1 justify-center">
                <div>
                  <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-4">Beneficios</p>
                  <div className="space-y-3">
                    {selected.bullets.map((b, i) => (
                      <div
                        key={b}
                        className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-white shadow-sm cursor-default motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out hover:scale-[1.03] hover:shadow-lg hover:border-primary/40 hover:bg-gradient-to-r hover:from-[rgba(255,23,123,0.12)] hover:to-[rgba(77,74,157,0.1)] group"
                      >
                        <div
                          className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-xs text-white motion-safe:transition-transform motion-safe:duration-300 group-hover:scale-110 group-hover:shadow-md"
                          style={{ background: "linear-gradient(90deg, #FF177B 0%, #4D4A9D 100%)" }}
                        >
                          {i + 1}
                        </div>
                        <span className="text-sm font-medium text-gray-700 motion-safe:transition-colors motion-safe:duration-300 group-hover:text-primary">
                          {b}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="h-px bg-gray-100" />
                <p className="text-xs text-gray-400 leading-relaxed">
                  Parte de la <span className="font-semibold text-primary">Omnitok Product Experience Suite</span> — un sistema conectado que controla tu ejecución digital de principio a fin.
                </p>
              </div>
            </div>

            {/* Mobile close */}
            <button onClick={() => setSelected(null)} className="lg:hidden absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center z-20" style={{ background: "rgba(255,255,255,0.15)" }}>
              <X size={16} className="text-white" />
            </button>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes modalIn {
          from { transform: scale(0.9) translateY(20px); opacity: 0; }
          to   { transform: scale(1) translateY(0); opacity: 1; }
        }
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
