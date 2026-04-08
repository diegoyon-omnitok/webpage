import { blogPostsEnCards } from "@/lib/blog";

export interface BlogPostEn {
  category: string;
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  href: string;
  date: string;
  coverImage?: string;
  coverImageAlt?: string;
}

export const blogPostsEn: BlogPostEn[] = blogPostsEnCards.map((post) => ({
  category: post.category,
  slug: post.slug,
  title: post.title,
  excerpt: post.excerpt,
  readTime: post.readTime,
  href: post.href,
  date: post.date,
  coverImage: post.coverImage,
  coverImageAlt: post.coverImageAlt,
}));

export const featuredPostEn = blogPostsEn[0] ?? null;
export const secondaryPostsEn = blogPostsEn.slice(1);
