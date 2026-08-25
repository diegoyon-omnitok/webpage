"use client";

import { useEffect, useId, useState } from "react";
import type { HubSpotFormConfig } from "@/lib/hubspot-forms";
import { loadHubSpotFormsScript } from "@/lib/hubspot-script";

/**
 * Fork pt-BR de `src/components/ui/HubSpotFormEmbed.tsx`: mismo comportamiento,
 * solo cambia el mensaje visible de error de carga (traducido a portugués).
 * El formulario embebido de HubSpot en sí no se traduce desde código.
 */
type HubSpotFormEmbedPtBrProps = {
  config: HubSpotFormConfig;
  className?: string;
  compact?: boolean;
};

export default function HubSpotFormEmbedPtBr({ config, className, compact = false }: HubSpotFormEmbedPtBrProps) {
  const reactId = useId();
  const targetId = `hubspot-form-${reactId.replace(/[:]/g, "")}`;
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

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

    return () => {
      cancelled = true;
      const targetNode = document.querySelector<HTMLElement>(targetSelector);
      if (targetNode) {
        targetNode.innerHTML = "";
      }
    };
  }, [config, targetId]);

  return (
    <div className={`hubspot-form-shell ${compact ? "hubspot-form-shell-compact" : ""} ${className ?? ""}`.trim()}>
      {status === "error" ? (
        <div className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
          Não foi possível carregar o formulário agora. Tente novamente em instantes.
        </div>
      ) : null}
      <div id={targetId} className={status === "loading" ? "min-h-24" : undefined} />
    </div>
  );
}
