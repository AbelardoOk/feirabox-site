import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: MetadataRoute.Sitemap = [
    {
      url: SITE.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  for (const section of SITE.sections) {
    pages.push({
      url: `${SITE.url}/#${section.id}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: section.id === "avise-me" ? 0.9 : 0.7,
    });
  }

  return pages;
}
