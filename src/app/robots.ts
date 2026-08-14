import type { MetadataRoute } from "next";
import { site, indexavel } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Sem domínio próprio configurado, o site está na URL de aprovação da
  // Vercel. Bloquear aqui, além da meta robots, impede que a versão
  // provisória entre no índice e depois dispute com o domínio definitivo.
  if (!indexavel) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
