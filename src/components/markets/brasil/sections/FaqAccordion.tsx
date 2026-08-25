"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CombineWithLinks } from "@/components/markets/brasil/sections/ModuleLinks";

const faqs = [
  {
    q: "As implementações são automáticas em cada varejista?",
    a: "Depende. O Omnitok Content já está integrado a mais de 150 varejistas, mas cada varejista precisa aprovar a marca para habilitar a implementação do conteúdo.",
  },
  {
    q: "Se eu quiser fazer uma alteração, quanto tempo leva para ser refletida?",
    a: "Uma vez publicada, a alteração é refletida de forma imediata.",
  },
  {
    q: "A Omnitok também cuida do design?",
    a: "Sim. Contamos com um time de designers que, com base no material entregue pela marca, desenvolve os conteúdos para cada produto.",
  },
  {
    q: "Se eu quiser integrar um novo canal, como funciona?",
    a: "A marca precisa coordenar a aprovação com o varejista ou marketplace, e a Omnitok acompanha todo o processo para realizar a integração.",
  },
  {
    q: "Implementar a Omnitok tem custo para o varejo?",
    a: "Não. A implementação da Omnitok não tem custo para o varejista.",
  },
  {
    q: "Que tipo de conteúdo pode ser implementado com o Omnitok Content?",
    a: "O Omnitok Content permite implementar diferentes formatos, como banners de marca, imagens lifestyle, vídeos, tabelas comparativas, hotspots interativos e outros módulos enriquecidos dentro da PDP.",
  },
  {
    q: "É possível adaptar o conteúdo para cada varejista?",
    a: "Sim. O conteúdo pode ser adaptado conforme o formato, as restrições e o contexto comercial de cada varejista.",
  },
  {
    q: "É possível atualizar o conteúdo sem implementá-lo de novo do zero?",
    a: "Sim. Uma vez ativa a implementação, as alterações de conteúdo podem ser atualizadas de forma ágil sem refazer todo o desenvolvimento.",
  },
  {
    q: "O Omnitok Content serve para todos os produtos?",
    a: "Depende da estratégia da marca, mas costuma ser especialmente valioso em categorias onde o conteúdo ajuda a explicar melhor benefícios, diferenciar produtos e melhorar a conversão.",
  },
  {
    q: "É possível implementar conteúdos diferentes por campanhas ou temporadas?",
    a: "Sim. O Omnitok Content permite adaptar peças e mensagens conforme campanhas, promoções ou necessidades comerciais específicas.",
  },
  {
    q: "Posso medir o desempenho do conteúdo implementado?",
    a: "Sim. O Omnitok Content pode incluir um dashboard de análise para monitorar visitas, SKUs mais vistos, varejistas com maior tráfego e o desempenho geral dos inpages.",
  },
  {
    q: "O que a marca precisa entregar para começar?",
    a: "Depende do projeto, mas normalmente são necessários material de produto, diretrizes de marca, assets visuais e as informações necessárias para construir o conteúdo enriquecido.",
  },
  {
    q: "Quanto tempo leva uma implementação?",
    a: "Depende da quantidade de produtos, varejistas e da complexidade do conteúdo, mas o prazo pode variar conforme o escopo do projeto e a aprovação de cada canal.",
  },
  {
    q: "O Omnitok Content substitui a página nativa do varejista?",
    a: "Não. O Omnitok Content complementa a PDP do varejista com camadas adicionais de conteúdo enriquecido para melhorar a experiência do produto.",
  },
  {
    q: "Posso implementar o Omnitok Content em vários varejistas ao mesmo tempo?",
    a: "Sim. A plataforma foi pensada para escalar e operar em múltiplos canais conforme as aprovações e integrações disponíveis.",
  },
  {
    q: "O que acontece se um varejista ainda não estiver integrado?",
    a: "A Omnitok acompanha a marca no processo para avaliar e gerenciar a integração com esse novo canal.",
  },
  {
    q: "Qual é o principal benefício que o Omnitok Content entrega?",
    a: "Ele ajuda a transformar páginas de produto estáticas em experiências mais claras, mais atraentes e mais bem preparadas para converter.",
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
            <h2 className="text-3xl font-bold text-gray-900 leading-snug">Perguntas frequentes</h2>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">Tudo o que você precisa saber sobre o Omnitok Content.</p>
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
