"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import HubSpotFormEmbed from "@/components/ui/HubSpotFormEmbed";
import type { HubSpotFormConfig } from "@/lib/hubspot-forms";

type ContactFormCardProps = {
  config: HubSpotFormConfig;
  /** Título de la tarjeta mientras el formulario está visible. */
  title: string;
  /** Título tras enviar el formulario. */
  submittedTitle: string;
  /** Mensaje de agradecimiento tras enviar el formulario. */
  submittedMessage: string;
};

/**
 * Tarjeta blanca del formulario de contacto. Al enviarse el formulario de
 * HubSpot, reemplaza el título y muestra el agradecimiento propio del sitio
 * (el mensaje inline de HubSpot se suprime con inlineMessage="").
 */
export default function ContactFormCard({
  config,
  title,
  submittedTitle,
  submittedMessage,
}: ContactFormCardProps) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-[0_8px_40px_-8px_rgba(77,74,157,0.12)] p-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        {submitted ? submittedTitle : title}
      </h2>
      {submitted ? (
        <div className="flex items-start gap-3 rounded-xl bg-emerald-50 border border-emerald-100 p-4">
          <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-700 leading-relaxed">{submittedMessage}</p>
        </div>
      ) : null}
      <div className={submitted ? "hidden" : undefined}>
        <HubSpotFormEmbed
          config={config}
          inlineMessage=""
          onFormSubmitted={() => setSubmitted(true)}
        />
      </div>
    </div>
  );
}
