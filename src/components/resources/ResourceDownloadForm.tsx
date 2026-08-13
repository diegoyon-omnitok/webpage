"use client";

/**
 * ════════════════════════════════════════════════════════════════════════════
 *  FORMULARIO DE DESCARGA DE UN RECURSO
 * ════════════════════════════════════════════════════════════════════════════
 *
 *  Es un formulario propio (diseño Omnitok, no un iframe de HubSpot), para
 *  controlar tipografía, colores, espaciados, errores y estado de éxito.
 *
 *  Cómo se conecta a HubSpot:
 *  ──────────────────────────
 *  Al enviar, hace POST al endpoint oficial de envíos de formularios de HubSpot:
 *
 *      https://api.hsforms.com/submissions/v3/integration/submit/{portalId}/{formGuid}
 *
 *  Es la API pública de HubSpot Forms: los datos entran al MISMO formulario y
 *  contacto que un embed, activan los workflows y quedan en el timeline. No se
 *  crea ninguna base de datos aparte y no hace falta token ni backend propio.
 *
 *  Mientras `formId` esté vacío en `src/lib/hubspot-forms.ts`, el formulario
 *  funciona en MODO VISTA PREVIA: valida, muestra el estado de éxito y NO envía
 *  nada a ningún sitio. Sirve para revisar el diseño antes de conectar HubSpot.
 *
 *  Para activarlo de verdad: pegar el Form ID en `latamResourceDownload`
 *  (o en el `hubspotFormId` del recurso) y listo, sin tocar este archivo.
 * ════════════════════════════════════════════════════════════════════════════
 */

import { useState } from "react";
import Link from "next/link";
import { Loader2, MailCheck } from "lucide-react";
import {
  HUBSPOT_RESOURCE_FIELD,
  isHubSpotFormConfigured,
  resolveResourceFormConfig,
} from "@/lib/hubspot-forms";
import { trackEvent } from "@/lib/analytics";
import { resourceNoun, resourceNounBare, type ResourceType } from "@/data/resources";
import { canonicalRoutes } from "@/lib/markets";

type ResourceDownloadFormProps = {
  /** Identificador del recurso que viaja a HubSpot. Ej: "guia-pdp-ecommerce" */
  ebookIdentifier: string;
  resourceTitle: string;
  /** Define si los textos dicen "el ebook", "la guía", "el reporte"… */
  resourceType: ResourceType;
  /** Form ID propio del recurso; si viene vacío se usa el genérico de recursos. */
  hubspotFormId?: string;
};

type FieldName = "firstname" | "lastname" | "email" | "company" | "jobtitle";

const FIELDS: Array<{
  name: FieldName;
  label: string;
  type: string;
  autoComplete: string;
  placeholder: string;
  half?: boolean;
}> = [
  {
    name: "firstname",
    label: "Nombre",
    type: "text",
    autoComplete: "given-name",
    placeholder: "Tu nombre",
    half: true,
  },
  {
    name: "lastname",
    label: "Apellido",
    type: "text",
    autoComplete: "family-name",
    placeholder: "Tu apellido",
    half: true,
  },
  {
    name: "email",
    label: "Email corporativo",
    type: "email",
    autoComplete: "email",
    placeholder: "nombre@empresa.com",
  },
  {
    name: "company",
    label: "Empresa",
    type: "text",
    autoComplete: "organization",
    placeholder: "Nombre de tu empresa",
  },
  {
    name: "jobtitle",
    label: "Cargo",
    type: "text",
    autoComplete: "organization-title",
    placeholder: "Tu cargo",
  },
];

const UTM_FIELDS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

const EMPTY: Record<FieldName, string> = {
  firstname: "",
  lastname: "",
  email: "",
  company: "",
  jobtitle: "",
};

function validate(values: Record<FieldName, string>) {
  const errors: Partial<Record<FieldName, string>> = {};
  if (!values.firstname.trim()) errors.firstname = "Ingresa tu nombre.";
  if (!values.lastname.trim()) errors.lastname = "Ingresa tu apellido.";
  if (!values.email.trim()) errors.email = "Ingresa tu email corporativo.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Revisa el formato del email.";
  if (!values.company.trim()) errors.company = "Ingresa el nombre de tu empresa.";
  if (!values.jobtitle.trim()) errors.jobtitle = "Ingresa tu cargo.";
  return errors;
}

/** Cookie de tracking de HubSpot, si el portal la dejó en el navegador. */
function readHubSpotCookie(): string | undefined {
  const match = document.cookie.match(/(?:^|;\s*)hubspotutk=([^;]+)/);
  return match?.[1];
}

export default function ResourceDownloadForm({
  ebookIdentifier,
  resourceTitle,
  resourceType,
  hubspotFormId,
}: ResourceDownloadFormProps) {
  const noun = resourceNoun(resourceType); // "el ebook", "la guía"…
  const nounBare = resourceNounBare(resourceType); // "ebook", "guía"…
  const [values, setValues] = useState<Record<FieldName, string>>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "submitted" | "error">("idle");
  const [started, setStarted] = useState(false);

  const config = resolveResourceFormConfig(hubspotFormId);
  const connected = isHubSpotFormConfigured(config);

  function handleFocus() {
    if (started) return;
    setStarted(true);
    trackEvent("ebook_form_start", {
      resource_slug: ebookIdentifier,
      resource_title: resourceTitle,
    });
  }

  function handleChange(name: FieldName, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");

    const params = new URLSearchParams(window.location.search);
    const fields = [
      { name: "firstname", value: values.firstname.trim() },
      { name: "lastname", value: values.lastname.trim() },
      { name: "email", value: values.email.trim() },
      { name: "company", value: values.company.trim() },
      { name: "jobtitle", value: values.jobtitle.trim() },
      // Identificador del recurso: no se le pide al visitante.
      { name: HUBSPOT_RESOURCE_FIELD, value: ebookIdentifier },
      // UTMs solo si vienen en la URL: no se sobrescribe la atribución de HubSpot.
      ...UTM_FIELDS.filter((field) => params.get(field)).map((field) => ({
        name: field,
        value: params.get(field) as string,
      })),
    ];

    // MODO VISTA PREVIA: sin Form ID no se envía nada.
    if (!connected) {
      await new Promise((resolve) => setTimeout(resolve, 550));
      trackEvent("ebook_form_submit", {
        resource_slug: ebookIdentifier,
        resource_title: resourceTitle,
        preview_mode: true,
      });
      setStatus("submitted");
      return;
    }

    const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${config.portalId}/${config.formId}`;
    const hutk = readHubSpotCookie();
    const context = {
      ...(hutk ? { hutk } : {}),
      pageUri: window.location.href,
      pageName: document.title,
    };

    async function send(payloadFields: Array<{ name: string; value: string }>) {
      return fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fields: payloadFields, context }),
      });
    }

    try {
      let response = await send(fields);

      /**
       * Si el formulario de HubSpot todavía no tiene el campo oculto
       * `recurso_descargado`, la API responde 400 y rechaza TODO el envío.
       * En ese caso se reintenta sin ese campo para no perder el lead, y se
       * avisa por consola para que se agregue el campo al formulario.
       */
      if (response.status === 400) {
        const detail = await response.text();
        if (detail.includes(HUBSPOT_RESOURCE_FIELD)) {
          console.warn(
            `[Omnitok] El formulario de HubSpot no tiene el campo oculto "${HUBSPOT_RESOURCE_FIELD}". ` +
              "El lead se envía sin identificar el recurso: agrega ese campo al formulario."
          );
          response = await send(
            fields.filter((field) => field.name !== HUBSPOT_RESOURCE_FIELD)
          );
        }
      }

      if (!response.ok) throw new Error(`HubSpot respondió ${response.status}`);

      trackEvent("ebook_form_submit", {
        resource_slug: ebookIdentifier,
        resource_title: resourceTitle,
      });
      setStatus("submitted");
    } catch {
      setStatus("error");
    }
  }

  /* ── Éxito: la entrega es por email, sin enlace público al PDF ── */
  if (status === "submitted") {
    return (
      <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-card lg:p-8">
        <div
          className="inline-flex h-12 w-12 items-center justify-center rounded-2xl"
          style={{ background: "rgba(255,106,170,0.12)", color: "#FF6AAA" }}
        >
          <MailCheck size={22} />
        </div>
        <h2 className="mt-5 text-2xl font-bold text-gray-900">¡Listo!</h2>
        <p className="mt-2 text-base font-semibold text-gray-700">
          Te enviamos {noun} a tu correo.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          Revisa tu bandeja de entrada. Si no lo encuentras, revisa también spam o
          promociones.
        </p>
        {!connected ? (
          <p className="mt-5 rounded-xl bg-gray-50 px-4 py-3 text-xs leading-relaxed text-gray-500">
            Vista previa: el formulario todavía no está conectado a HubSpot, así que estos
            datos no se enviaron a ninguna parte.
          </p>
        ) : null}
      </div>
    );
  }

  const inputBase =
    "w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-primary";

  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-card lg:p-8">
      <h2 className="text-xl font-bold text-gray-900">Descarga gratis {noun}</h2>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        Completa tus datos y te lo enviamos por correo, sin costo.
      </p>

      <form onSubmit={handleSubmit} onFocus={handleFocus} noValidate className="mt-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {FIELDS.map((field) => (
            <div key={field.name} className={field.half ? "sm:col-span-1" : "sm:col-span-2"}>
              <label
                htmlFor={`resource-${field.name}`}
                className="mb-1.5 block text-[13px] font-semibold text-gray-700"
              >
                {field.label}
              </label>
              <input
                id={`resource-${field.name}`}
                name={field.name}
                type={field.type}
                autoComplete={field.autoComplete}
                placeholder={field.placeholder}
                value={values[field.name]}
                onChange={(event) => handleChange(field.name, event.target.value)}
                aria-invalid={errors[field.name] ? true : undefined}
                aria-describedby={errors[field.name] ? `error-${field.name}` : undefined}
                className={`${inputBase} ${
                  errors[field.name] ? "border-red-300 bg-red-50/40" : "border-gray-200"
                }`}
              />
              {errors[field.name] ? (
                <p id={`error-${field.name}`} className="mt-1.5 text-xs font-medium text-red-600">
                  {errors[field.name]}
                </p>
              ) : null}
            </div>
          ))}
        </div>

        {/* Campo oculto: identifica el recurso descargado (no editable). */}
        <input type="hidden" name={HUBSPOT_RESOURCE_FIELD} value={ebookIdentifier} readOnly />

        {status === "error" ? (
          <div className="mt-5 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
            No pudimos enviar tus datos. Vuelve a intentarlo en unos segundos.
          </div>
        ) : null}

        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl gradient-brand px-6 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "sending" ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Enviando…
            </>
          ) : (
            `Recibir ${nounBare}`
          )}
        </button>

        <p className="mt-4 text-xs leading-relaxed text-gray-500">
          Al enviar tus datos aceptas nuestra{" "}
          <Link
            href={canonicalRoutes.latam.privacyPolicy}
            className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
          >
            política de privacidad
          </Link>
          .
        </p>
      </form>
    </div>
  );
}
