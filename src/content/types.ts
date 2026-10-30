/**
 * Modèle de données éditorial.
 *
 * Toute donnée affichée sur le site provient de `src/content/`.
 * Aucun texte éditorial ne doit être écrit directement dans un composant.
 */

export type SkillLevel = "solide" | "progression" | "notions";

export interface Skill {
  name: string;
  /** Omis tant que le niveau n'a pas été validé par Zakaria. */
  level?: SkillLevel;
}

export interface SkillGroup {
  id: string;
  label: string;
  description: string;
  items: Skill[];
}

export type SocialId = "github" | "linkedin";

export interface SocialLink {
  id: SocialId;
  label: string;
  handle: string;
  href: string | null;
}

export interface Profile {
  name: string;
  shortName: string;
  title: string;
  tagline: string;
  summary: string[];
  location: string | null;
  availability: string | null;
  email: string | null;
  cvPath: string | null;
  /** Passe à true après relecture factuelle complète. */
  reviewed: boolean;
}

export type ExperienceType = "freelance" | "projet" | "formation" | "autre";

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string | null;
  location: string | null;
  type: ExperienceType;
  summary: string;
  highlights: string[];
  stack: string[];
  /** Un contenu en brouillon n'est pas affiché sur le site public. */
  draft: boolean;
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  location: string;
  details: string | null;
  draft: boolean;
}

export interface DisciplineFact {
  label: string;
  value: string;
}

export interface Discipline {
  intro: string;
  facts: DisciplineFact[];
  draft: boolean;
}

export type CaseStudyBlock =
  | { kind: "paragraph"; title?: string; text: string }
  | { kind: "list"; title?: string; items: string[] }
  | { kind: "callout"; title: string; text: string };

export interface ArchitectureLayer {
  id: string;
  label: string;
  description: string;
  components: string[];
}

export interface ProjectMedia {
  src: string;
  /** Obligatoire : une image sans texte alternatif ne compile pas. */
  alt: string;
  caption?: string;
  width: number;
  height: number;
}

export interface ProjectLinks {
  repo: string | null;
  demo: string | null;
  note: string | null;
}

export type ProjectStatus = "published" | "draft";
export type Confidentiality = "public" | "concept-only";

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  year: string | null;
  status: ProjectStatus;
  featured: boolean;
  order: number;
  role: string | null;
  duration: string | null;
  team: string | null;
  summary: string;
  context: string;
  problem: string;
  goal: string;
  constraints: string[];
  architecture: ArchitectureLayer[];
  stack: string[];
  caseStudy: CaseStudyBlock[];
  media: ProjectMedia[];
  links: ProjectLinks;
  confidentiality: Confidentiality;
}
