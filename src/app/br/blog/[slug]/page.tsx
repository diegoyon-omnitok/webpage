import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostPage, { BrasilArticleCta } from "@/components/blog/BlogPostPage";
import { getBlogPostBySlug, getTranslatedPost, brasilBlogPosts } from "@/lib/blog";
import { buildMetadata, canonicalRoutes } from "@/lib/markets";

export function generateStaticParams() {
  return brasilBlogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getBlogPostBySlug("brasil", slug);
  if (!post) return {};

  const translated = getTranslatedPost(post);

  return buildMetadata({
    title: post.seoTitle,
    description: post.metaDescription,
    path: post.path,
    locale: "pt-BR",
    keywords: [post.primaryKeyword, ...post.secondaryKeywords],
    openGraphImage: post.coverImage,
    alternates: translated
      ? { es: translated.path, "pt-BR": post.path, "x-default": translated.path }
      : undefined,
  });
}

export default async function BrasilBlogPostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = getBlogPostBySlug("brasil", slug);
  if (!post) notFound();

  return (
    <BlogPostPage
      post={post}
      blogLabel="Blog"
      homeHref={canonicalRoutes.brasil.home}
      homeLabel="Início"
      blogHref={canonicalRoutes.brasil.blog}
      cta={<BrasilArticleCta />}
    />
  );
}
