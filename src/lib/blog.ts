import blogPostsData from "@/data/blog-posts.generated.json";
import blogPostsPtBrData from "@/data/blog-posts-pt-br.json";
import blogRedirectsData from "@/data/blog-redirects.generated.json";

export type BlogMarket = "latam" | "usa" | "brasil";

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
  language: "es" | "en-US" | "pt-BR";
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

// Los posts pt-BR son traducciones curadas de los posts LATAM (ver
// docs y src/data/blog-posts-pt-br.json); no salen del CSV de migración.
const blogPosts = [...(blogPostsData as BlogRecord[]), ...(blogPostsPtBrData as BlogRecord[])];
export const blogRedirectMap = blogRedirectsData as Record<string, string>;

// El listado del blog se ordena por fecha (más nuevo primero), de modo que el
// post más reciente queda siempre como destacado (postDestacado = blogPostsCards[0]).
const newestFirst = (a: BlogRecord, b: BlogRecord) =>
  a.publishedAt < b.publishedAt ? 1 : a.publishedAt > b.publishedAt ? -1 : 0;

export const latamBlogPosts = blogPosts
  .filter((post) => post.market === "latam")
  .sort(newestFirst);
export const usaBlogPosts = blogPosts
  .filter((post) => post.market === "usa")
  .sort(newestFirst);
export const brasilBlogPosts = blogPosts
  .filter((post) => post.market === "brasil")
  .sort(newestFirst);

export function getBlogPostBySlug(market: BlogMarket, slug: string) {
  return blogPosts.find((post) => post.market === market && post.slug === slug) ?? null;
}

export function getBlogPostByPath(pathname: string) {
  return blogPosts.find((post) => post.path === pathname) ?? null;
}

export function getBlogPostsByMarket(market: BlogMarket) {
  if (market === "latam") return latamBlogPosts;
  if (market === "brasil") return brasilBlogPosts;
  return usaBlogPosts;
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
export const blogPostsPtBrCards = brasilBlogPosts.map(toLatamCard);

export const featuredPostPtBr = blogPostsPtBrCards[0] ?? null;
export const secondaryPostsPtBr = blogPostsPtBrCards.slice(1);

export const postDestacado = blogPostsCards[0];
export const postsSecundarios = blogPostsCards.slice(1);

export const featuredPostEn = blogPostsEnCards[0] ?? null;
export const secondaryPostsEn = blogPostsEnCards.slice(1);

// Los posts pt-BR usan el id del post LATAM original + sufijo "-pt-br", lo que
// permite emparejar cada post con su traducción para hreflang.
const brasilByLatamId = new Map(brasilBlogPosts.map((post) => [post.id.replace(/-pt-br$/, ""), post]));
const latamById = new Map(latamBlogPosts.map((post) => [post.id, post]));

export function getTranslatedPost(post: BlogRecord): BlogRecord | null {
  if (post.market === "latam") return brasilByLatamId.get(post.id) ?? null;
  if (post.market === "brasil") return latamById.get(post.id.replace(/-pt-br$/, "")) ?? null;
  return null;
}

export function getSiblingPosts(post: BlogRecord, limit = 3) {
  return getBlogPostsByMarket(post.market)
    .filter((candidate) => candidate.slug !== post.slug)
    .slice(0, limit);
}
