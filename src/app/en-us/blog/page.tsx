import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { blogPostsEn, featuredPostEn, secondaryPostsEn } from "@/lib/blog-posts-en";
import SeoBreadcrumbs from "@/components/seo/SeoBreadcrumbs";
import { buildMetadata, canonicalRoutes, marketAlternates } from "@/lib/markets";

export const metadata: Metadata = buildMetadata({
  title: "MAP Monitoring and Digital Shelf Insights | Omnitok Blog",
  description:
    "Explore articles on MAP monitoring, digital shelf analytics, pricing visibility and ecommerce brand protection.",
  path: canonicalRoutes.usa.blog,
  locale: "en-US",
  keywords: [
    "MAP monitoring blog",
    "MAP compliance blog",
    "digital shelf analytics blog",
    "pricing compliance insights",
  ],
  alternates: {
    es: marketAlternates.blog.latam,
    "en-US": marketAlternates.blog.usa,
  },
});

export default function UsaBlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 gradient-hero relative overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-5">
            <span className="text-xs font-medium text-white/80">Resources / Blog</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Insights on MAP Monitoring and Digital Shelf Analytics
          </h1>
          <p className="mt-4 text-xl font-semibold text-white max-w-2xl mx-auto">
            Research, guidance and commentary for brand teams
          </p>
          <p className="mt-3 text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Explore practical articles on MAP monitoring, pricing visibility, unauthorized seller monitoring and digital shelf execution without turning this page into a product pitch.
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
            { label: "Home", href: canonicalRoutes.usa.home },
            { label: "Blog" },
          ]}
        />
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="mb-8 max-w-3xl text-sm leading-relaxed text-gray-500">
            Looking for product pages instead of editorial content? Explore our{" "}
            <Link href={canonicalRoutes.usa.map} className="font-semibold text-primary hover:underline">
              MAP monitoring software
            </Link>{" "}
            and{" "}
            <Link href={canonicalRoutes.usa.dsa} className="font-semibold text-primary hover:underline">
              digital shelf analytics software
            </Link>{" "}
            to see how Omnitok supports price compliance, unauthorized seller monitoring and retailer visibility.
          </p>

          {blogPostsEn.length === 0 ? (
            /* Empty state — posts coming soon */
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl gradient-hero">
                <span className="text-3xl">✍️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Articles coming soon</h2>
              <p className="mt-3 max-w-md text-base text-gray-500 leading-relaxed">
                We&apos;re preparing fresh content on MAP compliance, pricing strategy and digital shelf analytics. Check back soon.
              </p>
              <Link
                href={canonicalRoutes.usa.contact}
                className="mt-8 gradient-brand inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-opacity hover:opacity-90"
              >
                Talk to us <ArrowRight size={16} />
              </Link>
            </div>
          ) : (
            <>
              {/* Featured post */}
              {featuredPostEn && (
                <Link
                  href={featuredPostEn.href}
                  className="group block bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 overflow-hidden mb-10"
                >
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-48 md:min-h-[280px] overflow-hidden bg-gray-900">
                      {featuredPostEn.coverImage ? (
                        <>
                          <Image
                            src={featuredPostEn.coverImage}
                            alt={featuredPostEn.coverImageAlt ?? ""}
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 768px) 100vw, 400px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/10" aria-hidden />
                        </>
                      ) : (
                        <div className="absolute inset-0 gradient-hero" aria-hidden />
                      )}
                      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8">
                        <span className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-bold uppercase tracking-wider mb-3">
                          Featured
                        </span>
                        <p className="text-white/85 text-sm">{featuredPostEn.category}</p>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">
                          {featuredPostEn.category}
                        </span>
                        <span className="text-gray-300">·</span>
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <Clock size={11} /> {featuredPostEn.readTime}
                        </div>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 leading-snug mb-3 group-hover:text-primary transition-colors">
                        {featuredPostEn.title}
                      </h2>
                      <p className="text-sm text-gray-500 leading-relaxed mb-5">{featuredPostEn.excerpt}</p>
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                        Read article <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              {/* Grid of posts */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {secondaryPostsEn.map((post) => (
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
                        {post.category}
                      </span>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-1 text-xs text-gray-400 mb-2">
                        <Clock size={11} /> {post.readTime}
                      </div>
                      <h2 className="text-sm font-bold text-gray-900 leading-snug mb-2 flex-1 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-xs text-gray-500 leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                        <span className="text-xs text-gray-400">{post.date}</span>
                        <div className="flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-1.5 transition-all">
                          Read <ArrowRight size={12} />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}

        </div>
      </section>

      {/* CTA subscribe */}
      <section className="py-14 bg-gray-50 border-t border-gray-100">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Stay close to the latest MAP and digital shelf insights
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            If you want to discuss how these topics apply to your brand, our team can walk you through MAP monitoring and digital shelf workflows.
          </p>
          <Link
            href={canonicalRoutes.usa.contact}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white gradient-brand hover:opacity-90 transition-opacity shadow-sm"
          >
            Talk to us <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
