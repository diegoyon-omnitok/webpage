"use client";

import React from "react";
import Link from "next/link";
import { LayoutTemplate, Package, Bot, BarChart3, ArrowRight } from "lucide-react";
import { canonicalRoutes } from "@/lib/markets";

type Module = {
  icon: React.ElementType;
  name: string;
  tagline: string;
  desc: string;
  href: string;
  color: string;
  bgLight: string;
  textColor: string;
  hoverColor: string;
  features: string[];
  headline?: string;
  longDesc?: string;
};

const modules: Module[] = [
  {
    icon: LayoutTemplate,
    name: "Omnitok Content",
    tagline: "Crea contenido enriquecido que vende en todos tus retailers",
    desc: "Construye PDPs de alto rendimiento con imágenes, descripciones y atributos optimizados. Distribúyelos de forma consistente en todos los canales digitales.",
    href: canonicalRoutes.latam.content,
    color: "from-[#FF177B] to-[#4D4A9D]",
    bgLight: "bg-accent/10",
    textColor: "text-accent",
    hoverColor: "#E0156E",
    features: ["Rich Content / A+ Content", "Templates por retailer", "Distribución automática"],

    headline: "Optimiza la gestión de contenido de producto en los retailers desde una sola plataforma.",
    longDesc: "Cada retailer pide formatos distintos, validaciones únicas y flujos que cambian constantemente. Esto genera retrabajo, errores y una carga operativa que frena la publicación de tus productos.\n\nCentraliza descripciones, especificaciones e imágenes en un catálogo digital único y adáptalas automáticamente a los requisitos de cada retailer, manteniendo tu información siempre consistente y actualizada.",
  },
  {
    icon: Package,
    name: "Omnitok Connect",
    tagline: "Centraliza tu catálogo y distribúyelo sin trabajo manual",
    desc: "Un solo lugar para gestionar todos los atributos, descripciones e imágenes de tus productos. Sincroniza cambios en segundos a múltiples destinos.",
    href: canonicalRoutes.latam.connect,
    color: "from-[#FF177B] to-[#4D4A9D]",
    bgLight: "bg-accent/10",
    textColor: "text-accent",
    hoverColor: "#E0156E",
    features: ["PIM centralizado", "Sincronización multicanal", "Gestión de atributos"],
    headline: "Mejora la conversión de tus páginas de producto con contenido enriquecido y consistente en todos tus retailers.",
    longDesc: "Muchas páginas de producto no logran reflejar el valor real en los retailers. Esto afecta la conversión, genera dudas y debilita la percepción de marca.\n\nCrea fichas técnicas de productos claras, completas y enriquecidas desde un catálogo centralizado, manteniendo la misma información como descripciones, imágenes y especificaciones en todos tus retailers.",
  },
  {
    icon: Bot,
    name: "Omnitok Assistant",
    tagline: "IA que responde al consumidor en el momento de decisión",
    desc: "Un asistente inteligente integrado dentro del PDP que responde preguntas del consumidor, mejora la comprensión del producto y aumenta la tasa de conversión.",
    href: canonicalRoutes.latam.assistant,
    color: "from-[#FF177B] to-[#4D4A9D]",
    bgLight: "bg-accent/10",
    textColor: "text-accent",
    hoverColor: "#E0156E",
    features: ["Q&A automatizado", "Recomendaciones personalizadas", "Integración en PDP"],
    headline: "Atiende, asesora y convierte desde cualquier canal digital.",
    longDesc: "Tus clientes tienen preguntas al momento de comprar, pero muchas veces no encuentran cómo resolverlas. Esto genera fricción, dudas y abandonos de carrito.\n\nIntegra asistencia inteligente, humana o automatizada en todos tus puntos de venta digitales. Un asistente virtual con IA guía a tus clientes, resuelve dudas en tiempo real y recomienda el producto ideal para cada caso, en cualquier canal.",
  },
  {
    icon: BarChart3,
    name: "Digital Shelf Analytics",
    tagline: "Visibilidad total sobre tu ejecución digital en cada retailer",
    desc: "Monitorea precio, disponibilidad, posicionamiento y calidad de contenido en tiempo real. Detecta problemas antes de que impacten tus ventas.",
    href: canonicalRoutes.latam.dsa,
    color: "from-[#FF177B] to-[#4D4A9D]",
    bgLight: "bg-accent/10",
    textColor: "text-accent",
    hoverColor: "#E0156E",
    features: ["Monitoreo en tiempo real", "Score de ejecución", "Alertas automáticas"],
    headline: "Mide y optimiza tu ejecución en retailers y marketplaces.",
    longDesc: "Tus productos están en múltiples canales, pero muchas veces no tienes visibilidad de cómo se muestran, si están disponibles o cómo están posicionados frente a la competencia. Esto impacta directamente en tus ventas.\n\nCentraliza tus datos y conviértelos en insights accionables. Monitorea precios, stock, contenido y posicionamiento en tiempo real para mejorar tu visibilidad y conversión en cada canal.",
  },
];

export default function ModulesSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Mide y controla la ejecución digital de tu marca en retailers y marketplaces
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500">
            Contenido consistente, catálogo centralizado, asistencia inteligente y datos en tiempo real — todo lo que necesitas para vender mejor en cada canal digital.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {modules.map((mod) => {
            const hasLong = !!mod.headline;
            return (
              <div
                key={mod.name}
                className="bg-white rounded-2xl border border-gray-100 shadow-card overflow-hidden hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
              >
                {/* Top colored strip */}
                <div className={`h-1 bg-gradient-to-r ${mod.color}`} />

                <div className="p-6 flex flex-col flex-1">
                  {/* Icon */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-11 h-11 rounded-xl ${mod.bgLight} flex items-center justify-center flex-shrink-0`}>
                      <mod.icon size={22} className={mod.textColor} />
                    </div>
                  </div>

                  {hasLong ? (
                    <>
                      <h3 className="text-2xl font-bold mb-3" style={{ background: "linear-gradient(90deg, #4D4A9D 0%, #4D4A9D 70%, #FF177B 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{mod.name}</h3>
                      <h2 className="text-base font-bold text-gray-900 mb-4 leading-snug">
                        {mod.headline}
                      </h2>
                      <div className="text-sm text-gray-600 leading-relaxed flex-1 space-y-3">
                        {(mod.longDesc ?? "").split("\n\n").map((para, i) => (
                          <p key={i}>{para}</p>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{mod.name}</h3>
                      <p className={`text-sm font-semibold ${mod.textColor} mb-3`}>{mod.tagline}</p>
                      <p className="text-sm text-gray-500 leading-relaxed flex-1">{mod.desc}</p>
                      <div className="mt-5 space-y-1.5">
                        {mod.features.map((f) => (
                          <div key={f} className="flex items-center gap-2 text-sm text-gray-600">
                            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-r ${mod.color}`} />
                            {f}
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  <Link
                    href={mod.href}
                    className={`mt-6 flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${mod.bgLight} ${!hasLong ? "hover:opacity-80" : ""}`}
                    onMouseEnter={hasLong ? (e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.backgroundColor = (mod as { hoverColor?: string }).hoverColor ?? "";
                      el.querySelectorAll("[data-label]").forEach((n) => ((n as HTMLElement).style.color = "#fff"));
                    } : undefined}
                    onMouseLeave={hasLong ? (e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.backgroundColor = "";
                      el.querySelectorAll("[data-label]").forEach((n) => ((n as HTMLElement).style.color = ""));
                    } : undefined}
                  >
                    <span data-label className={`text-sm font-semibold ${mod.textColor}`}>
                      Conocer {mod.name}
                    </span>
                    <ArrowRight data-label size={15} className={`${mod.textColor} group-hover:translate-x-0.5 transition-transform`} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
