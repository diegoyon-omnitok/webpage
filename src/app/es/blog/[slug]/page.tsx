import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostPage, { LatamArticleCta } from "@/components/blog/BlogPostPage";
import { getBlogPostBySlug, latamBlogPosts } from "@/lib/blog";
import { buildMetadata, canonicalRoutes } from "@/lib/markets";

export function generateStaticParams() {
  return latamBlogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getBlogPostBySlug("latam", slug);
  if (!post) return {};

  return buildMetadata({
    title: post.seoTitle,
    description: post.metaDescription,
    path: post.path,
    locale: "es",
    keywords: [post.primaryKeyword, ...post.secondaryKeywords],
    openGraphImage: post.coverImage,
  });
}

export default async function LatamBlogPostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = getBlogPostBySlug("latam", slug);
  if (!post) notFound();

  return (
    <BlogPostPage
      post={post}
      blogLabel="Blog"
      homeHref={canonicalRoutes.latam.home}
      homeLabel="Inicio"
      blogHref={canonicalRoutes.latam.blog}
      cta={<LatamArticleCta />}
    />
  );
}
