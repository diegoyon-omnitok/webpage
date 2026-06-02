"use client";

import { useState } from "react";
import { X, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "56935388670";

type WhatsAppWidgetProps = {
  locale?: "es" | "en";
};

export default function WhatsAppWidget({ locale = "es" }: WhatsAppWidgetProps) {
  const [open, setOpen] = useState(false);

  const t =
    locale === "en"
      ? {
          title: "Need help?",
          subtitle: "Chat with our team on WhatsApp.",
          inputPlaceholder: "Write your message...",
          cta: "Start chat",
          defaultMessage: "Hi Omnitok, I'd like to learn more about the platform.",
          bubbleLabel: "Chat with us",
        }
      : {
          title: "¿Necesitas ayuda?",
          subtitle: "Escríbenos por WhatsApp y nos comunicaremos contigo.",
          inputPlaceholder: "Escribe tu mensaje...",
          cta: "Iniciar chat",
          defaultMessage: "Hola Omnitok, me gustaría saber más sobre la plataforma.",
          bubbleLabel: "Habla con nosotros",
        };

  const [message, setMessage] = useState(t.defaultMessage);

  const handleSend = () => {
    const text = message.trim() || t.defaultMessage;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Floating bubble button */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={t.bubbleLabel}
          className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-400/40"
          style={{ background: "#25D366" }}
        >
          {/* Official WhatsApp glyph */}
          <svg viewBox="0 0 32 32" className="w-7 h-7 text-white" fill="currentColor" aria-hidden>
            <path d="M16 0C7.18 0 0 7.16 0 15.98c0 2.82.74 5.58 2.14 8L0 32l8.22-2.16a16.02 16.02 0 007.78 1.98h.01C24.83 31.82 32 24.66 32 15.84 32 11.6 30.33 7.6 27.32 4.6A15.86 15.86 0 0016 0zm0 29.16h-.01a13.3 13.3 0 01-6.78-1.86l-.49-.29-4.88 1.28 1.3-4.76-.32-.5a13.18 13.18 0 01-2.02-7.05c0-7.3 5.94-13.24 13.21-13.24 3.53 0 6.85 1.38 9.35 3.87a13.13 13.13 0 013.87 9.36c-.01 7.3-5.95 13.19-13.23 13.19zm7.24-9.9c-.4-.2-2.35-1.16-2.71-1.29-.36-.13-.63-.2-.9.2-.26.4-1.03 1.29-1.26 1.55-.23.27-.46.3-.86.1-.4-.2-1.68-.62-3.2-1.97a12 12 0 01-2.22-2.76c-.23-.4-.02-.62.18-.82.18-.18.4-.46.6-.7.2-.23.27-.4.4-.66.13-.27.06-.5-.04-.7-.1-.2-.9-2.18-1.24-2.98-.33-.79-.66-.68-.9-.69h-.77c-.27 0-.7.1-1.07.5-.36.4-1.4 1.37-1.4 3.35 0 1.98 1.43 3.89 1.63 4.16.2.27 2.81 4.3 6.81 6.03.95.41 1.7.66 2.28.84.96.31 1.83.27 2.52.16.77-.12 2.35-.96 2.69-1.89.33-.93.33-1.72.23-1.89-.1-.16-.36-.26-.76-.46z" />
          </svg>
          <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-green-400 border-2 border-white animate-pulse" />
        </button>
      )}

      {/* Open chat card */}
      {open && (
        <div
          className="fixed bottom-5 right-5 z-50 w-[320px] sm:w-[360px] rounded-2xl shadow-2xl overflow-hidden bg-white border border-gray-200"
          role="dialog"
          aria-label={t.title}
        >
          {/* Header */}
          <div
            className="px-4 py-3 flex items-center justify-between"
            style={{ background: "linear-gradient(135deg, #128C7E 0%, #25D366 100%)" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 32 32" className="w-5 h-5 text-white" fill="currentColor" aria-hidden>
                  <path d="M16 0C7.18 0 0 7.16 0 15.98c0 2.82.74 5.58 2.14 8L0 32l8.22-2.16a16.02 16.02 0 007.78 1.98h.01C24.83 31.82 32 24.66 32 15.84 32 11.6 30.33 7.6 27.32 4.6A15.86 15.86 0 0016 0zm7.24 19.26c-.4-.2-2.35-1.16-2.71-1.29-.36-.13-.63-.2-.9.2-.26.4-1.03 1.29-1.26 1.55-.23.27-.46.3-.86.1-.4-.2-1.68-.62-3.2-1.97a12 12 0 01-2.22-2.76c-.23-.4-.02-.62.18-.82.18-.18.4-.46.6-.7.2-.23.27-.4.4-.66.13-.27.06-.5-.04-.7-.1-.2-.9-2.18-1.24-2.98-.33-.79-.66-.68-.9-.69h-.77c-.27 0-.7.1-1.07.5-.36.4-1.4 1.37-1.4 3.35 0 1.98 1.43 3.89 1.63 4.16.2.27 2.81 4.3 6.81 6.03.95.41 1.7.66 2.28.84.96.31 1.83.27 2.52.16.77-.12 2.35-.96 2.69-1.89.33-.93.33-1.72.23-1.89-.1-.16-.36-.26-.76-.46z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-tight">Omnitok</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
                  <span className="text-[10px] text-white/90">{t.subtitle}</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="text-white/80 hover:text-white p-1 -mr-1 rounded-full hover:bg-white/10 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* WhatsApp-style chat preview */}
          <div
            className="px-4 py-5 min-h-[120px]"
            style={{
              backgroundColor: "#E5DDD5",
              backgroundImage:
                "radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          >
            <div className="rounded-lg rounded-tl-none bg-white shadow-sm px-3 py-2 max-w-[85%]">
              <p className="text-xs text-gray-700 leading-relaxed">{t.title}</p>
              <p className="text-[10px] text-gray-400 mt-1">
                {locale === "en" ? "Usually replies in minutes" : "Respondemos en minutos"}
              </p>
            </div>
          </div>

          {/* Input + CTA */}
          <div className="p-3 bg-white border-t border-gray-100 space-y-2">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.inputPlaceholder}
              rows={2}
              className="w-full text-sm text-gray-700 placeholder:text-gray-400 px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 resize-none"
            />
            <button
              type="button"
              onClick={handleSend}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ background: "#25D366" }}
            >
              <MessageCircle size={15} />
              {t.cta}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
