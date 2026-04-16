"use client";

import { useState } from "react";
import {
  Sparkles,
  Send,
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

type Locale = "es" | "en";

const copy = {
  es: {
    badge: "Agente de IA conectado a tus datos",
    h2a: "No solo dashboards.",
    h2b: "Inteligencia que responde.",
    desc: "El primer asistente conversacional del retail digital conectado a millones de datos en tiempo real. Pregunta sobre tu marca, tu competencia o tu ejecución y obtén respuestas accionables respaldadas por datos verificables.",
    tabChat: "Chat conversacional",
    tabAnalysis: "Análisis ejecutivo IA",
    askTitle: "Pregunta lo que necesites",
    askDesc: "El agente de IA de DSA entiende contexto de negocio. No necesitas buscar en dashboards ni exportar datos. Solo pregunta.",
    chatConnected: "Conectado",
    chatPlaceholder: "Pregunta sobre precios, competencia, cobertura...",
    chatQuestion: "Dame el panorama completo de precios con win rate y tendencias",
    questions: [
      "¿Por qué bajó mi ranking en Retail 1 esta semana?",
      "Resúmeme las 5 acciones más urgentes para mejorar margen",
      "¿Qué competidor creció más en Retail 3 y por qué?",
      "Genera el reporte para mi QBR con los insights del trimestre",
      "¿Qué SKUs tienen peor PDP y cuánto me está costando?",
    ],
    analysisTag: "Análisis IA",
    analysisAuto: "Generado automáticamente",
    analysisHeadline: "Tu marca reforzó liderazgo, pero aumentaron ausencias y pérdidas clave",
    analysisSummary: "Resumen táctico",
    section1: "Panorama del mercado",
    section1Points: [
      "Tu marca lidera con 40.6% al mejor precio",
      "Tasa de victoria a 47.3%, 2 puntos arriba",
      "Cobertura total del mercado en 72.4%",
    ],
    section2: "Riesgos y acciones clave",
    section2Points: [
      "120 productos con precios >10% por encima del mejor",
      "48 ausencias nuevas en línea blanca",
      "Pérdidas de 12.7% y 18.3% en categorías clave",
    ],
    actions: [
      { label: "Qué cambió", desc: "Tasa de victoria subió a 47.3%, ausencias crecieron a 10.5%" },
      { label: "Por qué importa", desc: "Tu marca queda fuera de la mejor posición en 52.7% del surtido" },
      { label: "Qué hacer", desc: "Reponer 48 ausentes y revisar precios de 120 productos con brecha >10%" },
    ],
    cta: "Ver una demo del agente IA",
    ctaHref: canonicalRoutes.latam.contacto,
    kpiLabels: ["Productos monitoreados", "Total de listings", "Cobertura total", "Win rate", "Dispersión mediana"],
  },
  en: {
    badge: "AI agent connected to your data",
    h2a: "Not just dashboards.",
    h2b: "Intelligence that answers.",
    desc: "The first conversational assistant for digital retail connected to millions of real-time data points. Ask about your brand, your competitors or your execution and get actionable answers backed by verifiable data.",
    tabChat: "Conversational chat",
    tabAnalysis: "AI executive analysis",
    askTitle: "Ask anything you need",
    askDesc: "The DSA AI agent understands business context. No need to dig through dashboards or export data. Just ask.",
    chatConnected: "Connected",
    chatPlaceholder: "Ask about pricing, competitors, coverage...",
    chatQuestion: "Give me the full pricing overview with win rate and trends",
    questions: [
      "Why did my ranking drop in Retail 1 this week?",
      "Summarize the 5 most urgent actions to improve margin",
      "Which competitor grew the most in Retail 3 and why?",
      "Generate the report for my QBR with this quarter's insights",
      "Which SKUs have the worst PDP and how much is it costing me?",
    ],
    analysisTag: "AI Analysis",
    analysisAuto: "Auto-generated",
    analysisHeadline: "Your brand strengthened leadership, but stockouts and losses increased",
    analysisSummary: "Tactical summary",
    section1: "Market overview",
    section1Points: [
      "Your brand leads with 40.6% at the best price",
      "Win rate at 47.3%, 2 points above average",
      "Total market coverage at 72.4%",
    ],
    section2: "Risks and key actions",
    section2Points: [
      "120 products priced >10% above the best price",
      "48 new stockouts in home appliances",
      "Losses of 12.7% and 18.3% in key categories",
    ],
    actions: [
      { label: "What changed", desc: "Win rate rose to 47.3%, stockouts grew to 10.5%" },
      { label: "Why it matters", desc: "Your brand is out of the best position in 52.7% of the assortment" },
      { label: "What to do", desc: "Restock 48 absent products and review pricing on 120 items with >10% gap" },
    ],
    cta: "See a demo of the AI agent",
    ctaHref: canonicalRoutes.usa.contact,
    kpiLabels: ["Products monitored", "Total listings", "Total coverage", "Win rate", "Median spread"],
  },
};

const kpiValues = ["820", "4,260", "72.4%", "47.3%", "18.5%"];

type TabKey = "chat" | "analysis";

export default function DsaAiAgent({ locale = "es" }: { locale?: Locale }) {
  const [activeTab, setActiveTab] = useState<TabKey>("chat");
  const t = copy[locale];

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

              <div className="rounded-2xl overflow-hidden shadow-card-hover" style={{ background: "linear-gradient(135deg, #211f4b 0%, #2d2a6e 100%)" }}>
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,23,123,0.2)" }}>
                      <Sparkles size={14} className="text-accent" />
                    </div>
                    <span className="text-sm font-semibold text-white">Pricing-Retail Chat</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] text-white/50">{t.chatConnected}</span>
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <div className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl rounded-tr-md px-4 py-3" style={{ background: "linear-gradient(135deg, #FF177B 0%, #4D4A9D 100%)" }}>
                      <p className="text-sm text-white leading-relaxed">{t.chatQuestion}</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[95%] rounded-2xl rounded-tl-md bg-white/10 backdrop-blur-sm border border-white/10 px-5 py-4">
                      <p className="text-sm font-semibold text-white mb-1">Pricing Overview, Retail 1</p>
                      <p className="text-[11px] text-white/50 mb-3">Latest snapshot</p>
                      <div className="space-y-2">
                        {t.kpiLabels.map((label, i) => (
                          <div key={label} className="flex items-center justify-between text-sm">
                            <span className="text-white/70">{label}</span>
                            <span className="font-bold text-white tabular-nums">{kpiValues[i]}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-4">
                  <div className="flex items-center gap-2 rounded-xl bg-white/10 border border-white/10 px-4 py-3">
                    <p className="flex-1 text-sm text-white/40">{t.chatPlaceholder}</p>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #FF177B 0%, #4D4A9D 100%)" }}>
                      <Send size={14} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
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
