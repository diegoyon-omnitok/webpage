import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostPage, { UsaArticleCta } from "@/components/blog/BlogPostPage";
import { getBlogPostBySlug, usaBlogPosts } from "@/lib/blog";
import { buildMetadata, canonicalRoutes } from "@/lib/markets";

export function generateStaticParams() {
  return usaBlogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getBlogPostBySlug("usa", slug);
  if (!post) return {};

  return buildMetadata({
    title: post.seoTitle,
    description: post.metaDescription,
    path: post.path,
    locale: "en-US",
    keywords: [post.primaryKeyword, ...post.secondaryKeywords],
    openGraphImage: post.coverImage,
  });
}

export default async function UsaBlogPostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = getBlogPostBySlug("usa", slug);
  if (!post) notFound();

  return (
    <BlogPostPage
      post={post}
      blogLabel="Blog"
      homeHref={canonicalRoutes.usa.home}
      homeLabel="Home"
      blogHref={canonicalRoutes.usa.blog}
      cta={<UsaArticleCta />}
    />
  );
}
