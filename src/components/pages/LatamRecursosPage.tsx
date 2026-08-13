/**
 * /es/recursos — Biblioteca de recursos descargables.
 *
 * Los recursos se leen de `src/data/resources.ts`. Para publicar uno nuevo no
 * hay que tocar esta página.
 */

import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SeoBreadcrumbs from "@/components/seo/SeoBreadcrumbs";
import ResourceLibrary from "@/components/resources/ResourceLibrary";
import { getAllResources, resourcePath } from "@/data/resources";
import { SITE_URL, canonicalRoutes } from "@/lib/markets";

export default function LatamRecursosPage() {
  const resources = getAllResources();

  /* Schema: colección de recursos, para que Google entienda el listado. */
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Recursos de Omnitok",
    description:
      "Ebooks, guías, reportes y estudios sobre eCommerce, Product Experience, PDP, Digital Shelf y retail digital.",
    url: `${SITE_URL}${canonicalRoutes.latam.recursos}`,
    inLanguage: "es",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: resources.map((resource, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: resource.title,
        url: `${SITE_URL}${resourcePath(resource.slug)}`,
      })),
    },
  };

  return (
    <>
      {/* ── Hero compacto: la biblioteca empieza de inmediato ── */}
      <section className="relative overflow-hidden pt-28 pb-14 gradient-hero">
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
            Banco de recursos
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-white lg:text-[42px]">
            Aprende sobre digital shelf, PDP y contenido de producto
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70">
            Nuestro banco de recursos reúne ebooks, guías, reportes y estudios para que tomes
            mejores decisiones en el canal digital. Elige el tema que te interesa y descárgalo
            gratis.
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
        items={[{ label: "Inicio", href: canonicalRoutes.latam.home }, { label: "Recursos" }]}
      />

      {/* ── Biblioteca ── */}
      <section className="bg-white pb-20 pt-6">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          {/* Suspense: ResourceLibrary lee los filtros de la query string. */}
          <Suspense fallback={<div className="min-h-96" />}>
            <ResourceLibrary resources={resources} />
          </Suspense>
        </div>
      </section>

      {/* ── Enlaces internos a la plataforma (SEO + navegación) ── */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Del aprendizaje a la ejecución
            </p>
            <h2 className="mt-3 text-2xl font-bold text-gray-900 lg:text-3xl">
              Ya sabes qué revisar. Ahora mira cómo se ejecuta
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-500">
              Los recursos te dan el criterio. Estas páginas muestran cómo Omnitok lo lleva a la
              práctica en retailers y marketplaces.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Digital Shelf Analytics",
                desc: "Monitorea precio, disponibilidad, contenido y visibilidad en cada canal.",
                href: canonicalRoutes.latam.dsa,
              },
              {
                title: "Contenido enriquecido",
                desc: "Mejora la claridad de la página de producto y mide su desempeño.",
                href: canonicalRoutes.latam.content,
              },
              {
                title: "Gestión de contenido de producto",
                desc: "Centraliza la información y adáptala al formato de cada retailer.",
                href: canonicalRoutes.latam.connect,
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
                  Ver página <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
    </>
  );
}
