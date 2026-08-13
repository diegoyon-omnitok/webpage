"use client";

/**
 * Biblioteca de recursos: buscador + filtros + grilla.
 *
 * Los filtros son client-side (useMemo sobre el array ya renderizado): cambian
 * la vista sin recargar la página ni pedir nada al servidor. No se agregan
 * librerías: solo React y Tailwind.
 */

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";
import {
  resourceTopicLabels,
  resourceTopicOrder,
  resourceTypeLabels,
  resourceTypeOrder,
  type Resource,
  type ResourceTopic,
  type ResourceType,
} from "@/data/resources";
import ResourceCard from "@/components/resources/ResourceCard";
import ResourceFeaturedCard from "@/components/resources/ResourceFeaturedCard";
import ResourceWideCard from "@/components/resources/ResourceWideCard";

type ResourceLibraryProps = {
  resources: Resource[];
};

/** Tarjetas visibles antes de pulsar "Cargar más". */
const PAGE_SIZE = 9;

type TypeFilter = "all" | ResourceType;
type TopicFilter = "all" | ResourceTopic;

/** Minúsculas y sin tildes, para que el buscador no dependa de la acentuación. */
function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

export default function ResourceLibrary({ resources }: ResourceLibraryProps) {
  /**
   * La URL puede pre-seleccionar los filtros: /es/recursos?tipo=ebook
   * (así funciona el enlace "Ebooks y guías" del menú). Se lee con
   * useSearchParams para que servidor y cliente rendericen lo mismo.
   */
  const searchParams = useSearchParams();

  const [type, setType] = useState<TypeFilter>(() => {
    const value = searchParams.get("tipo") ?? searchParams.get("type");
    return value && resourceTypeOrder.includes(value as ResourceType)
      ? (value as ResourceType)
      : "all";
  });
  const [topic, setTopic] = useState<TopicFilter>(() => {
    const value = searchParams.get("tema") ?? searchParams.get("topic");
    return value && resourceTopicOrder.includes(value as ResourceTopic)
      ? (value as ResourceTopic)
      : "all";
  });
  const [query, setQuery] = useState("");

  /** Mantiene la URL en sintonía con los filtros, para poder compartirla. */
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (type === "all") params.delete("tipo");
    else params.set("tipo", type);
    if (topic === "all") params.delete("tema");
    else params.set("tema", topic);
    params.delete("type");
    params.delete("topic");

    const search = params.toString();
    const next = `${window.location.pathname}${search ? `?${search}` : ""}`;
    window.history.replaceState(null, "", next);
  }, [topic, type]);

  /** Solo se ofrecen los filtros que tienen recursos detrás. */
  const availableTypes = useMemo(
    () => resourceTypeOrder.filter((value) => resources.some((r) => r.type === value)),
    [resources]
  );
  const availableTopics = useMemo(
    () => resourceTopicOrder.filter((value) => resources.some((r) => r.topics.includes(value))),
    [resources]
  );

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    return resources.filter((resource) => {
      if (type !== "all" && resource.type !== type) return false;
      if (topic !== "all" && !resource.topics.includes(topic)) return false;
      if (!q) return true;
      const haystack = normalize(
        `${resource.title} ${resource.description} ${resource.topics
          .map((item) => resourceTopicLabels[item])
          .join(" ")} ${resourceTypeLabels[resource.type]}`
      );
      return haystack.includes(q);
    });
  }, [query, resources, topic, type]);

  const hasActiveFilters = type !== "all" || topic !== "all" || query.trim().length > 0;

  /** Sin filtros, el destacado sale arriba y no se repite en la grilla. */
  const featured = !hasActiveFilters ? filtered.find((item) => item.featured) : undefined;
  const gridResources = featured
    ? filtered.filter((item) => item.slug !== featured.slug)
    : filtered;

  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visible = gridResources.slice(0, visibleCount);
  const remaining = gridResources.length - visible.length;

  function resetFilters() {
    setType("all");
    setTopic("all");
    setQuery("");
    setVisibleCount(PAGE_SIZE);
  }

  const chipBase =
    "rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-150";
  const chipOn = "border-primary bg-primary text-white";
  const chipOff = "border-gray-200 bg-white text-gray-600 hover:border-primary/40 hover:text-primary";

  return (
    <div>
      {/* ── Buscador ── */}
      <div className="mx-auto max-w-xl">
        <label htmlFor="resource-search" className="sr-only">
          Buscar recursos
        </label>
        <div className="relative">
          <Search
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            id="resource-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="¿Qué estás buscando?"
            className="w-full rounded-2xl border border-gray-200 bg-white py-3.5 pl-11 pr-4 text-base text-gray-800 shadow-sm outline-none transition-colors placeholder:text-gray-400 focus:border-primary"
          />
        </div>
      </div>

      {/* ── Filtros ── */}
      <div className="mt-10 space-y-6">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
            Tipo de contenido
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setType("all")}
              className={`${chipBase} ${type === "all" ? chipOn : chipOff}`}
            >
              Todos
            </button>
            {availableTypes.map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setType(value)}
                className={`${chipBase} ${type === value ? chipOn : chipOff}`}
              >
                {resourceTypeLabels[value]}
              </button>
            ))}
          </div>
        </div>

        {availableTopics.length > 1 ? (
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
              Temática
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setTopic("all")}
                className={`${chipBase} ${topic === "all" ? chipOn : chipOff}`}
              >
                Todas
              </button>
              {availableTopics.map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setTopic(value)}
                  className={`${chipBase} ${topic === value ? chipOn : chipOff}`}
                >
                  {resourceTopicLabels[value]}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      {/* ── Resultado ── */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-gray-500">
          {filtered.length === resources.length
            ? `${resources.length} ${resources.length === 1 ? "recurso" : "recursos"}`
            : `${filtered.length} de ${resources.length} recursos`}
        </p>
        {hasActiveFilters ? (
          <button
            type="button"
            onClick={resetFilters}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            <X size={14} /> Limpiar filtros
          </button>
        ) : null}
      </div>

      {/* ── Destacado + grilla: 1 / 2 / 3 columnas ── */}
      {filtered.length > 0 ? (
        <>
          {featured ? (
            <div className="mt-6">
              <ResourceFeaturedCard resource={featured} />
            </div>
          ) : null}

          {/*
            El layout se adapta a cuántos resultados quedan, para que un
            resultado único no se vea como una tarjeta angosta con la fila vacía:
              1 resultado  → tarjeta horizontal
              2 resultados → 2 columnas
              3 o más      → 3 columnas
          */}
          {visible.length === 1 ? (
            <div className="mt-6">
              <ResourceWideCard resource={visible[0]} priority={!featured} />
            </div>
          ) : visible.length > 1 ? (
            <div
              className={`mt-6 grid gap-6 sm:grid-cols-2 ${
                visible.length >= 3 ? "lg:grid-cols-3" : ""
              }`}
            >
              {visible.map((resource) => (
                <ResourceCard key={resource.slug} resource={resource} />
              ))}
            </div>
          ) : null}

          {remaining > 0 ? (
            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-primary hover:text-primary"
              >
                Cargar más recursos
                <span className="text-gray-400">({remaining})</span>
              </button>
            </div>
          ) : null}
        </>
      ) : (
        <div className="mt-6 rounded-3xl border border-dashed border-gray-200 bg-gray-50 px-6 py-14 text-center">
          <p className="text-base font-semibold text-gray-700">
            No encontramos recursos con esos filtros.
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
            Prueba con otra temática o limpia los filtros para ver la biblioteca completa.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Ver todos los recursos
          </button>
        </div>
      )}
    </div>
  );
}
