"use client";

/**
 * ════════════════════════════════════════════════════════════════════════════
 *  CALENDARIO DE /es/summit — HubSpot Meetings embebido
 * ════════════════════════════════════════════════════════════════════════════
 *
 *  Inserta el calendario de reuniones de HubSpot de Julián dentro de la página
 *  (sin salir del sitio). HubSpot se encarga de la disponibilidad real, del
 *  formulario de datos, de crear el evento y de enviar la invitación.
 *
 *  Cómo funciona el embed oficial: se deja un contenedor con la clase
 *  `meetings-iframe-container` y `data-src` apuntando al link con `embed=true`;
 *  el script de HubSpot lo encuentra, crea el iframe y ajusta su alto solo.
 *  El script se agrega al montar y se quita al desmontar, así el calendario
 *  vuelve a construirse aunque el componente se monte más de una vez.
 * ════════════════════════════════════════════════════════════════════════════
 */

import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { HUBSPOT_MEETINGS_URL } from "./config";

const HUBSPOT_EMBED_SCRIPT = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";

/** Tiempo máximo de espera antes de ofrecer el link como respaldo. */
const ESPERA_MAX_MS = 8000;

const TARJETA =
  "rounded-2xl border border-gray-100 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)]";

function urlEmbed(url: string) {
  return `${url}${url.includes("?") ? "&" : "?"}embed=true`;
}

export default function SummitAgenda() {
  const contenedorRef = useRef<HTMLDivElement>(null);
  const [estado, setEstado] = useState<"cargando" | "listo" | "error">("cargando");

  useEffect(() => {
    const contenedor = contenedorRef.current;
    if (!contenedor) return;

    // El skeleton se retira apenas HubSpot inserta el iframe.
    const observador = new MutationObserver(() => {
      if (contenedor.querySelector("iframe")) {
        setEstado("listo");
        observador.disconnect();
        window.clearTimeout(temporizador);
      }
    });
    observador.observe(contenedor, { childList: true });

    const temporizador = window.setTimeout(() => {
      if (!contenedor.querySelector("iframe")) setEstado("error");
    }, ESPERA_MAX_MS);

    const script = document.createElement("script");
    script.src = HUBSPOT_EMBED_SCRIPT;
    script.async = true;
    script.onerror = () => setEstado("error");
    document.body.appendChild(script);

    return () => {
      observador.disconnect();
      window.clearTimeout(temporizador);
      script.remove();
    };
  }, []);

  return (
    <div className="mt-8">
      {estado === "cargando" && <SummitAgendaSkeleton />}

      <div
        ref={contenedorRef}
        className={`meetings-iframe-container overflow-hidden ${TARJETA} ${
          estado === "listo" ? "" : "h-0 border-0 shadow-none"
        }`}
        data-src={urlEmbed(HUBSPOT_MEETINGS_URL)}
      />

      {estado === "error" && (
        <div className={`p-8 text-center ${TARJETA}`}>
          <p className="text-sm text-gray-600">
            El calendario no se pudo cargar en esta página.
          </p>
          <a
            href={HUBSPOT_MEETINGS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#E0156E]"
          >
            <ExternalLink size={16} />
            Abrir la agenda de Julián
          </a>
        </div>
      )}
    </div>
  );
}

/** Esqueleto que ocupa el lugar del calendario mientras HubSpot lo carga. */
export function SummitAgendaSkeleton() {
  return (
    <div className={`animate-pulse p-6 ${TARJETA}`} aria-hidden>
      <div className="flex items-center gap-4">
        <span className="h-12 w-12 rounded-full bg-gray-100" />
        <div className="space-y-2">
          <span className="block h-3 w-24 rounded bg-gray-100" />
          <span className="block h-3 w-40 rounded bg-gray-100" />
        </div>
      </div>
      <div className="mt-6 grid grid-cols-7 gap-2">
        {Array.from({ length: 21 }).map((_, indice) => (
          <span key={indice} className="h-9 rounded-lg bg-gray-100" />
        ))}
      </div>
      <div className="mt-6 grid grid-cols-3 gap-2 sm:grid-cols-4">
        {Array.from({ length: 8 }).map((_, indice) => (
          <span key={indice} className="h-11 rounded-xl bg-gray-100" />
        ))}
      </div>
    </div>
  );
}
