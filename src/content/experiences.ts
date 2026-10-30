import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    id: "his-ai-workflow",
    role: "Conception et développement",
    organization: "HIS AI Workflow — projet professionnel",
    period: "Juillet 2026 — aujourd'hui",
    location: "Tunis",
    type: "projet",
    summary:
      "Plateforme d'automatisation intelligente qui analyse, représente et simule des workflows métier dans un environnement HIS/ERP, avec exécution automatisée via Playwright.",
    highlights: [
      "Résolution sémantique des éléments d'interface et distinction entre DOM visible et éléments cachés",
      "Drivers d'interaction dédiés aux composants métier, dont Select2",
      "Construction, validation et fusion de workflows, puis génération d'un plan d'exécution",
      "Validation d'état après action et récupération en cas d'échec",
    ],
    stack: ["JavaScript", "Node.js", "Playwright", "ERP / HIS"],
    draft: false,
  },
  {
    id: "freelance",
    role: "Développeur freelance",
    organization: "Indépendant",
    period: "2024 — 2025",
    location: "Tunis",
    type: "freelance",
    summary:
      "Missions de développement web menées en freelance entre 2024 et 2025.",
    highlights: [],
    stack: [],
    draft: false,
  },
];
