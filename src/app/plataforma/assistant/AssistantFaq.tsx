"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CombineWithLinks } from "@/components/sections/ModuleLinks";

const faqs = [
  {
    q: "¿Cómo se integra Omnitok Assistant con las plataformas de retail?",
    a: "Omnitok se integra mediante un script que debe añadir el retail, actualmente ya se encuentra en 150 retailers de LATAM.",
  },
  {
    q: "¿Puedo integrar el widget en múltiples retailers?",
    a: "Sí, el widget de Omnitok Assistant se puede integrar en la cantidad de retailers que necesites. Esta flexibilidad te permite unificar la asistencia al cliente a través de diversos canales de venta.",
  },
  {
    q: "¿Cómo sé desde qué retail me están hablando?",
    a: "Omnitok Assistant utiliza tecnología avanzada que reconoce la URL desde donde se genera la consulta. Esto permite identificar no solo el retail sino también el producto específico que el cliente está consultando, asegurando una respuesta personalizada y precisa.",
  },
  {
    q: "No tengo agentes para atender, ¿es suficiente con el bot?",
    a: "Nuestro bot está integrado con el stock en tiempo real de cada retail y está especializado en ventas, convirtiéndose en un vendedor excepcionalmente eficaz. De hecho, se ha transformado en el mejor vendedor para varias marcas reconocidas en el retail, ofreciendo una solución completa y autónoma para la atención al cliente.",
  },
  {
    q: "¿Cuánto se demora en configurar el bot?",
    a: "La configuración de Omnitok Assistant puede completarse en un periodo de entre 2 a 4 semanas, dependiendo de la complejidad y los requisitos específicos de tu operación. Esto incluye la personalización del bot para adaptarse a las necesidades y el contexto de tu marca.",
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

export default function AssistantFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="min-h-0 lg:min-h-[100dvh] flex flex-col justify-start py-16 lg:py-24 bg-gray-50 box-border w-full">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:sticky lg:top-32 lg:w-72 flex-shrink-0">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#FF177B" }}>
              FAQ
            </p>
            <h2 className="text-3xl font-bold text-gray-900 leading-snug">Preguntas frecuentes</h2>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">Todo lo que necesitas saber sobre Omnitok Assistant.</p>
            <div className="mt-6 w-12 h-1 rounded-full" style={{ background: "linear-gradient(90deg, #FF177B, #4D4A9D)" }} />
          </div>

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
                    <span
                      className="flex-shrink-0 text-xs font-bold tabular-nums w-6"
                      style={{ color: isOpen ? "rgba(255,255,255,0.7)" : "#FF177B" }}
                    >
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
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"}`}
                  >
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
          <CombineWithLinks exclude="assistant" />
        </div>
      </div>
    </section>
  );
}
