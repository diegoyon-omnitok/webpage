"use client";

import { useState } from "react";
import { Sparkles, Send, ArrowRight, MessageSquare, FileText, BarChart2, AlertTriangle, TrendingUp, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { canonicalRoutes } from "@/lib/markets";

const questions = [
  "Which sellers have the most MAP violations this month?",
  "Show me all unresolved violations older than 7 days",
  "What is the compliance trend for the last quarter?",
  "Generate a report for my QBR with top enforcement insights",
  "Which product has the highest violation rate and on which channel?",
];

type TabKey = "chat" | "analysis";

export default function MapAiAgent() {
  const [activeTab, setActiveTab] = useState<TabKey>("chat");

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5" style={{ background: "linear-gradient(90deg,#FF177B 0%,#4D4A9D 100%)" }}>
            <Sparkles size={13} className="text-white" />
            <span className="text-xs font-semibold text-white">AI agent for MAP compliance</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Not just alerts. <span className="text-gradient-brand">Intelligence that enforces.</span>
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            Ask the AI about violations, seller behavior, compliance trends or enforcement effectiveness. Get answers backed by real monitoring data, not dashboards you have to interpret yourself.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-xl border border-gray-200 bg-gray-50 p-1">
            <button type="button" onClick={() => setActiveTab("chat")} className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${activeTab === "chat" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}>
              <MessageSquare size={15} /> Conversational chat
            </button>
            <button type="button" onClick={() => setActiveTab("analysis")} className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${activeTab === "analysis" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}>
              <FileText size={15} /> AI compliance report
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          {activeTab === "chat" ? (
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Ask anything about MAP</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">The AI agent understands your MAP policy, seller history and violation patterns. No need to dig through spreadsheets. Just ask.</p>
                <div className="space-y-2.5">
                  {questions.map((q) => (
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
                    <span className="text-sm font-semibold text-white">MAP Compliance Chat</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] text-white/50">Connected</span>
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <div className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl rounded-tr-md px-4 py-3" style={{ background: "linear-gradient(135deg, #FF177B 0%, #4D4A9D 100%)" }}>
                      <p className="text-sm text-white leading-relaxed">Which sellers have the most violations this month?</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[95%] rounded-2xl rounded-tl-md bg-white/10 backdrop-blur-sm border border-white/10 px-5 py-4">
                      <p className="text-sm font-semibold text-white mb-1">Top violators, April 2026</p>
                      <p className="text-[11px] text-white/50 mb-3">Based on confirmed MAP violations</p>
                      <div className="space-y-2">
                        {[
                          { label: "ElectroDeals (Amazon)", value: "18 violations" },
                          { label: "TechBargains (Walmart)", value: "8 violations" },
                          { label: "SoundOutlet (Amazon)", value: "6 violations" },
                          { label: "Avg. price gap", value: "-17.2%" },
                          { label: "Repeat offenders (60d+)", value: "3 sellers" },
                        ].map((kpi) => (
                          <div key={kpi.label} className="flex items-center justify-between text-sm">
                            <span className="text-white/70">{kpi.label}</span>
                            <span className="font-bold text-white tabular-nums">{kpi.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-4">
                  <div className="flex items-center gap-2 rounded-xl bg-white/10 border border-white/10 px-4 py-3">
                    <p className="flex-1 text-sm text-white/40">Ask about violations, sellers, compliance...</p>
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
                    <span className="text-[10px] font-semibold text-white">AI Analysis</span>
                  </div>
                  <span className="text-[10px] text-white/40">Auto-generated</span>
                </div>
                <h3 className="text-xl font-bold text-white leading-snug">MAP compliance improved, but 3 repeat offenders require escalation</h3>
              </div>
              <div className="p-8 bg-white">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    { icon: BarChart2, color: "#4D4A9D", title: "Compliance overview", points: ["94.2% overall MAP compliance rate", "38 violations resolved in last 30 days", "Average resolution time improved to 2.4 days"] },
                    { icon: AlertTriangle, color: "#FF177B", title: "Risks requiring action", points: ["3 repeat offenders with 60+ days non-compliant", "eBay channel showing 2x more violations than Amazon", "Wireless Earbuds Pro is most violated product (18 cases)"] },
                  ].map((section) => {
                    const Icon = section.icon;
                    return (
                      <div key={section.title} className="rounded-xl border border-gray-100 p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${section.color}15` }}><Icon size={16} style={{ color: section.color }} /></div>
                          <h4 className="text-sm font-bold text-gray-900">{section.title}</h4>
                        </div>
                        <ul className="space-y-2">{section.points.map((p) => <li key={p} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed"><span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: section.color }} />{p}</li>)}</ul>
                      </div>
                    );
                  })}
                </div>
                <div className="border-t border-gray-100 pt-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Tactical summary</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { label: "What changed", desc: "Compliance up to 94.2%, but repeat offenders persist", color: "#FF177B" },
                      { label: "Why it matters", desc: "3 sellers account for 67% of violations, eroding margin", color: "#4D4A9D" },
                      { label: "What to do", desc: "Escalate ElectroDeals and TechBargains, increase eBay monitoring", color: "#10B981" },
                    ].map((a, i) => {
                      const icons = [TrendingUp, CheckCircle2, ArrowRight];
                      const Icon = icons[i];
                      return (
                        <div key={a.label} className="rounded-xl p-4" style={{ background: `${a.color}08`, borderLeft: `3px solid ${a.color}` }}>
                          <div className="flex items-center gap-2 mb-2"><Icon size={14} style={{ color: a.color }} /><p className="text-xs font-bold uppercase tracking-wider" style={{ color: a.color }}>{a.label}</p></div>
                          <p className="text-sm text-gray-600 leading-relaxed">{a.desc}</p>
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
          <Link href={canonicalRoutes.usa.contact} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-brand hover:opacity-90 transition-opacity shadow-lg">
            See a demo of the MAP AI agent <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
