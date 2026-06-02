"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles, Send } from "lucide-react";

type Locale = "es" | "en";

type ChatResponse = {
  title: string;
  subtitle: string;
  kpis: { label: string; value: string }[];
};

type ChatConversation = {
  question: string;
  response: ChatResponse;
};

const conversations: Record<Locale, ChatConversation[]> = {
  es: [
    {
      question: "Dame el panorama completo de precios con win rate y tendencias",
      response: {
        title: "Panorama de precios, Retail 1",
        subtitle: "Snapshot más reciente",
        kpis: [
          { label: "Productos monitoreados", value: "820" },
          { label: "Total de listings", value: "4,260" },
          { label: "Cobertura total", value: "72.4%" },
          { label: "Win rate", value: "47.3%" },
          { label: "Dispersión mediana", value: "18.5%" },
        ],
      },
    },
    {
      question: "¿Qué competidor creció más en Retail 3 y por qué?",
      response: {
        title: "Análisis competitivo, Retail 3",
        subtitle: "Últimas 4 semanas",
        kpis: [
          { label: "Competidor que más creció", value: "Marca B" },
          { label: "Crecimiento en participación", value: "+8.2%" },
          { label: "Razón principal", value: "Ads + Precio" },
          { label: "Tu marca vs hace 30d", value: "-3.1%" },
          { label: "Categorías afectadas", value: "3 de 5" },
        ],
      },
    },
    {
      question: "Resúmeme las 5 acciones más prioritarias",
      response: {
        title: "Acciones prioritarias detectadas",
        subtitle: "Ordenadas por impacto estimado",
        kpis: [
          { label: "1. Revisar precios de productos", value: "120 SKUs" },
          { label: "2. Optimizar las siguientes PDPs", value: "22 SKUs" },
          { label: "3. Revisar las siguientes keywords", value: "18 KWs" },
          { label: "4. Reponer productos ausentes", value: "48 SKUs" },
          { label: "5. Alertar a retailer por contenido", value: "15 casos" },
        ],
      },
    },
  ],
  en: [
    {
      question: "Give me the full pricing overview with win rate and trends",
      response: {
        title: "Pricing Overview, Retail 1",
        subtitle: "Latest snapshot",
        kpis: [
          { label: "Products monitored", value: "820" },
          { label: "Total listings", value: "4,260" },
          { label: "Total coverage", value: "72.4%" },
          { label: "Win rate", value: "47.3%" },
          { label: "Median spread", value: "18.5%" },
        ],
      },
    },
    {
      question: "Which competitor grew the most in Retail 3 and why?",
      response: {
        title: "Competitive analysis, Retail 3",
        subtitle: "Last 4 weeks",
        kpis: [
          { label: "Fastest-growing competitor", value: "Brand B" },
          { label: "Share growth", value: "+8.2%" },
          { label: "Main reason", value: "Ads + Pricing" },
          { label: "Your brand vs 30d", value: "-3.1%" },
          { label: "Affected categories", value: "3 of 5" },
        ],
      },
    },
    {
      question: "Summarize the 5 most priority actions",
      response: {
        title: "Top priority actions detected",
        subtitle: "Ordered by estimated impact",
        kpis: [
          { label: "1. Review prices of products", value: "120 SKUs" },
          { label: "2. Optimize the following PDPs", value: "22 SKUs" },
          { label: "3. Review the following keywords", value: "18 KWs" },
          { label: "4. Restock absent products", value: "48 SKUs" },
          { label: "5. Alert retailer on content", value: "15 cases" },
        ],
      },
    },
  ],
};

const i18n = {
  es: {
    connected: "Conectado",
    typing: "Escribiendo",
    thinking: "Analizando tus datos",
    placeholder: "Pregunta sobre precios, competencia, cobertura...",
  },
  en: {
    connected: "Connected",
    typing: "Typing",
    thinking: "Analyzing your data",
    placeholder: "Ask about pricing, competitors, coverage...",
  },
};

type Phase = "idle" | "typing" | "sent" | "thinking" | "answering" | "done";

export default function DsaAnimatedChat({ locale = "es" }: { locale?: Locale }) {
  const t = i18n[locale];
  const convos = conversations[locale];

  const [convoIndex, setConvoIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const [typedText, setTypedText] = useState("");
  const [visibleKpis, setVisibleKpis] = useState(0);

  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Clear all timers helper
  const clearAll = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  useEffect(() => {
    clearAll();
    const current = convos[convoIndex];
    const question = current.question;

    setTypedText("");
    setVisibleKpis(0);
    setPhase("typing");

    // 1) Type out the question char by char
    const typeDelay = 28; // ms per char
    for (let i = 0; i <= question.length; i++) {
      timersRef.current.push(
        setTimeout(() => setTypedText(question.slice(0, i)), i * typeDelay),
      );
    }

    const typingEnd = question.length * typeDelay;

    // 2) Sent bubble (short pause)
    timersRef.current.push(
      setTimeout(() => setPhase("sent"), typingEnd + 200),
    );

    // 3) Thinking state
    timersRef.current.push(
      setTimeout(() => setPhase("thinking"), typingEnd + 500),
    );

    // 4) Answering: show response with KPIs appearing one by one
    const thinkingEnd = typingEnd + 500 + 1400;
    timersRef.current.push(
      setTimeout(() => {
        setPhase("answering");
      }, thinkingEnd),
    );

    // Reveal KPIs one by one
    current.response.kpis.forEach((_, i) => {
      timersRef.current.push(
        setTimeout(() => setVisibleKpis(i + 1), thinkingEnd + 250 + i * 180),
      );
    });

    const answeringEnd =
      thinkingEnd + 250 + current.response.kpis.length * 180 + 400;

    // 5) Done — hold for a few seconds then advance
    timersRef.current.push(
      setTimeout(() => setPhase("done"), answeringEnd),
    );
    timersRef.current.push(
      setTimeout(() => {
        setConvoIndex((prev) => (prev + 1) % convos.length);
      }, answeringEnd + 3500),
    );

    return clearAll;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [convoIndex, locale]);

  const current = convos[convoIndex];
  const showSentBubble = phase === "sent" || phase === "thinking" || phase === "answering" || phase === "done";
  const showResponse = phase === "answering" || phase === "done";
  const showThinking = phase === "thinking";

  return (
    <div
      className="rounded-2xl overflow-hidden shadow-card-hover flex flex-col"
      style={{ background: "linear-gradient(135deg, #211f4b 0%, #2d2a6e 100%)", minHeight: "460px" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: "rgba(255,23,123,0.2)" }}
          >
            <Sparkles size={14} className="text-accent" />
          </div>
          <span className="text-sm font-semibold text-white">Pricing-Retail Chat</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[10px] text-white/50">{t.connected}</span>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 p-5 space-y-4 overflow-hidden">
        {/* User message (typing or sent) */}
        {phase === "typing" ? (
          <div className="flex justify-end">
            <div
              className="max-w-[85%] rounded-2xl rounded-tr-md px-4 py-3 shadow-lg"
              style={{ background: "linear-gradient(135deg, #FF177B 0%, #4D4A9D 100%)" }}
            >
              <p className="text-sm text-white leading-relaxed">
                {typedText}
                <span className="inline-block w-[1.5px] h-3 ml-0.5 bg-white/80 align-middle animate-pulse" />
              </p>
            </div>
          </div>
        ) : null}

        {showSentBubble ? (
          <div className="flex justify-end animate-[slideInRight_0.3s_ease]">
            <div
              className="max-w-[85%] rounded-2xl rounded-tr-md px-4 py-3 shadow-lg"
              style={{ background: "linear-gradient(135deg, #FF177B 0%, #4D4A9D 100%)" }}
            >
              <p className="text-sm text-white leading-relaxed">{current.question}</p>
            </div>
          </div>
        ) : null}

        {/* Thinking indicator */}
        {showThinking ? (
          <div className="flex justify-start animate-[slideInLeft_0.3s_ease]">
            <div className="max-w-[70%] rounded-2xl rounded-tl-md bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-3 flex items-center gap-2">
              <Sparkles size={12} className="text-accent animate-pulse" />
              <span className="text-[11px] text-white/70">{t.thinking}</span>
              <div className="flex gap-0.5 ml-1">
                <span className="w-1 h-1 rounded-full bg-accent animate-[thinkDot_1.2s_ease-in-out_infinite]" style={{ animationDelay: "0s" }} />
                <span className="w-1 h-1 rounded-full bg-accent animate-[thinkDot_1.2s_ease-in-out_infinite]" style={{ animationDelay: "0.2s" }} />
                <span className="w-1 h-1 rounded-full bg-accent animate-[thinkDot_1.2s_ease-in-out_infinite]" style={{ animationDelay: "0.4s" }} />
              </div>
            </div>
          </div>
        ) : null}

        {/* AI Response */}
        {showResponse ? (
          <div className="flex justify-start animate-[slideInLeft_0.4s_ease]">
            <div className="max-w-[95%] w-full rounded-2xl rounded-tl-md bg-white/10 backdrop-blur-sm border border-white/10 px-5 py-4">
              <p className="text-sm font-semibold text-white mb-1">{current.response.title}</p>
              <p className="text-[11px] text-white/50 mb-3">{current.response.subtitle}</p>
              <div className="space-y-2">
                {current.response.kpis.map((kpi, i) => (
                  <div
                    key={`${convoIndex}-${kpi.label}`}
                    className="flex items-center justify-between text-sm transition-all duration-300"
                    style={{
                      opacity: i < visibleKpis ? 1 : 0,
                      transform: i < visibleKpis ? "translateY(0)" : "translateY(4px)",
                    }}
                  >
                    <span className="text-white/70">{kpi.label}</span>
                    <span className="font-bold text-white tabular-nums">{kpi.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {/* Input */}
      <div className="px-5 pb-4">
        <div className="flex items-center gap-2 rounded-xl bg-white/10 border border-white/10 px-4 py-3">
          <p className="flex-1 text-sm text-white/40">{t.placeholder}</p>
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #FF177B 0%, #4D4A9D 100%)" }}
          >
            <Send size={14} className="text-white" />
          </div>
        </div>
      </div>

      {/* Global keyframes */}
      <style jsx global>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(8px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-8px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes thinkDot {
          0%,
          60%,
          100% {
            opacity: 0.3;
            transform: translateY(0);
          }
          30% {
            opacity: 1;
            transform: translateY(-2px);
          }
        }
      `}</style>
    </div>
  );
}
