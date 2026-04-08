"use client";

import { useEffect, useId, useState } from "react";
import type { HubSpotFormConfig } from "@/lib/hubspot-forms";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: HubSpotFormConfig & { target: string }) => void;
      };
    };
  }
}

type HubSpotFormEmbedProps = {
  config: HubSpotFormConfig;
  className?: string;
  compact?: boolean;
};

function loadHubSpotScript() {
  return new Promise<void>((resolve, reject) => {
    if (window.hbspt?.forms) {
      resolve();
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>('script[data-hubspot-forms="true"]');
    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener(
        "error",
        () => reject(new Error("Failed to load HubSpot forms script")),
        { once: true }
      );
      return;
    }

    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.defer = true;
    script.charset = "utf-8";
    script.dataset.hubspotForms = "true";
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener(
      "error",
      () => reject(new Error("Failed to load HubSpot forms script")),
      { once: true }
    );
    document.body.appendChild(script);
  });
}

export default function HubSpotFormEmbed({ config, className, compact = false }: HubSpotFormEmbedProps) {
  const reactId = useId();
  const targetId = `hubspot-form-${reactId.replace(/[:]/g, "")}`;
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;
    const targetSelector = `#${targetId}`;

    async function mountForm() {
      try {
        setStatus("loading");
        await loadHubSpotScript();
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
          We could not load the form right now. Please try again in a moment.
        </div>
      ) : null}
      <div id={targetId} className={status === "loading" ? "min-h-24" : undefined} />
    </div>
  );
}
