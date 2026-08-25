"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CombineWithLinks } from "@/components/markets/brasil/sections/ModuleLinks";

const faqs = [
  {
    q: "O que é o Omnitok PIM?",
    a: "O Omnitok PIM é o módulo que centraliza as informações de produto e as adapta aos formatos que cada varejista ou canal digital precisa.",
  },
  {
    q: "Que problema o Omnitok PIM resolve?",
    a: "Ele resolve o problema de ter informações dispersas, formatos diferentes por canal e processos manuais lentos para preparar e distribuir dados de produto.",
  },
  {
    q: "Que tipo de informação pode ser gerenciada com o Omnitok PIM?",
    a: "Ele permite centralizar descrições, atributos, imagens e outros dados de produto para prepará-los e distribuí-los a diferentes canais.",
  },
  {
    q: "O Omnitok PIM permite formatos diferentes para cada varejista?",
    a: "Sim. No Omnitok PIM você pode configurar diferentes formatos de exportação conforme os requisitos de cada varejista.",
  },
  {
    q: "É possível conectar via API?",
    a: "Sim. O Omnitok PIM pode ser integrado via API para facilitar o fluxo de informações com outros sistemas.",
  },
  {
    q: "Se eu alterar um produto no Omnitok PIM, ele é atualizado automaticamente no varejo?",
    a: "Não. O Omnitok PIM gera o formato de exportação pronto para subir ao varejista, mas não realiza a alteração automaticamente no canal por padrão.",
  },
  {
    q: "Posso adaptar as informações para cada varejista?",
    a: "Sim. Você pode trabalhar uma base central de informações e ajustá-la conforme a estrutura, o formato ou os requisitos específicos de cada canal.",
  },
  {
    q: "O Omnitok PIM serve só para varejistas ou também para marketplaces?",
    a: "Ele pode se adaptar a diferentes canais digitais, incluindo varejistas e marketplaces, conforme a lógica de carga ou integração de cada um.",
  },
  {
    q: "O Omnitok PIM funciona como uma fonte central de informações de produto?",
    a: "Sim. Um dos seus principais benefícios é funcionar como uma base central para organizar, gerenciar e preparar informações de produto antes de distribuí-las.",
  },
  {
    q: "Ele ajuda a reduzir trabalho manual?",
    a: "Sim. O Omnitok PIM reduz a duplicidade de trabalho, melhora a organização operacional e acelera a preparação de informações para múltiplos canais.",
  },
  {
    q: "É possível gerenciar muitos SKUs ao mesmo tempo?",
    a: "Sim. O Omnitok PIM foi pensado para escalar e facilitar a gestão de catálogos amplos.",
  },
  {
    q: "Quanto tempo leva a implementação?",
    a: "Depende da quantidade de SKUs, canais e integrações envolvidas, mas normalmente a implementação leva entre 2 e 4 semanas.",
  },
  {
    q: "O Omnitok PIM substitui o varejista?",
    a: "Não. O Omnitok PIM ajuda a estruturar e preparar melhor as informações, mas a publicação final depende do processo definido com cada varejista.",
  },
  {
    q: "Que valor ele agrega em relação a trabalhar com arquivos manuais?",
    a: "Ele traz organização, velocidade, consistência e menos erros na hora de preparar e distribuir informações de produto em vários canais.",
  },
  {
    q: "O Omnitok PIM pode conviver com outros sistemas internos?",
    a: "Sim. Dependendo do caso, ele pode ser integrado a sistemas existentes e complementar a operação atual sem obrigar a substituir toda a infraestrutura.",
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
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#1F87B5" }}>FAQ</p>
            <h2 className="text-3xl font-bold text-gray-900 leading-snug">Perguntas frequentes</h2>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">Tudo o que você precisa saber sobre o Omnitok PIM.</p>
            <div className="mt-6 w-12 h-1 rounded-full" style={{ background: "linear-gradient(90deg, #6EC1E4, #4D4A9D)" }} />
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
                      background: isOpen ? "linear-gradient(135deg, #1F87B5 0%, #4D4A9D 100%)" : "#ffffff",
                      border: isOpen ? "none" : "1px solid rgba(77,74,157,0.12)",
                    }}
                  >
                    <span className="flex-shrink-0 text-xs font-bold tabular-nums w-6" style={{ color: isOpen ? "rgba(255,255,255,0.7)" : "#1F87B5" }}>
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
