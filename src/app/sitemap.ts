import type { MetadataRoute } from "next";

import { practiceAreas, team } from "@/content/site";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes = [
    "",
    "/sobre",
    "/areas-de-atuacao",
    "/equipe",
    "/faq",
    "/contato",
    "/politica-de-privacidade",
  ];

  const areaRoutes = practiceAreas.map((area) => `/areas-de-atuacao/${area.slug}`);
  const teamRoutes = team.map((lawyer) => `/equipe/${lawyer.slug}`);

  return [...baseRoutes, ...areaRoutes, ...teamRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
