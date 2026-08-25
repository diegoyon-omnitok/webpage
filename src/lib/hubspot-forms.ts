export type HubSpotFormConfig = {
  portalId: string;
  formId: string;
  region: string;
};

/* ══════════════════════════════════════════════════════════════════════════
   HUBSPOT · IDs de formularios
   ──────────────────────────────────────────────────────────────────────────
   Portal LATAM (omnitok.com / mercados /es, /br y /en-us): 45476524
   (El portal USA 47201087 dejó de usarse en agosto 2026.)

   Para agregar un formulario nuevo: crearlo en HubSpot, copiar el Form ID
   (Marketing → Formularios → Compartir → embed) y pegarlo abajo. La región
   es "na1" en ambos portales.
   ══════════════════════════════════════════════════════════════════════════ */

export const hubspotForms = {
  latamContact: {
    portalId: "45476524",
    formId: "04f89ed5-8ff0-4871-86ad-8400261e6033",
    region: "na1",
  },
  latamNewsletter: {
    portalId: "45476524",
    formId: "ccb6a570-9f14-496a-b21c-1fbb0ab9e2be",
    region: "na1",
  },
  /**
   * Formulario de descarga de recursos del portal LATAM (biblioteca /es/recursos).
   *   Campos               : firstname, lastname, email, company, jobtitle
   *   Campo oculto         : recurso_descargado (lo rellena la landing sola)
   *
   * El envío se hace contra la API oficial de envíos de HubSpot, así el diseño
   * del formulario es el de Omnitok. Ver `ResourceDownloadForm.tsx`.
   *
   * Un recurso puede declarar su propio `hubspotFormId` en
   * `src/data/resources.ts`; si lo hace, ese ID tiene prioridad sobre este.
   */
  latamResourceDownload: {
    portalId: "45476524",
    formId: "2166cd8f-dfbc-4981-982c-aa56bb1aa6af",
    region: "na1",
  },
  brasilContact: {
    portalId: "45476524",
    formId: "ad8ec278-db57-4b99-92e1-9811e686a2c7",
    region: "na1",
  },
  brasilNewsletter: {
    portalId: "45476524",
    formId: "a89de4db-ad26-4c44-abd5-09d904b80c24",
    region: "na1",
  },
  // Los tres formularios USA apuntan al mismo form del portal 45476524
  // (unificado en agosto 2026; antes vivían en el portal 47201087).
  usaContact: {
    portalId: "45476524",
    formId: "136a5ca8-5c6d-42bc-8fcf-655f043bb9fc",
    region: "na1",
  },
  usaEbook: {
    portalId: "45476524",
    formId: "136a5ca8-5c6d-42bc-8fcf-655f043bb9fc",
    region: "na1",
  },
  usaNewsletter: {
    portalId: "45476524",
    formId: "136a5ca8-5c6d-42bc-8fcf-655f043bb9fc",
    region: "na1",
  },
} satisfies Record<string, HubSpotFormConfig>;

/** Nombre interno de la propiedad de contacto que identifica el recurso. */
export const HUBSPOT_RESOURCE_FIELD = "recurso_descargado";

export function isHubSpotFormConfigured(config: HubSpotFormConfig): boolean {
  return config.portalId.trim().length > 0 && config.formId.trim().length > 0;
}

/**
 * Devuelve la configuración a usar para un recurso: su formulario propio si
 * lo tiene declarado, y si no, el formulario genérico de recursos LATAM.
 */
export function resolveResourceFormConfig(resourceFormId?: string): HubSpotFormConfig {
  if (resourceFormId && resourceFormId.trim().length > 0) {
    return { ...hubspotForms.latamResourceDownload, formId: resourceFormId.trim() };
  }
  return hubspotForms.latamResourceDownload;
}
