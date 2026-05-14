import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import RelatedLinksSection from "@/components/seo/RelatedLinksSection";
import SeoBreadcrumbs from "@/components/seo/SeoBreadcrumbs";
import BlogContent from "@/components/blog/BlogContent";
import { getSiblingPosts, type BlogRecord } from "@/lib/blog";
import { canonicalRoutes, SITE_URL } from "@/lib/markets";

type BlogPostPageProps = {
  post: BlogRecord;
  blogLabel: string;
  homeHref: string;
  homeLabel: string;
  blogHref: string;
  cta: ReactNode;
};

export default function BlogPostPage({
  post,
  blogLabel,
  homeHref,
  homeLabel,
  blogHref,
  cta,
}: BlogPostPageProps) {
  const latestArticles = getSiblingPosts(post, 3);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.h1,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { "@type": "Organization", name: "Omnitok" },
    publisher: {
      "@type": "Organization",
      name: "Omnitok",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/omnitok-logo.svg`,
      },
    },
    image: `${SITE_URL}${post.coverImage}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${post.path}`,
    },
    keywords: [post.primaryKeyword, ...post.secondaryKeywords].join(", "),
    inLanguage: post.language,
    articleSection: post.category,
  };

  const faqJsonLd = post.faqItems?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {faqJsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      ) : null}

      <section className="relative overflow-hidden bg-white pt-28 pb-6">
        <div className="absolute inset-x-0 top-0 h-28 gradient-hero" aria-hidden />

        <SeoBreadcrumbs
          items={[
            { label: homeLabel, href: homeHref },
            { label: blogLabel, href: blogHref },
            { label: post.h1 },
          ]}
        />

        <article className="mx-auto max-w-[760px] px-5 pb-20 sm:px-6 lg:px-0">
          <header className="mb-10 border-b border-gray-100 pb-8">
            <nav className="mb-8">
              <Link
                href={blogHref}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-80 transition-opacity"
              >
                <ArrowLeft size={16} />
                {blogLabel}
              </Link>
            </nav>

            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500">
              <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-bold uppercase tracking-wider text-accent">
                {post.category}
              </span>
              <span>{post.readTime}</span>
              <span>{post.dateLabel}</span>
            </div>
            <h1 className="max-w-3xl text-3xl font-bold leading-tight text-gray-900 lg:text-5xl">{post.h1}</h1>
            <p className="mt-5 max-w-2xl font-[var(--font-open-sans)] text-lg leading-relaxed text-gray-500">
              {post.excerpt}
            </p>
          </header>

          <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-3xl bg-gray-100 shadow-card">
            <Image
              src={post.coverImage}
              alt={post.coverImageAlt}
              title={post.h1}
              fill
              priority
              className="object-cover object-[30%_50%]"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          </div>

          <BlogContent rawText={post.rawText} leadExcerpt={post.excerpt} />

          {post.faqItems?.length ? (
            <section className="mt-14 border-t border-gray-100 pt-10">
              <h6 className="mb-6 text-2xl font-bold text-gray-900">
                {post.market === "usa" ? "Frequently Asked Questions" : "Preguntas frecuentes"}
              </h6>
              <dl className="space-y-6">
                {post.faqItems.map((item) => (
                  <div key={item.question} className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6">
                    <dt className="text-base font-semibold text-gray-900">{item.question}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-gray-600">{item.answer}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ) : null}

          <div className="mt-16 rounded-3xl gradient-hero p-8 text-white shadow-card">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-pink-300">
              {post.market === "usa" ? "Next step" : "Siguiente paso"}
            </p>
            <h2 className="text-2xl font-bold text-white">
              {post.market === "usa" ? "Connect insights with action" : "Convierte estos aprendizajes en ejecucion"}
            </h2>
            <p className="mt-3 max-w-2xl font-[var(--font-open-sans)] text-base leading-relaxed text-white/80">
              {post.market === "usa"
                ? "If your team is reviewing MAP enforcement, pricing visibility or unauthorized seller monitoring, Omnitok can help you operationalize the next move."
                : "Si tu equipo necesita mejorar contenido, consistencia digital o conversion en retailers y marketplaces, Omnitok puede ayudarte a pasar de estrategia a ejecucion."}
            </p>
            <div className="mt-6">{cta}</div>
          </div>

          {latestArticles.length > 0 ? (
            <section className="mt-16 border-t border-gray-100 pt-14">
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  {post.market === "usa" ? "Latest articles" : "Lee los ultimos articulos"}
                </p>
                <h2 className="mt-3 text-2xl font-bold text-gray-900 lg:text-3xl">
                  {post.market === "usa"
                    ? "Read the latest articles"
                    : "Lee los ultimos articulos"}
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {latestArticles.map((article) => (
                  <Link
                    key={article.path}
                    href={article.path}
                    className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                  >
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <Image
                        src={article.coverImage}
                        alt={article.coverImageAlt}
                        title={article.title}
                        fill
                        className="object-cover object-[30%_50%] transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 360px"
                      />
                    </div>
                    <div className="p-5">
                      <div className="mb-3 flex items-center gap-2 text-xs text-gray-400">
                        <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 font-bold uppercase tracking-wider text-accent">
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={11} />
                          {article.readTime}
                        </span>
                      </div>
                      <h3 className="text-base font-bold leading-snug text-gray-900 transition-colors group-hover:text-primary">
                        {article.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-gray-500">{article.excerpt}</p>
                      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        {post.market === "usa" ? "Read article" : "Leer artículo"}
                        <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </article>
      </section>

      <RelatedLinksSection
        eyebrow={post.market === "usa" ? "Related resources" : "Recursos relacionados"}
        title={post.market === "usa" ? "Keep building your strategy" : "Sigue profundizando la estrategia"}
        description={
          post.market === "usa"
            ? "Explore the Omnitok pages and workflows that support the themes covered in this article."
            : "Explora las paginas y soluciones de Omnitok que complementan el tema de este articulo."
        }
        links={post.relatedLinks}
      />
    </>
  );
}

export function UsaArticleCta() {
  return (
    <Link
      href={canonicalRoutes.usa.contact}
      className="inline-flex items-center rounded-xl bg-white/12 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur-sm transition-opacity hover:bg-white/18"
    >
      Talk to sales
    </Link>
  );
}

export function LatamArticleCta() {
  return (
    <Link
      href={canonicalRoutes.latam.contacto}
      className="inline-flex items-center rounded-xl bg-white/12 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur-sm transition-opacity hover:bg-white/18"
    >
      Conversemos
    </Link>
  );
}
