import type { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: "Développement web",
    description: "Interfaces, composants et rendu côté serveur.",
    items: [
      { name: "JavaScript", level: "solide" },
      { name: "TypeScript", level: "progression" },
      { name: "React", level: "solide" },
      { name: "Next.js", level: "progression" },
      { name: "HTML", level: "solide" },
      { name: "CSS", level: "solide" },
      { name: "Tailwind CSS", level: "solide" },
    ],
  },
  {
    id: "backend",
    label: "Backend & données",
    description: "APIs, logique métier et persistance.",
    items: [
      { name: "Node.js", level: "solide" },
      { name: "Nest.js", level: "progression" },
      { name: "REST API", level: "solide" },
      { name: "SQL", level: "solide" },
    ],
  },
  {
    id: "qualite",
    label: "Automatisation & qualité",
    description: "Tests, automatisation et travail collaboratif.",
    items: [
      { name: "Playwright", level: "solide" },
      { name: "Tests et automatisation", level: "solide" },
      { name: "Git / GitHub", level: "solide" },
    ],
  },
  {
    id: "metier",
    label: "Systèmes métier",
    description: "Processus, systèmes d'information et santé.",
    items: [
      { name: "ERP", level: "progression" },
      { name: "HIS / SIH", level: "solide" },
      { name: "Workflows métier", level: "solide" },
      { name: "Automatisation de processus métier", level: "solide" },
    ],
  },
];
