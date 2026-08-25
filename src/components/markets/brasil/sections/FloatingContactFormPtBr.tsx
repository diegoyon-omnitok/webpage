"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { hubspotForms } from "@/lib/hubspot-forms";
import HubSpotFormEmbedPtBr from "@/components/markets/brasil/sections/HubSpotFormEmbedPtBr";

/**
 * Fork pt-BR de `src/components/ui/FloatingContactForm.tsx`: mismo diseño y
 * lógica, con los textos visibles traducidos. Usa el mismo formulario de
 * HubSpot que LATAM (hubspotForms.brasilContact).
 */
export default function FloatingContactFormPtBr() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Vamos conversar"
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full shadow-lg text-white text-sm font-semibold transition-all duration-300 gradient-brand hover:opacity-90 ${
          open ? "scale-95 opacity-80" : "scale-100 opacity-100"
        }`}
      >
        {open ? <X size={18} /> : <MessageCircle size={18} />}
        <span className={open ? "hidden sm:inline" : ""}>Vamos conversar</span>
      </button>

      {/* Panel del formulario */}
      <div
        className={`fixed bottom-20 right-6 z-50 w-[min(92vw,26rem)] bg-white rounded-2xl shadow-2xl border border-gray-100 transition-all duration-300 origin-bottom-right ${
          open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div
          className="px-5 py-4 rounded-t-2xl flex items-center justify-between"
          style={{ background: "linear-gradient(90deg,#FF177B 0%,#4D4A9D 100%)" }}
        >
          <div>
            <p className="text-white font-bold text-sm">Vamos conversar?</p>
            <p className="text-white/70 text-xs">Respondemos em menos de 24 h</p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Fechar"
          >
            <X size={16} />
          </button>
        </div>

        {/* Cuerpo */}
        <div className="p-5">
          <HubSpotFormEmbedPtBr config={hubspotForms.brasilContact} compact />
        </div>
      </div>
    </>
  );
}
