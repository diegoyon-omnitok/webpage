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

type ResourceCardProps = {
  resource: Resource;
  /** Origen del clic, para diferenciar biblioteca vs "Sigue aprendiendo". */
  source?: "library" | "related";
};

export default function ResourceCard({ resource, source = "library" }: ResourceCardProps) {
  function handleClick() {
    trackEvent(source === "related" ? "related_resource_click" : "ebook_cta_click", {
      resource_slug: resource.slug,
      resource_title: resource.title,
      resource_type: resource.type,
    });
  }

  return (
    <Link
      href={resourcePath(resource.slug)}
      onClick={handleClick}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50">
        <ResourceCover resource={resource} />
        {/* El badge "Destacado" no aplica en el bloque de relacionados. */}
        {resource.featured && source !== "related" ? (
          <span className="absolute right-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
            Destacado
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
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

        <h3 className="mt-3 text-lg font-bold leading-snug text-gray-900">{resource.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-500">
          {resource.description}
        </p>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
          Ver recurso <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}
