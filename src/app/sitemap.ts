import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * O sitemap é por onde o Google Search Console confirma a indexação e
 * acompanha a data de alteração de cada página.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const agora = new Date();

  return [
    {
      url: site.url,
      lastModified: agora,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      // A jornada do Mentory. Prioridade menor que a home por ser conteúdo de
      // aprofundamento, mas alta o bastante para ser rastreada: é a página que
      // pode ranquear para quem procura formação em pós-operatório.
      url: `${site.url}/mentory-fisio`,
      lastModified: agora,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
