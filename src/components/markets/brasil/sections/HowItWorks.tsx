"use client";

import Image from "next/image";
import Link from "next/link";
import { Network, LayoutTemplate, BarChart2, ArrowRight } from "lucide-react";
import { canonicalRoutes } from "@/lib/markets";

const modules = [
  {
    icon: Network,
    label: "Estrutura",
    product: "Omnitok PIM",
    productColor: "#1F87B5",
    href: canonicalRoutes.brasil.connect,
    title: "Gerencie o conteúdo de produto em uma única plataforma.",
    desc: "Centralize e adapte informações de produto para varejistas e marketplaces sem retrabalho.",
    detail: "Cada varejista exige formatos diferentes, validações únicas e fluxos que mudam constantemente. Isso gera retrabalho, erros e uma carga operacional que atrasa a publicação dos seus produtos.\n\nCentralize descrições, especificações e imagens em um catálogo digital único e adapte tudo automaticamente aos requisitos de cada varejista, mantendo suas informações sempre consistentes e atualizadas.",
    bullets: ["Elimine o retrabalho operacional da sua equipe", "Reduza erros nas publicações de produtos", "Atualize centenas de SKUs em segundos", "Um único catálogo para todos os seus canais"],
    position: "left",
  },
  {
    icon: LayoutTemplate,
    label: "Conteúdo",
    product: "Omnitok Content",
    productColor: "#FF177B",
    href: canonicalRoutes.brasil.content,
    title: "Melhore suas páginas de produto com conteúdo enriquecido e consistente.",
    desc: "Leve conteúdo enriquecido a cada varejista para destacar benefícios, atributos e valor de marca.",
    detail: "Muitas páginas de produto não conseguem refletir o valor real nos varejistas. Isso afeta a conversão, gera dúvidas e enfraquece a percepção da marca.\n\nCrie páginas de produto claras, completas e enriquecidas a partir de um catálogo centralizado, mantendo as mesmas informações — descrições, imagens e especificações — em todos os seus varejistas.",
    bullets: ["Aumente a taxa de conversão das suas PDPs", "Publique mais rápido com menos rejeições", "Conteúdo consistente em todos os seus varejistas", "Fortaleça a percepção de marca em cada canal"],
    position: "right",
  },
  {
    icon: BarChart2,
    label: "Performance",
    product: "Omnitok DSA",
    productColor: "#393689",
    href: canonicalRoutes.brasil.dsa,
    title: "Transforme sinais do digital shelf em ação",
    desc: "Monitore preço, estoque, conteúdo e visibilidade antes que impactem suas vendas.",
    detail: "Seus produtos estão em vários canais, mas muitas vezes você não tem visibilidade de como eles aparecem, se estão disponíveis ou como estão posicionados frente à concorrência. Isso impacta diretamente suas vendas.\n\nCentralize seus dados e transforme-os em insights acionáveis. Monitore preços, estoque, conteúdo e posicionamento em tempo real para melhorar sua visibilidade e conversão em cada canal.",
    bullets: ["Detecte problemas antes que impactem suas vendas", "Tome decisões com base em dados reais de cada canal", "Monitore a concorrência em preço e posicionamento", "Otimize sua visibilidade e execução em cada varejista"],
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
          <p className="text-xs font-bold" style={{ color: mod.productColor }}>
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
        Saiba mais <ArrowRight size={12} />
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
            Controle como sua marca aparece nos canais digitais
          </h2>
          <p className="mt-5 text-base sm:text-lg lg:text-xl text-gray-500">
            O Omnitok Suite conecta digital shelf analytics, conteúdo enriquecido e gestão de conteúdo de produto (PIM) para melhorar visibilidade, experiência e conversão.
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
                  <Image src="/Favicon.png" alt="Favicon da Omnitok — plataforma de execução digital" title="Omnitok" width={64} height={64} style={{ width: "64px", height: "64px", objectFit: "contain" }} />
                </div>
                <p className="mb-1 text-2xl font-bold text-white">Omnitok Suite</p>
                <div className="mb-6 flex items-center justify-center gap-1.5">
                  <span className="h-2 w-2 rounded-full" style={{ background: "#7B78CE" }} />
                  <span className="h-2 w-2 rounded-full" style={{ background: "#FF177B" }} />
                  <span className="h-2 w-2 rounded-full" style={{ background: "#6EC1E4" }} />
                </div>
                <div className="mb-5 h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(255,23,123,0.4), transparent)" }} />
                <p className="text-sm leading-relaxed text-white/60">
                  Um sistema conectado que controla como seu produto aparece, converte e compete em cada varejista.
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
            href={canonicalRoutes.brasil.contacto}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white gradient-brand shadow-lg transition-opacity hover:opacity-90"
          >
            Vamos conversar
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
