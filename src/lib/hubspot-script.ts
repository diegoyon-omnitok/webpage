/**
 * Carga (una sola vez) el script oficial de formularios de HubSpot.
 *
 * IMPORTANTE: es el único punto del sitio donde se inyecta
 * `https://js.hsforms.net/forms/embed/v2.js`. Cualquier componente que necesite
 * un formulario de HubSpot debe usar este helper para no duplicar el script.
 */
import type { HubSpotFormConfig } from "@/lib/hubspot-forms";

export type HubSpotFormCreateConfig = HubSpotFormConfig & {
  target: string;
  /** Se ejecuta cuando el formulario ya está en el DOM. */
  onFormReady?: (form: HTMLFormElement) => void;
  /** Se ejecuta tras un envío correcto. */
  onFormSubmitted?: () => void;
  /** Mensaje inline de HubSpot. Se puede dejar vacío y manejar el éxito en React. */
  inlineMessage?: string;
  cssClass?: string;
};

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: HubSpotFormCreateConfig) => void;
      };
    };
  }
}

const SCRIPT_SRC = "https://js.hsforms.net/forms/embed/v2.js";

export function loadHubSpotFormsScript(): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    if (typeof window === "undefined") {
      resolve();
      return;
    }

    if (window.hbspt?.forms) {
      resolve();
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-hubspot-forms="true"]'
    );

    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener(
        "error",
        () => reject(new Error("Failed to load HubSpot forms script")),
        { once: true }
      );
      return;
    }

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
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
