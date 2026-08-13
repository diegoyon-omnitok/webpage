export type HubSpotFormConfig = {
  portalId: string;
  formId: string;
  region: string;
};

/* ══════════════════════════════════════════════════════════════════════════
   HUBSPOT · IDs de formularios
   ──────────────────────────────────────────────────────────────────────────
   Portal LATAM (omnitok.com / mercado /es): 45476524
   Portal USA   (mercado /en-us):            47201087

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
  usaContact: {
    portalId: "47201087",
    formId: "6455f60f-f38d-4b79-bc59-ac83604c8256",
    region: "na1",
  },
  usaEbook: {
    portalId: "47201087",
    formId: "aaa7d0ec-18bf-4ca5-90fe-c968ae7ac84f",
    region: "na1",
  },
  usaNewsletter: {
    portalId: "47201087",
    formId: "65bb24ea-6601-4982-b64d-565f29d321c2",
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
