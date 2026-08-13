/**
 * /es/recursos/<slug> — Landing individual de un recurso.
 *
 * Orden de la página (composición editorial, un contenedor único max-w-6xl para
 * que ninguna sección cambie de ancho a mitad de la página):
 *
 *   1. Hero compacto        · categoría, título, descripción
 *   2. Bloque de descarga   · portada + "qué aprenderás"  |  formulario
 *   3. Resumen del recurso   · contexto, cifras, hallazgos, aprendizaje, CTA
 *   4. Más recursos          · 1 → tarjeta horizontal · 2 → 2 col · 3+ → 3 col
 *   5. CTA comercial discreto
 *
 * En mobile todo se apila en ese mismo orden: la portada y el formulario quedan
 * inmediatamente después del hero.
 */

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import SeoBreadcrumbs from "@/components/seo/SeoBreadcrumbs";
import ResourceCover from "@/components/resources/ResourceCover";
import ResourceCard from "@/components/resources/ResourceCard";
import ResourceWideCard from "@/components/resources/ResourceWideCard";
import ResourceDownloadForm from "@/components/resources/ResourceDownloadForm";
import ResourceSummary from "@/components/resources/ResourceSummary";
import ResourceViewTracker from "@/components/resources/ResourceViewTracker";
import {
  getRelatedResources,
  resourceLearnHeading,
  resourcePath,
  resourceTopicLabels,
  resourceTypeLabels,
  type Resource,
} from "@/data/resources";
import { SITE_URL, canonicalRoutes } from "@/lib/markets";

export default function LatamResourceLandingPage({ resource }: { resource: Resource }) {
  const related = getRelatedResources(resource, 3);
  const typeLabel = resourceTypeLabels[resource.type];
  const isWideCover = resource.coverAspect === "wide";

  const resourceSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: resource.title,
    description: resource.description,
    url: `${SITE_URL}${resourcePath(resource.slug)}`,
    inLanguage: "es",
    learningResourceType: typeLabel,
    datePublished: resource.date,
    isAccessibleForFree: true,
    publisher: { "@type": "Organization", name: "Omnitok", url: SITE_URL },
    about: resource.topics.map((topic) => resourceTopicLabels[topic]),
  };

  return (
    <>
      <ResourceViewTracker slug={resource.slug} title={resource.title} type={resource.type} />

      {/* ── 1 · Hero compacto ── */}
      <section className="relative overflow-hidden gradient-hero pt-28 pb-16">
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2.5">
            <span
              className="rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white"
              style={{ background: "#FF6AAA" }}
            >
              {typeLabel}
            </span>
            {resource.topics.slice(0, 2).map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold text-white/80"
              >
                {resourceTopicLabels[topic]}
              </span>
            ))}
          </div>

          <h1 className="mt-6 max-w-3xl text-3xl font-bold leading-tight text-white lg:text-[40px]">
            {resource.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70">
            {resource.description}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 translate-y-px">
          <svg viewBox="0 0 1440 40" fill="none" className="block w-full">
            <path
              d="M0 40L1440 40L1440 10C1200 40 900 0 720 10C540 20 240 0 0 10L0 40Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      <SeoBreadcrumbs
        items={[
          { label: "Inicio", href: canonicalRoutes.latam.home },
          { label: "Recursos", href: canonicalRoutes.latam.recursos },
          { label: resource.title },
        ]}
      />

      {/* ── 2 · Descarga: portada + qué aprenderás | formulario ── */}
      <section className="bg-white pb-16 pt-4 lg:pb-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
            {/* Portada + qué aprenderás */}
            <div>
              {/* Banner horizontal (16:9) o tapa vertical (4:5), según el recurso. */}
              <div
                className={`mx-auto w-full lg:mx-0 ${
                  isWideCover ? "max-w-full" : "max-w-[260px] sm:max-w-[300px]"
                }`}
              >
                <div className="relative">
                  <div
                    aria-hidden
                    className="absolute inset-x-5 -bottom-2.5 h-7 rounded-3xl bg-primary/15 blur-xl"
                  />
                  <div
                    className={`relative overflow-hidden rounded-2xl shadow-card-hover ring-1 ring-black/5 ${
                      isWideCover ? "aspect-video" : "aspect-[4/5]"
                    }`}
                  >
                    <ResourceCover resource={resource} variant="hero" priority />
                  </div>
                </div>
              </div>

              {resource.learnings.length > 0 ? (
                <div className="mt-9">
                  <p className="text-sm font-bold text-gray-900">
                    {resourceLearnHeading(resource.type)}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {resource.learnings.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full"
                          style={{ background: "rgba(255,106,170,0.14)", color: "#FF6AAA" }}
                        >
                          <Check size={12} strokeWidth={3} />
                        </span>
                        <span className="text-[15px] leading-relaxed text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            {/* Formulario */}
            <div id="formulario" className="scroll-mt-28 lg:sticky lg:top-28">
              <ResourceDownloadForm
                ebookIdentifier={resource.ebookIdentifier}
                resourceTitle={resource.title}
                resourceType={resource.type}
                hubspotFormId={resource.hubspotFormId}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 · Resumen del contenido (solo si el recurso lo trae) ── */}
      <ResourceSummary resource={resource} />

      {/* ── 4 · Más recursos ── */}
      {related.length > 0 ? (
        <section className="border-t border-gray-100 bg-white py-16">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Más recursos
                </p>
                <h2 className="mt-3 text-2xl font-bold text-gray-900 lg:text-3xl">
                  Sigue explorando el Digital Shelf
                </h2>
              </div>
              <Link
                href={canonicalRoutes.latam.recursos}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-2.5"
              >
                Ver todos los recursos <ArrowRight size={14} />
              </Link>
            </div>

            {/*
              El layout se adapta a cuántos relacionados existen:
                1 recurso  → tarjeta horizontal (sin huecos a la derecha)
                2 recursos → grilla de 2 columnas
                3 o más    → grilla de 3 columnas, máximo 3
            */}
            <div className="mt-9">
              {related.length === 1 ? (
                <ResourceWideCard resource={related[0]} source="related" />
              ) : (
                <div
                  className={`grid gap-6 sm:grid-cols-2 ${
                    related.length >= 3 ? "lg:grid-cols-3" : ""
                  }`}
                >
                  {related.slice(0, 3).map((item) => (
                    <ResourceCard key={item.slug} resource={item} source="related" />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      ) : null}

      {/* ── 5 · CTA comercial discreto ── */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-card lg:p-10">
            <h2 className="text-2xl font-bold text-gray-900 lg:text-[28px]">
              ¿Quieres conocer cómo se están ejecutando tus productos en el retail digital?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
              Descubre cómo Omnitok ayuda a marcas a gestionar, analizar y optimizar la
              experiencia de sus productos en retailers y marketplaces.
            </p>
            <div className="mt-8">
              <Link
                href={resource.productCta?.href ?? canonicalRoutes.latam.home}
                className="inline-flex items-center gap-2 rounded-xl gradient-brand px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                {resource.productCta?.label ?? "Conoce Omnitok"}
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resourceSchema) }}
      />
    </>
  );
}
