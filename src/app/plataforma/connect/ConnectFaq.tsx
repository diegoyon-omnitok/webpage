"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CombineWithLinks } from "@/components/sections/ModuleLinks";

const faqs = [
  {
    q: "¿Qué es Omnitok Connect?",
    a: "Omnitok Connect es el módulo que centraliza la información de producto y la adapta a los formatos que necesita cada retailer o canal digital.",
  },
  {
    q: "¿Qué problema resuelve Omnitok Connect?",
    a: "Resuelve el problema de tener información dispersa, formatos distintos por canal y procesos manuales lentos para preparar y distribuir datos de producto.",
  },
  {
    q: "¿Qué tipo de información se puede gestionar con Omnitok Connect?",
    a: "Permite centralizar descripciones, atributos, imágenes y otros datos de producto para prepararlos y distribuirlos a distintos canales.",
  },
  {
    q: "¿Omnitok Connect permite diferentes formatos para cada retailer?",
    a: "Sí. En Omnitok Connect puedes configurar distintos formatos de exportación según los requerimientos de cada retailer.",
  },
  {
    q: "¿Se puede conectar mediante API?",
    a: "Sí. Omnitok Connect puede integrarse mediante API para facilitar el flujo de información con otros sistemas.",
  },
  {
    q: "¿Si cambio un producto en Omnitok Connect, se actualiza automáticamente en el retail?",
    a: "No. Omnitok Connect genera el formato de exportación listo para subir al retailer, pero no realiza el cambio automáticamente en el canal por defecto.",
  },
  {
    q: "¿Puedo adaptar la información según cada retailer?",
    a: "Sí. Puedes trabajar una base central de información y ajustarla según la estructura, formato o requerimientos específicos de cada canal.",
  },
  {
    q: "¿Omnitok Connect sirve solo para retailers o también para marketplaces?",
    a: "Puede adaptarse a distintos canales digitales, incluyendo retailers y marketplaces, según la lógica de carga o integración de cada uno.",
  },
  {
    q: "¿Omnitok Connect funciona como una fuente central de información de producto?",
    a: "Sí. Uno de sus principales beneficios es funcionar como una base central para ordenar, gestionar y preparar información de producto antes de distribuirla.",
  },
  {
    q: "¿Ayuda a reducir trabajo manual?",
    a: "Sí. Omnitok Connect reduce duplicidad de trabajo, mejora el orden operativo y acelera la preparación de información para múltiples canales.",
  },
  {
    q: "¿Se pueden manejar muchos SKUs al mismo tiempo?",
    a: "Sí. Omnitok Connect está pensado para escalar y facilitar la gestión de catálogos amplios.",
  },
  {
    q: "¿Cuánto demora la implementación?",
    a: "Depende de la cantidad de SKUs, canales e integraciones involucradas, pero normalmente la implementación toma entre 2 y 4 semanas.",
  },
  {
    q: "¿Omnitok Connect reemplaza al retailer?",
    a: "No. Omnitok Connect ayuda a estructurar y preparar mejor la información, pero la publicación final depende del proceso definido con cada retailer.",
  },
  {
    q: "¿Qué valor aporta frente a trabajar con archivos manuales?",
    a: "Aporta orden, velocidad, consistencia y menos errores al momento de preparar y distribuir información de producto en varios canales.",
  },
  {
    q: "¿Omnitok Connect puede convivir con otros sistemas internos?",
    a: "Sí. Dependiendo del caso, puede integrarse con sistemas existentes y complementar la operación actual sin obligar a reemplazar toda la infraestructura.",
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

export default function ConnectFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="min-h-0 lg:min-h-[100dvh] flex flex-col justify-start py-16 lg:py-24 bg-gray-50 box-border w-full">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left — sticky header */}
          <div className="lg:sticky lg:top-32 lg:w-72 flex-shrink-0">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#FF177B" }}>FAQ</p>
            <h2 className="text-3xl font-bold text-gray-900 leading-snug">Preguntas frecuentes</h2>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">Todo lo que necesitas saber sobre Omnitok Connect.</p>
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
          <CombineWithLinks exclude="connect" />
        </div>
      </div>
    </section>
  );
}
