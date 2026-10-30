import type { Experience } from "./types";

/**
 * Contenus en brouillon : non affichés tant que `draft` reste à true.
 * Les périodes et le périmètre exact restent à confirmer.
 */
export const experiences: Experience[] = [
  {
    id: "his-ai-workflow",
    role: "Conception et développement",
    organization: "HIS AI Workflow — projet personnel",
    period: null,
    location: null,
    type: "projet",
    summary:
      "Plateforme d'analyse, de construction et de simulation de workflows métier pour un système d'information de santé.",
    highlights: [],
    stack: ["JavaScript", "Node.js", "Playwright"],
    draft: true,
  },
  {
    id: "freelance",
    role: "Développeur freelance",
    organization: "Indépendant",
    period: "2024 — 2025",
    location: null,
    type: "freelance",
    summary:
      "Missions de développement web pour des clients. Périmètre et technologies à préciser.",
    highlights: [],
    stack: [],
    draft: true,
  },
  {
    id: "ecommerce-2023",
    role: "Développeur",
    organization: "Projet e-commerce",
    period: "2023",
    location: null,
    type: "projet",
    summary:
      "Réalisation d'un projet e-commerce dans le cadre de mon parcours en informatique.",
    highlights: [],
    stack: [],
    draft: true,
  },
];
