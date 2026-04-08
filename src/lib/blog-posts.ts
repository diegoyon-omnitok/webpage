import { blogPostsCards } from "@/lib/blog";

export interface BlogPost {
  categoria: string;
  slug: string;
  titulo: string;
  excerpt: string;
  readTime: string;
  href: string;
  fecha: string;
  coverImage?: string;
  coverImageAlt?: string;
}

export const blogPosts: BlogPost[] = blogPostsCards.map((post) => ({
  categoria: post.category,
  slug: post.slug,
  titulo: post.title,
  excerpt: post.excerpt,
  readTime: post.readTime,
  href: post.href,
  fecha: post.date,
  coverImage: post.coverImage,
  coverImageAlt: post.coverImageAlt,
}));

export const postDestacado = blogPosts[0];
export const postsSecundarios = blogPosts.slice(1);
