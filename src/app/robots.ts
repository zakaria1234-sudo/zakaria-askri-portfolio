import type { MetadataRoute } from "next";
import { site } from "@/content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: site.allowIndex
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
