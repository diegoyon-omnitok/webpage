"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CombineWithLinks } from "@/components/sections/ModuleLinks";

const faqs = [
  {
    q: "¿Con qué frecuencia monitorean los sitios?",
    a: "Depende del canal y del caso de uso. En general, el monitoreo se realiza una vez al día, aunque en algunos escenarios puede ejecutarse más de una vez por día.",
  },
  {
    q: "¿La homologación de productos la hacen ustedes?",
    a: "Sí. Omnitok realiza la homologación de productos entre distintos canales combinando un motor de IA con validación humana, logrando una precisión superior al 99%.",
  },
  {
    q: "¿Cuánto demora la implementación?",
    a: "Depende de la cantidad de canales y SKUs a monitorear, pero en general la implementación toma entre 2 y 4 semanas.",
  },
  {
    q: "¿Qué variables puede monitorear Omnitok DSA?",
    a: "Omnitok DSA permite monitorear variables como precio, disponibilidad, posicionamiento, calidad de contenido, share of search y cumplimiento de atributos, según el canal y la categoría.",
  },
  {
    q: "¿Pueden monitorear retailers y marketplaces al mismo tiempo?",
    a: "Sí. Omnitok DSA está diseñado para entregar visibilidad sobre distintos canales digitales, incluyendo retailers y marketplaces, en una sola vista de trabajo.",
  },
  {
    q: "¿Los datos se pueden ver por retailer, marca o SKU?",
    a: "Sí. La información se puede segmentar según la estructura del proyecto, permitiendo analizar resultados por canal, marca, categoría o SKU.",
  },
  {
    q: "¿Omnitok DSA hace cambios automáticos en los canales?",
    a: "No. Omnitok DSA monitorea y detecta oportunidades o desviaciones, pero no modifica automáticamente la información publicada en retailers o marketplaces.",
  },
  {
    q: "¿Qué tan confiable es la comparación con la competencia?",
    a: "La calidad del análisis depende de una correcta homologación de productos. Por eso combinamos IA y validación humana para asegurar comparaciones consistentes y útiles para la toma de decisiones.",
  },
  {
    q: "¿Sirve para detectar problemas de ejecución digital?",
    a: "Sí. Omnitok DSA ayuda a detectar problemas como quiebres de stock, diferencias de precio, contenido incompleto, baja visibilidad o inconsistencias entre canales.",
  },
  {
    q: "¿Puedo usar Omnitok DSA aunque venda en varios países?",
    a: "Sí. Omnitok puede operar en múltiples mercados y adaptar el monitoreo según los canales y necesidades de cada país.",
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

export default function AnalyticsFaq() {
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
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">Todo lo que necesitas saber sobre Digital Shelf Analytics.</p>
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
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[800px]" : "max-h-0"}`}>
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
          <CombineWithLinks exclude="digital-shelf-analytics" />
        </div>
      </div>
    </section>
  );
}
