"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CombineWithLinks } from "@/components/sections/ModuleLinks";

const faqs = [
  {
    q: "¿Las implementaciones son automáticas en cada retailer?",
    a: "Depende. Omnitok Content ya está integrado en más de 150 retailers, pero cada retailer debe aprobar a la marca para habilitar la implementación del contenido.",
  },
  {
    q: "¿Si quiero hacer un cambio, cuánto tiempo demora en reflejarse?",
    a: "Una vez publicado, el cambio se refleja de forma inmediata.",
  },
  {
    q: "¿Omnitok también se hace cargo del diseño?",
    a: "Sí. Contamos con un equipo de diseñadores que, en base al material entregado por la marca, desarrolla los contenidos para cada producto.",
  },
  {
    q: "¿Si quiero integrar un nuevo canal, cómo se hace?",
    a: "La marca debe coordinar la aprobación con el retailer o marketplace, y Omnitok acompaña todo el proceso para llevar a cabo la integración.",
  },
  {
    q: "¿Tiene un costo para el retail implementar Omnitok?",
    a: "No. La implementación de Omnitok no tiene costo para el retailer.",
  },
  {
    q: "¿Qué tipo de contenido se puede implementar con Omnitok Content?",
    a: "Omnitok Content permite implementar distintos formatos como banners de marca, imágenes lifestyle, videos, tablas comparativas, hotspots interactivos y otros módulos enriquecidos dentro de la PDP.",
  },
  {
    q: "¿Se puede adaptar el contenido según cada retailer?",
    a: "Sí. El contenido puede adaptarse según el formato, restricciones y contexto comercial de cada retailer.",
  },
  {
    q: "¿Se puede actualizar el contenido sin volver a implementarlo desde cero?",
    a: "Sí. Una vez activa la implementación, los cambios de contenido pueden actualizarse de forma ágil sin rehacer todo el desarrollo.",
  },
  {
    q: "¿Omnitok Content sirve para todos los productos?",
    a: "Depende de la estrategia de la marca, pero suele ser especialmente valioso en categorías donde el contenido ayuda a explicar mejor beneficios, diferenciar productos y mejorar conversión.",
  },
  {
    q: "¿Se puede implementar contenido distinto según campañas o temporadas?",
    a: "Sí. Omnitok Content permite adaptar piezas y mensajes según campañas, promociones o necesidades comerciales específicas.",
  },
  {
    q: "¿Puedo medir el rendimiento del contenido implementado?",
    a: "Sí. Omnitok Content puede incluir un dashboard de analítica para monitorear visitas, SKUs más vistos, retailers con mayor tráfico y desempeño general de los inpages.",
  },
  {
    q: "¿Qué necesita entregar la marca para empezar?",
    a: "Depende del proyecto, pero normalmente se requiere material de producto, lineamientos de marca, assets visuales y la información necesaria para construir el contenido enriquecido.",
  },
  {
    q: "¿Cuánto demora una implementación?",
    a: "Depende de la cantidad de productos, retailers y complejidad del contenido, pero el tiempo puede variar según el alcance del proyecto y la aprobación de cada canal.",
  },
  {
    q: "¿Omnitok Content reemplaza la ficha nativa del retailer?",
    a: "No. Omnitok Content complementa la PDP del retailer con capas adicionales de contenido enriquecido para mejorar la experiencia del producto.",
  },
  {
    q: "¿Puedo implementar Omnitok Content en varios retailers al mismo tiempo?",
    a: "Sí. La plataforma está pensada para escalar y operar en múltiples canales según las aprobaciones e integraciones disponibles.",
  },
  {
    q: "¿Qué pasa si un retailer aún no está integrado?",
    a: "Omnitok acompaña a la marca en el proceso para evaluar y gestionar la integración con ese nuevo canal.",
  },
  {
    q: "¿Qué beneficio principal entrega Omnitok Content?",
    a: "Ayuda a transformar páginas de producto estáticas en experiencias más claras, más atractivas y mejor preparadas para convertir.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="min-h-0 lg:min-h-[100dvh] flex flex-col justify-start py-16 lg:py-24 bg-gray-50 box-border w-full">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left — sticky header */}
          <div className="lg:sticky lg:top-32 lg:w-72 flex-shrink-0">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#FF177B" }}>FAQ</p>
            <h6 className="text-3xl font-bold text-gray-900 leading-snug">Preguntas frecuentes</h6>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">Todo lo que necesitas saber sobre Omnitok Content.</p>
            <div className="mt-6 w-12 h-1 rounded-full" style={{ background: "linear-gradient(90deg, #FF177B, #4D4A9D)" }} />
          </div>

          {/* Right — accordion */}
          <div className="flex-1 space-y-3">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="rounded-2xl overflow-hidden shadow-sm">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center gap-4 px-6 py-5 text-left transition-all duration-300"
                    style={{
                      background: isOpen ? "linear-gradient(135deg, #FF177B 0%, #4D4A9D 100%)" : "#ffffff",
                      border: isOpen ? "none" : "1px solid rgba(77,74,157,0.12)",
                    }}
                  >
                    <span className="flex-shrink-0 text-xs font-bold tabular-nums w-6" style={{ color: isOpen ? "rgba(255,255,255,0.7)" : "#FF177B" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`flex-1 text-base font-semibold leading-snug ${isOpen ? "text-white" : "text-gray-900"}`}>
                      {item.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-white" : "text-gray-400"}`}
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[1200px]" : "max-h-0"}`}>
                    <div className="px-6 py-5 bg-white border border-t-0 rounded-b-2xl" style={{ borderColor: "rgba(77,74,157,0.12)" }}>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        <div className="mt-16 lg:mt-20 pt-12 border-t border-gray-200/90 text-center">
          <CombineWithLinks exclude="content" />
        </div>
      </div>
    </section>
  );
}
