import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, FlaskConical } from "lucide-react";
import labsCover from "../../../omnitok content dashboard.png";
import { blogPosts } from "@/lib/blog-posts";
import { canonicalRoutes } from "@/lib/markets";

export default function ResourcesHub() {
  const latestPosts = blogPosts.slice(0, 4);
  const resources = [
    ...latestPosts.map((post) => ({
      type: "Blog",
      icon: BookOpen,
      title: post.titulo,
      desc: post.excerpt,
      href: post.href,
      cta: "Leer artículo",
      coverImage: post.coverImage,
      coverImageAlt: post.coverImageAlt,
      external: false,
    })),
    {
      type: "Labs",
      icon: FlaskConical,
      title: "Omnitok LABS",
      desc: "Diagnóstico gratuito: Share of Search, análisis de PDP y bandas de precio con insights generados por IA.",
      href: "https://lab.omnitok.com/",
      cta: "Ir a Omnitok LABS",
      coverImage: labsCover,
      coverImageAlt: "Omnitok LABS con panel de métricas y analítica de ejecución digital",
      external: true,
    },
  ] as const;

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12">
          <div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full mb-4"
              style={{ background: "linear-gradient(90deg, #FF177B 0%, #4D4A9D 100%)" }}>
              <span className="text-xs font-semibold text-white">Recursos</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Insights sobre ecommerce, digital shelf y retailers
            </h2>
          </div>
          <Link
            href={canonicalRoutes.latam.recursos}
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors whitespace-nowrap"
          >
            Ver todos los recursos
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {resources.map((r: { type: string; icon: React.ElementType; title: string; desc: string; href: string; cta: string; external?: boolean; coverImage?: string; coverImageAlt?: string }) => (
            <div
              key={r.title}
              className="bg-white rounded-2xl shadow-card overflow-hidden hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
              style={{ border: "1.5px solid #4D4A9D33" }}
            >
              {/* Top gradient strip */}
              <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #FF177B 0%, #4D4A9D 100%)" }} />

              {r.coverImage && (
                <div className="w-full h-36 overflow-hidden">
                  <Image
                    src={r.coverImage}
                    alt={r.coverImageAlt ?? r.title}
                    width={400}
                    height={144}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <r.icon size={16} className="text-accent" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">{r.type}</span>
                </div>

                <h3 className="text-base font-bold text-primary mb-2 leading-snug">{r.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{r.desc}</p>

                {r.external ? (
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 mt-5 text-sm font-bold text-gray-900 hover:text-accent hover:gap-2 transition-all"
                  >
                    {r.cta}
                    <ArrowRight size={14} />
                  </a>
                ) : (
                  <Link
                    href={r.href}
                    className="flex items-center gap-1.5 mt-5 text-sm font-bold text-gray-900 hover:text-accent hover:gap-2 transition-all"
                  >
                    {r.cta}
                    <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
