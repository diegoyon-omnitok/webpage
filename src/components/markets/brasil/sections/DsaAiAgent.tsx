"use client";

import { useState } from "react";
import {
  Sparkles,
  BarChart2,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { canonicalRoutes } from "@/lib/markets";
import DsaAnimatedChat from "./DsaAnimatedChat";

const t = {
  badge: "Agente de IA conectado aos seus dados",
  h2a: "Não só dashboards.",
  h2b: "Inteligência que responde.",
  desc: "O primeiro assistente conversacional do varejo digital conectado a milhões de dados em tempo real. Pergunte sobre sua marca, sua concorrência ou sua execução e receba respostas acionáveis respaldadas por dados verificáveis.",
  tabChat: "Chat conversacional",
  tabAnalysis: "Análise executiva com IA",
  askTitle: "Pergunte o que você precisar",
  askDesc: "O agente de IA do DSA entende contexto de negócio. Você não precisa procurar em dashboards nem exportar dados. Basta perguntar.",
  chatConnected: "Conectado",
  chatPlaceholder: "Pergunte sobre preços, concorrência, cobertura...",
  chatQuestion: "Me dê o panorama completo de preços com win rate e tendências",
  questions: [
    "Por que meu ranking caiu no Retail 1 esta semana?",
    "Resuma as 5 ações mais urgentes para melhorar margem",
    "Qual concorrente mais cresceu no Retail 3 e por quê?",
    "Gere o relatório para o meu QBR com os insights do trimestre",
    "Quais SKUs têm a pior PDP e quanto isso está me custando?",
  ],
  analysisTag: "Análise IA",
  analysisAuto: "Gerada automaticamente",
  analysisHeadline: "Sua marca reforçou a liderança, mas aumentaram rupturas e perdas-chave",
  analysisSummary: "Resumo tático",
  section1: "Panorama do mercado",
  section1Points: [
    "Sua marca lidera com 40,6% no melhor preço",
    "Win rate em 47,3%, 2 pontos acima",
    "Cobertura total do mercado em 72,4%",
  ],
  section2: "Riscos e ações-chave",
  section2Points: [
    "120 produtos com preços >10% acima do melhor",
    "48 novas rupturas em linha branca",
    "Perdas de 12,7% e 18,3% em categorias-chave",
  ],
  actions: [
    { label: "O que mudou", desc: "Win rate subiu para 47,3%, rupturas cresceram para 10,5%" },
    { label: "Por que importa", desc: "Sua marca fica fora da melhor posição em 52,7% do sortimento" },
    { label: "O que fazer", desc: "Repor 48 produtos ausentes e revisar preços de 120 produtos com gap >10%" },
  ],
  cta: "Veja uma demo do agente de IA",
  ctaHref: canonicalRoutes.brasil.contacto,
  kpiLabels: ["Produtos monitorados", "Total de listings", "Cobertura total", "Win rate", "Dispersão mediana"],
};

type TabKey = "chat" | "analysis";

export default function DsaAiAgent() {
  const [activeTab, setActiveTab] = useState<TabKey>("chat");

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
            style={{ background: "linear-gradient(90deg,#FF177B 0%,#4D4A9D 100%)" }}
          >
            <Sparkles size={13} className="text-white" />
            <span className="text-xs font-semibold text-white">{t.badge}</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            {t.h2a}{" "}
            <span className="text-gradient-brand">{t.h2b}</span>
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">{t.desc}</p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-xl border border-gray-200 bg-gray-50 p-1">
            <button type="button" onClick={() => setActiveTab("chat")} className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${activeTab === "chat" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}>
              <MessageSquare size={15} />
              {t.tabChat}
            </button>
            <button type="button" onClick={() => setActiveTab("analysis")} className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${activeTab === "analysis" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}>
              <FileText size={15} />
              {t.tabAnalysis}
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          {activeTab === "chat" ? (
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">{t.askTitle}</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">{t.askDesc}</p>
                <div className="space-y-2.5">
                  {t.questions.map((q) => (
                    <div key={q} className="group flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4 transition-all duration-200 hover:border-primary/20 hover:bg-primary/[0.02] hover:-translate-y-0.5">
                      <MessageSquare size={15} className="text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700 leading-snug">&ldquo;{q}&rdquo;</p>
                    </div>
                  ))}
                </div>
              </div>

              <DsaAnimatedChat />
            </div>
          ) : (
            <div className="rounded-2xl overflow-hidden shadow-card-hover border border-gray-100">
              <div className="px-8 py-6" style={{ background: "linear-gradient(135deg, #211f4b 0%, #2d2a6e 100%)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/20 border border-accent/30">
                    <Sparkles size={11} className="text-accent" />
                    <span className="text-[10px] font-semibold text-white">{t.analysisTag}</span>
                  </div>
                  <span className="text-[10px] text-white/40">{t.analysisAuto}</span>
                </div>
                <h3 className="text-xl font-bold text-white leading-snug">{t.analysisHeadline}</h3>
              </div>

              <div className="p-8 bg-white">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    { icon: BarChart2, color: "#4D4A9D", title: t.section1, points: t.section1Points },
                    { icon: AlertTriangle, color: "#FF177B", title: t.section2, points: t.section2Points },
                  ].map((section) => {
                    const Icon = section.icon;
                    return (
                      <div key={section.title} className="rounded-xl border border-gray-100 p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${section.color}15` }}>
                            <Icon size={16} style={{ color: section.color }} />
                          </div>
                          <h4 className="text-sm font-bold text-gray-900">{section.title}</h4>
                        </div>
                        <ul className="space-y-2">
                          {section.points.map((point) => (
                            <li key={point} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: section.color }} />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">{t.analysisSummary}</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {t.actions.map((action, i) => {
                      const colors = ["#FF177B", "#4D4A9D", "#10B981"];
                      const icons = [TrendingUp, CheckCircle2, ArrowRight];
                      const Icon = icons[i];
                      return (
                        <div key={action.label} className="rounded-xl p-4" style={{ background: `${colors[i]}08`, borderLeft: `3px solid ${colors[i]}` }}>
                          <div className="flex items-center gap-2 mb-2">
                            <Icon size={14} style={{ color: colors[i] }} />
                            <p className="text-xs font-bold uppercase tracking-wider" style={{ color: colors[i] }}>{action.label}</p>
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed">{action.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <Link href={t.ctaHref} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-brand hover:opacity-90 transition-opacity shadow-lg">
            {t.cta}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
