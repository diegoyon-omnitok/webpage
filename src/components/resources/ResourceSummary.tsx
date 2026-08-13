"use client";

/**
 * Resumen del recurso en la landing: contexto, cifras, hallazgos, conclusión y
 * la invitación a descargar. Solo se renderiza si el recurso trae `summary`.
 *
 * El botón hace scroll al formulario de la misma página (no abre el PDF) y
 * registra `ebook_cta_click` para poder medir cuánta gente baja a leer el
 * resumen antes de convertir.
 */

import { ArrowDown } from "lucide-react";
import type { Resource } from "@/data/resources";
import { resourceNounBare } from "@/data/resources";
import { trackEvent } from "@/lib/analytics";

export default function ResourceSummary({ resource }: { resource: Resource }) {
  const summary = resource.summary;
  if (!summary) return null;

  const noun = resourceNounBare(resource.type);

  function handleDownloadClick() {
    trackEvent("ebook_cta_click", {
      resource_slug: resource.slug,
      resource_title: resource.title,
      resource_type: resource.type,
      position: "summary",
    });
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <section className="border-t border-gray-100 bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
          De qué trata el {noun}
        </p>

        {summary.hook ? (
          <h2 className="mt-3 max-w-3xl text-2xl font-bold leading-snug text-gray-900 lg:text-[32px]">
            {summary.hook}
          </h2>
        ) : null}

        <div className="mt-6 max-w-3xl space-y-5">
          {summary.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-[16px] leading-[1.8] text-gray-600">
              {paragraph}
            </p>
          ))}
        </div>

        {/* ── Cifras del estudio ── */}
        {summary.stats && summary.stats.length > 0 ? (
          <div
            className="mt-10 grid max-w-4xl gap-6 rounded-3xl border p-7 sm:grid-cols-3 lg:p-8"
            style={{ background: "#F6F5FC", borderColor: "#E6E3F5" }}
          >
            {summary.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-extrabold text-primary lg:text-[34px]">{stat.value}</p>
                <p className="mt-1.5 text-sm leading-snug text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        ) : null}

        {/* ── Hallazgos ── */}
        {summary.findings && summary.findings.length > 0 ? (
          <div className="mt-14">
            {summary.findingsTitle ? (
              <h3 className="text-xl font-bold text-gray-900 lg:text-2xl">
                {summary.findingsTitle}
              </h3>
            ) : null}

            <div className="mt-7 grid max-w-4xl gap-5 sm:grid-cols-2">
              {summary.findings.map((finding, index) => (
                <article
                  key={finding.label}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex h-7 w-7 items-center justify-center rounded-full text-[12px] font-extrabold text-white"
                      style={{ background: "#FF6AAA" }}
                    >
                      {index + 1}
                    </span>
                    <h4 className="text-base font-bold text-gray-900">{finding.label}</h4>
                  </div>
                  <p className="mt-3.5 text-[15px] leading-relaxed text-gray-600">
                    {finding.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        ) : null}

        {/* ── Conclusión ── */}
        {summary.takeaway ? (
          <div
            className="mt-12 max-w-4xl rounded-3xl p-7 lg:p-8"
            style={{ background: "#F6F5FC", borderLeft: "4px solid #FF6AAA" }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              El principal aprendizaje
            </p>
            <p className="mt-3 text-lg font-bold leading-snug text-gray-900 lg:text-xl">
              {summary.takeaway}
            </p>
          </div>
        ) : null}

        {/* ── Invitación a descargar ── */}
        <div className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          {summary.downloadInvite ? (
            <p className="max-w-xl text-[16px] leading-relaxed text-gray-700">
              {summary.downloadInvite}
            </p>
          ) : null}
          <button
            type="button"
            onClick={handleDownloadClick}
            className="inline-flex flex-none items-center gap-2 rounded-xl gradient-brand px-7 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
          >
            Descargar {noun} gratis
            <ArrowDown size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
