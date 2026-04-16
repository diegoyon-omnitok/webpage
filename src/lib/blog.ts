import blogPostsData from "@/data/blog-posts.generated.json";
import blogRedirectsData from "@/data/blog-redirects.generated.json";

export type BlogMarket = "latam" | "usa";

export type BlogRelatedLink = {
  title: string;
  description: string;
  href: string;
  anchor: string;
};

export type BlogFaqItem = {
  question: string;
  answer: string;
};

export type BlogRecord = {
  id: string;
  market: BlogMarket;
  category: string;
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  excerpt: string;
  publishedAt: string;
  dateLabel: string;
  readTime: string;
  path: string;
  originalUrl: string;
  originalPath: string;
  legacyPaths: string[];
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  coverImage: string;
  coverImageAlt: string;
  imageOriginalUrl: string | null;
  relatedLinks: BlogRelatedLink[];
  faqItems?: BlogFaqItem[];
  bodyHash: string;
  rawText: string;
  contentHtml: string;
  language: "es" | "en-US";
};

export type BlogCard = {
  category: string;
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  href: string;
  date: string;
  coverImage?: string;
  coverImageAlt?: string;
};

const blogPosts = blogPostsData as BlogRecord[];
export const blogRedirectMap = blogRedirectsData as Record<string, string>;

export const latamBlogPosts = blogPosts.filter((post) => post.market === "latam");
export const usaBlogPosts = blogPosts.filter((post) => post.market === "usa");

export function getBlogPostBySlug(market: BlogMarket, slug: string) {
  return blogPosts.find((post) => post.market === market && post.slug === slug) ?? null;
}

export function getBlogPostByPath(pathname: string) {
  return blogPosts.find((post) => post.path === pathname) ?? null;
}

export function getBlogPostsByMarket(market: BlogMarket) {
  return market === "latam" ? latamBlogPosts : usaBlogPosts;
}

function toLatamCard(post: BlogRecord): BlogCard {
  return {
    category: post.category,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    readTime: post.readTime,
    href: post.path,
    date: post.dateLabel,
    coverImage: post.coverImage,
    coverImageAlt: post.coverImageAlt,
  };
}

function toUsaCard(post: BlogRecord): BlogCard {
  return {
    category: post.category,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    readTime: post.readTime,
    href: post.path,
    date: post.dateLabel,
    coverImage: post.coverImage,
    coverImageAlt: post.coverImageAlt,
  };
}

export const blogPostsCards = latamBlogPosts.map(toLatamCard);
export const blogPostsEnCards = usaBlogPosts.map(toUsaCard);

export const postDestacado = blogPostsCards[0];
export const postsSecundarios = blogPostsCards.slice(1);

export const featuredPostEn = blogPostsEnCards[0] ?? null;
export const secondaryPostsEn = blogPostsEnCards.slice(1);

export function getSiblingPosts(post: BlogRecord, limit = 3) {
  return getBlogPostsByMarket(post.market)
    .filter((candidate) => candidate.slug !== post.slug)
    .slice(0, limit);
}
