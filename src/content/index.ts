import { discipline } from "./discipline";
import { education } from "./education";
import { experiences } from "./experiences";
import { profile } from "./profile";
import { projects } from "./projects";
import { site, navItems, type NavItem } from "./site";
import { skillGroups } from "./skills";
import { socials } from "./socials";
import type { Project } from "./types";

export { discipline, education, experiences, profile, site, skillGroups, socials };
export { projects };

/** Projets publiés uniquement : un brouillon n'est jamais rendu ni indexé. */
export function getPublishedProjects(): Project[] {
  return projects
    .filter((project) => project.status === "published")
    .sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects(): Project[] {
  return getPublishedProjects().filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getPublishedProjects().find((project) => project.slug === slug);
}

export function getPublishedExperiences() {
  return experiences.filter((experience) => !experience.draft);
}

/**
 * "Projets" n'apparaît dans la navigation que si au moins un projet est publié,
 * afin de ne jamais exposer un lien mort.
 */
export function getNavItems(): NavItem[] {
  const hasProjects = getPublishedProjects().length > 0;

  return navItems.filter(
    (item) => item.href !== "/projects" || hasProjects,
  );
}
