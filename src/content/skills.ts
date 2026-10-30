import type { SkillGroup } from "./types";

/**
 * Les niveaux sont volontairement omis : ils doivent être validés un par un.
 * L'interface n'affiche un badge que lorsque `level` est renseigné.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    description: "Interfaces web, composants et rendu côté serveur.",
    items: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    id: "backend",
    label: "Backend & données",
    description: "APIs, logique métier et persistance.",
    items: [
      { name: "Node.js" },
      { name: "Nest.js" },
      { name: "APIs REST" },
      { name: "SQL" },
    ],
  },
  {
    id: "qualite",
    label: "Qualité & outils",
    description: "Tests, automatisation et travail collaboratif.",
    items: [
      { name: "Playwright" },
      { name: "Tests E2E" },
      { name: "Validation d'état" },
      { name: "Git" },
      { name: "GitHub" },
    ],
  },
  {
    id: "domaine",
    label: "Domaine métier",
    description: "Systèmes d'information et automatisation des processus.",
    items: [
      { name: "ERP" },
      { name: "HIS / SIH" },
      { name: "Workflows métier" },
      { name: "e-santé" },
    ],
  },
];
