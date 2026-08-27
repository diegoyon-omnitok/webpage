"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { HubSpotFormConfig } from "@/lib/hubspot-forms";
import { loadHubSpotFormsScript } from "@/lib/hubspot-script";

type HubSpotFormEmbedProps = {
  config: HubSpotFormConfig;
  className?: string;
  compact?: boolean;
  /** Se ejecuta tras un envío correcto del formulario. */
  onFormSubmitted?: () => void;
  /** Sobrescribe el mensaje inline de HubSpot ("" lo oculta para manejar el éxito en React). */
  inlineMessage?: string;
};

export default function HubSpotFormEmbed({
  config,
  className,
  compact = false,
  onFormSubmitted,
  inlineMessage,
}: HubSpotFormEmbedProps) {
  const reactId = useId();
  const targetId = `hubspot-form-${reactId.replace(/[:]/g, "")}`;
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const onFormSubmittedRef = useRef(onFormSubmitted);

  useEffect(() => {
    onFormSubmittedRef.current = onFormSubmitted;
  }, [onFormSubmitted]);

  useEffect(() => {
    let cancelled = false;
    const targetSelector = `#${targetId}`;

    async function mountForm() {
      try {
        setStatus("loading");
        await loadHubSpotFormsScript();
        if (cancelled || !window.hbspt?.forms) return;

        const targetNode = document.querySelector<HTMLElement>(targetSelector);
        if (!targetNode) return;
        targetNode.innerHTML = "";

        window.hbspt.forms.create({
          ...config,
          target: targetSelector,
          ...(inlineMessage !== undefined ? { inlineMessage } : {}),
          onFormSubmitted: () => {
            onFormSubmittedRef.current?.();
          },
        });

        if (!cancelled) {
          setStatus("ready");
        }
      } catch {
        if (!cancelled) {
          setStatus("error");
        }
      }
    }

    mountForm();

    // Respaldo: HubSpot también anuncia el envío vía postMessage (por si la
    // versión del embed no ejecuta el callback de create()).
    function handleMessage(event: MessageEvent) {
      const data = event.data as
        | { type?: string; eventName?: string; id?: string }
        | undefined;
      if (
        data?.type === "hsFormCallback" &&
        data.eventName === "onFormSubmitted" &&
        (!data.id || data.id === config.formId)
      ) {
        onFormSubmittedRef.current?.();
      }
    }
    window.addEventListener("message", handleMessage);

    return () => {
      cancelled = true;
      window.removeEventListener("message", handleMessage);
      const targetNode = document.querySelector<HTMLElement>(targetSelector);
      if (targetNode) {
        targetNode.innerHTML = "";
      }
    };
  }, [config, targetId, inlineMessage]);

  return (
    <div className={`hubspot-form-shell ${compact ? "hubspot-form-shell-compact" : ""} ${className ?? ""}`.trim()}>
      {status === "error" ? (
        <div className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
          We could not load the form right now. Please try again in a moment.
        </div>
      ) : null}
      <div id={targetId} className={status === "loading" ? "min-h-24" : undefined} />
    </div>
  );
}
