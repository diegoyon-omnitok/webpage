"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CombineWithLinks } from "@/components/markets/brasil/sections/ModuleLinks";

const faqs = [
  {
    q: "O que é o Omnitok Digital Shelf Analytics?",
    a: "O Omnitok DSA é o módulo de monitoramento e visibilidade da execução digital que permite às marcas controlar como seus produtos são executados em varejistas e marketplaces.",
  },
  {
    q: "Quais variáveis o Omnitok DSA pode monitorar?",
    a: "O Omnitok DSA permite monitorar variáveis como preço, disponibilidade, posicionamento, qualidade do conteúdo, share of search e conformidade de atributos, conforme o canal e a categoria.",
  },
  {
    q: "Com que frequência os sites são monitorados?",
    a: "Depende do canal e do caso de uso. Em geral, o monitoramento é realizado uma vez por dia, embora em alguns cenários possa ser executado mais de uma vez por dia.",
  },
  {
    q: "É possível monitorar varejistas e marketplaces ao mesmo tempo?",
    a: "Sim. O Omnitok DSA foi projetado para entregar visibilidade sobre diferentes canais digitais, incluindo varejistas e marketplaces, em uma única visão de trabalho.",
  },
  {
    q: "Os dados podem ser vistos por varejista, marca ou SKU?",
    a: "Sim. As informações podem ser segmentadas conforme a estrutura do projeto, permitindo analisar resultados por canal, marca, categoria ou SKU.",
  },
  {
    q: "A homologação de produtos é feita por vocês?",
    a: "Sim. A Omnitok realiza a homologação de produtos entre diferentes canais combinando um motor de IA com validação humana, alcançando uma precisão superior a 99%.",
  },
  {
    q: "Quão confiável é a comparação com a concorrência?",
    a: "A qualidade da análise depende de uma homologação de produtos correta. Por isso combinamos IA e validação humana para garantir comparações consistentes e úteis para a tomada de decisões.",
  },
  {
    q: "Serve para detectar problemas de execução digital?",
    a: "Sim. O Omnitok DSA ajuda a detectar problemas como rupturas de estoque, diferenças de preço, conteúdo incompleto, baixa visibilidade ou inconsistências entre canais.",
  },
  {
    q: "O Omnitok DSA faz alterações automáticas nos canais?",
    a: "Não. O Omnitok DSA monitora, detecta oportunidades ou desvios e ajuda a priorizar ações, mas não modifica automaticamente as informações publicadas em varejistas ou marketplaces.",
  },
  {
    q: "Quanto tempo leva a implementação?",
    a: "Depende da quantidade de canais e SKUs a monitorar, mas em geral a implementação leva entre 2 e 4 semanas.",
  },
  {
    q: "Posso usar o Omnitok DSA mesmo vendendo em vários países?",
    a: "Sim. A Omnitok pode operar em múltiplos mercados e adaptar o monitoramento conforme os canais e as necessidades de cada país.",
  },
  {
    q: "O Omnitok DSA inclui inteligência artificial?",
    a: "Sim. O Omnitok DSA incorpora um agente de IA conectado a milhões de pontos de dados em tempo real para ajudar você a interpretar as informações e transformá-las em insights acionáveis.",
  },
  {
    q: "O que exatamente o agente de IA faz dentro do DSA?",
    a: "Ele permite que você faça perguntas sobre sua marca, sua concorrência ou sua execução digital e receba respostas resumidas, acionáveis e respaldadas por dados verificáveis.",
  },
  {
    q: "Que tipo de perguntas posso fazer ao agente de IA?",
    a: "Você pode perguntar, por exemplo, sobre mudanças de ranking, oportunidades de melhoria de margem, concorrentes que estão crescendo mais rápido, principais insights do trimestre ou quais SKUs apresentam os piores problemas de conteúdo ou execução.",
  },
  {
    q: "Que valor a IA agrega em relação a um dashboard tradicional?",
    a: "Enquanto um dashboard mostra dados, o agente de IA ajuda a interpretá-los, resumi-los e transformá-los em conclusões e prioridades concretas. Isso reduz o tempo de análise e acelera a ação.",
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
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#393689" }}>
              FAQ
            </p>
            <h2 className="text-3xl font-bold text-gray-900 leading-snug">Perguntas frequentes</h2>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">Tudo o que você precisa saber sobre o Digital Shelf Analytics.</p>
            <div className="mt-6 w-12 h-1 rounded-full" style={{ background: "linear-gradient(90deg, #393689, #FF177B)" }} />
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
                      background: isOpen ? "linear-gradient(135deg, #393689 0%, #4D4A9D 100%)" : "#ffffff",
                      border: isOpen ? "none" : "1px solid rgba(77,74,157,0.12)",
                    }}
                  >
                    <span
                      className="flex-shrink-0 text-xs font-bold tabular-nums w-6"
                      style={{ color: isOpen ? "rgba(255,255,255,0.7)" : "#393689" }}
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
