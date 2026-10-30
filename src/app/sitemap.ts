import type { MetadataRoute } from "next";
import { getPublishedProjects, site } from "@/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(site.contentUpdated);

  return [
    {
      url: site.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...getPublishedProjects().map((project) => ({
      url: `${site.url}/projects/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
