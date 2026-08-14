import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Site de página única. O sitemap existe mesmo assim porque é por ele que o
 * Google Search Console confirma a indexação e acompanha a data de alteração.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
