import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/markets";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // /recursos/pdf/ guarda los PDF que se entregan tras el formulario:
      // no deben indexarse ni competir con la landing del recurso.
      disallow: ["/api/", "/preview/", "/biblioteca/", "/recursos/pdf/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
