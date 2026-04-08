import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { postDestacado, postsSecundarios } from "@/lib/blog-posts";
import SeoBreadcrumbs from "@/components/seo/SeoBreadcrumbs";
import { buildMetadata, canonicalRoutes, marketAlternates } from "@/lib/markets";

export const metadata: Metadata = buildMetadata({
  title: "Blog de Ecommerce, Digital Shelf y Retailers | Omnitok",
  description:
    "Explora contenidos sobre digital shelf, contenido enriquecido, retailers, marketplaces y ejecución digital para marcas en LATAM.",
  path: canonicalRoutes.latam.blog,
  locale: "es",
  keywords: [
    "blog de ecommerce para marcas",
    "blog de digital shelf",
    "blog de contenido enriquecido",
    "blog de retailers y marketplaces",
  ],
  alternates: {
    es: marketAlternates.blog.latam,
    "en-US": marketAlternates.blog.usa,
  },
});

export default function LatamBlogPage() {
  return (
    <>
      <section className="pt-28 pb-16 gradient-hero relative overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-5">
            <span className="text-xs font-medium text-white/80">Recursos / Blog</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Insights sobre ecommerce, digital shelf y retailers
          </h1>
          <p className="mt-4 text-xl font-semibold text-white max-w-2xl mx-auto">
            Recursos para marcas que venden en retailers y marketplaces
          </p>
          <p className="mt-3 text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Encuentra artículos, guías e insights para mejorar contenido de producto, visibilidad digital, ejecución
            en retailers y conversión en páginas de producto.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none">
            <path d="M0 40L1440 40L1440 10C1200 40 900 0 720 10C540 20 240 0 0 10L0 40Z" fill="white" />
          </svg>
        </div>
      </section>

      <section className="py-14 bg-white">
        <SeoBreadcrumbs
          items={[
            { label: "Inicio", href: canonicalRoutes.latam.home },
            { label: "Blog" },
          ]}
        />
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="mb-8 max-w-3xl text-sm leading-relaxed text-gray-500">
            Si buscas una solución comercial, también puedes explorar{" "}
            <Link href={canonicalRoutes.latam.dsa} className="font-semibold text-primary hover:underline">
              Digital Shelf Analytics
            </Link>
            ,{" "}
            <Link href={canonicalRoutes.latam.connect} className="font-semibold text-primary hover:underline">
              gestión de contenido de producto
            </Link>
            ,{" "}
            <Link href={canonicalRoutes.latam.content} className="font-semibold text-primary hover:underline">
              contenido enriquecido para ecommerce
            </Link>{" "}
            y nuestro{" "}
            <Link href={canonicalRoutes.latam.assistant} className="font-semibold text-primary hover:underline">
              asistente de compra para ecommerce
            </Link>
            .
          </p>

          {postDestacado ? (
            <>
              <Link
                href={postDestacado.href}
                className="group block bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 overflow-hidden mb-10"
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative h-48 md:min-h-[280px] overflow-hidden bg-gray-900">
                    {postDestacado.coverImage ? (
                      <>
                        <Image
                          src={postDestacado.coverImage}
                          alt={postDestacado.coverImageAlt ?? ""}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 100vw, 400px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/10" aria-hidden />
                      </>
                    ) : (
                      <div className="absolute inset-0 gradient-hero" aria-hidden />
                    )}
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">{postDestacado.categoria}</span>
                      <span className="text-gray-300">·</span>
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <Clock size={11} /> {postDestacado.readTime}
                      </div>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 leading-snug mb-3 group-hover:text-primary transition-colors">
                      {postDestacado.titulo}
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed mb-5">{postDestacado.excerpt}</p>
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                      Leer artículo <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {postsSecundarios.map((post) => (
                  <Link
                    key={post.href}
                    href={post.href}
                    className="group bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 overflow-hidden flex flex-col"
                  >
                    <div className="relative h-44 overflow-hidden bg-gray-900">
                      {post.coverImage ? (
                        <>
                          <Image
                            src={post.coverImage}
                            alt={post.coverImageAlt ?? ""}
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, 360px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" aria-hidden />
                        </>
                      ) : (
                        <div className="absolute inset-0 gradient-brand" aria-hidden />
                      )}
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-bold uppercase tracking-wider">
                        {post.categoria}
                      </span>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-1 text-xs text-gray-400 mb-2">
                        <Clock size={11} /> {post.readTime}
                      </div>
                      <h2 className="text-sm font-bold text-gray-900 leading-snug mb-2 flex-1 group-hover:text-primary transition-colors">
                        {post.titulo}
                      </h2>
                      <p className="text-xs text-gray-500 leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                        <span className="text-xs text-gray-400">{post.fecha}</span>
                        <div className="flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-1.5 transition-all">
                          Leer <ArrowRight size={12} />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </section>
    </>
  );
}
