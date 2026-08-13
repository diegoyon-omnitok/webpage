"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  resourcePath,
  resourceTopicLabels,
  resourceTypeLabels,
  type Resource,
} from "@/data/resources";
import ResourceCover from "@/components/resources/ResourceCover";
import { trackEvent } from "@/lib/analytics";

/**
 * Recurso destacado: ocupa el ancho completo arriba de la grilla, con portada a
 * la izquierda y contenido a la derecha. Solo se muestra cuando no hay filtros
 * ni búsqueda activos, para no competir con el resultado que pidió el usuario.
 */
export default function ResourceFeaturedCard({ resource }: { resource: Resource }) {
  function handleClick() {
    trackEvent("ebook_cta_click", {
      resource_slug: resource.slug,
      resource_title: resource.title,
      resource_type: resource.type,
      position: "featured",
    });
  }

  return (
    <Link
      href={resourcePath(resource.slug)}
      onClick={handleClick}
      className="group grid overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]"
    >
      {/* Portada sin título: el título va en la columna de texto, no dos veces. */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-50 md:aspect-auto md:min-h-[300px]">
        <ResourceCover resource={resource} variant="hero" showTitle={false} priority />
      </div>

      <div className="flex flex-col justify-center p-7 lg:p-10">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white"
            style={{ background: "#FF6AAA" }}
          >
            Destacado
          </span>
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent">
            {resourceTypeLabels[resource.type]}
          </span>
          {resource.topics[0] ? (
            <>
              <span className="text-gray-300">·</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-400">
                {resourceTopicLabels[resource.topics[0]]}
              </span>
            </>
          ) : null}
        </div>

        <h2 className="mt-4 text-2xl font-bold leading-snug text-gray-900 lg:text-[28px]">
          {resource.title}
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-gray-500">{resource.description}</p>

        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-all group-hover:gap-2.5">
          Ver recurso <ArrowRight size={15} />
        </span>
      </div>
    </Link>
  );
}
