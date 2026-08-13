/**
 * Eventos de analítica.
 *
 * El sitio ya carga GA4 con gtag.js en `src/app/layout.tsx` (G-Z26M7SM2Z7) y
 * Microsoft Clarity. Este helper solo empuja eventos a esas implementaciones:
 * NO instala ningún script nuevo ni duplica GA.
 *
 * Si en el futuro se instala GTM, `dataLayer.push` ya queda cubierto porque
 * gtag.js escribe en el mismo dataLayer.
 */

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: string, eventName: string, params?: EventParams) => void;
    dataLayer?: unknown[];
  }
}

/** Eventos de la biblioteca de recursos. */
export type ResourceEvent =
  | "resource_view"
  | "ebook_cta_click"
  | "ebook_form_start"
  | "ebook_form_submit"
  | "related_resource_click";

export function trackEvent(event: ResourceEvent, params: EventParams = {}): void {
  if (typeof window === "undefined") return;

  const payload: EventParams = { ...params };

  if (typeof window.gtag === "function") {
    window.gtag("event", event, payload);
    return;
  }

  // Fallback: si gtag todavía no cargó, el evento queda en el dataLayer.
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event, ...payload });
  }
}
