"use client";

/**
 * Tarjeta horizontal. Se usa siempre que quede UN SOLO recurso en un bloque,
 * para no dejar una tarjeta angosta con la mitad del contenedor vacío:
 *   · biblioteca con un único resultado (por filtro o por catálogo corto)
 *   · bloque "Más recursos" con un solo relacionado
 *
 * Desktop:  portada (≈33%) | información | CTA
 * Mobile:   portada → categoría → título → descripción → CTA
 *
 * El título vive solo en la columna de texto: la portada se renderiza sin
 * título para no repetirlo.
 */

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  resourceNounBare,
  resourcePath,
  resourceTopicLabels,
  resourceTypeLabels,
  type Resource,
} from "@/data/resources";
import ResourceCover from "@/components/resources/ResourceCover";
import { trackEvent } from "@/lib/analytics";

type ResourceWideCardProps = {
  resource: Resource;
  /** Origen del clic, para diferenciar biblioteca de "Más recursos". */
  source?: "library" | "related";
  priority?: boolean;
};

export default function ResourceWideCard({
  resource,
  source = "library",
  priority = false,
}: ResourceWideCardProps) {
  function handleClick() {
    trackEvent(source === "related" ? "related_resource_click" : "ebook_cta_click", {
      resource_slug: resource.slug,
      resource_title: resource.title,
      resource_type: resource.type,
      position: "wide",
    });
  }

  const eyebrow = [
    resourceTypeLabels[resource.type],
    resource.topics[0] ? resourceTopicLabels[resource.topics[0]] : null,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <Link
      href={resourcePath(resource.slug)}
      onClick={handleClick}
      className="group grid overflow-hidden rounded-3xl border border-gray-100 bg-white transition-all duration-200 hover:border-gray-200 hover:shadow-card-hover md:grid-cols-[minmax(0,0.33fr)_minmax(0,1fr)] lg:grid-cols-[minmax(0,0.32fr)_minmax(0,1fr)_auto]"
    >
      {/* Portada protagonista */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-50 md:aspect-auto md:min-h-[260px]">
        <ResourceCover
          resource={resource}
          variant="hero"
          showTitle={false}
          priority={priority}
        />
      </div>

      {/* Información */}
      <div className="flex flex-col justify-center px-7 py-8 lg:px-10 lg:py-10">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
        <h3 className="mt-3 text-xl font-bold leading-snug text-gray-900 lg:text-2xl">
          {resource.title}
        </h3>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-gray-500">
          {resource.description}
        </p>

        {/* CTA en flujo para mobile y tablet */}
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-all group-hover:gap-2.5 lg:hidden">
          Ver {resourceNounBare(resource.type)} <ArrowRight size={15} />
        </span>
      </div>

      {/* CTA como tercera columna en desktop */}
      <div className="hidden items-center pr-10 lg:flex">
        <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl border border-primary/20 bg-primary/[0.04] px-5 py-3 text-sm font-bold text-primary transition-all group-hover:gap-3 group-hover:bg-primary/[0.08]">
          Ver {resourceNounBare(resource.type)} <ArrowRight size={15} />
        </span>
      </div>
    </Link>
  );
}
