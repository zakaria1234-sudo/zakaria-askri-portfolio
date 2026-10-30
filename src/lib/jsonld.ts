import { profile, site, socials } from "@/content";
import type { Project } from "@/content/types";

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    url: site.url,
    ...(profile.email ? { email: `mailto:${profile.email}` } : {}),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tunis",
      addressCountry: "TN",
    },
    sameAs: socials
      .map((social) => social.href)
      .filter((href): href is string => Boolean(href)),
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "REST API",
      "SQL",
      "Playwright",
      "ERP",
      "HIS / SIH",
      "Automatisation de workflows",
    ],
  };
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: "fr",
  };
}

export function getProjectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: `${site.url}/projects/${project.slug}`,
    author: {
      "@type": "Person",
      name: profile.name,
      url: site.url,
    },
    keywords: project.stack.join(", "),
    inLanguage: "fr",
    ...(project.year ? { dateCreated: project.year } : {}),
  };
}

export function getProjectBreadcrumbJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projets",
        item: `${site.url}/projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${site.url}/projects/${project.slug}`,
      },
    ],
  };
}

/** Sérialisation sûre pour une injection dans une balise script. */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
