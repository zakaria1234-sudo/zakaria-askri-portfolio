import type { Profile } from "./types";

export const profile = {
  name: "Zakaria Askri",
  shortName: "ZA",
  title: "Développeur Full-Stack JavaScript",
  tagline:
    "Je construis des applications web full-stack et j'automatise des workflows métier, avec une exigence particulière sur la validation et les tests.",
  summary: [
    "Je développe des applications web en JavaScript, du front-end React et Next.js aux APIs Node.js. Je m'intéresse particulièrement à la qualité logicielle, aux tests et à l'automatisation.",
    "Mon projet principal actuel, HIS AI Workflow, explore l'analyse, la construction et la simulation de workflows métier dans les systèmes d'information de santé.",
  ],
  // À FOURNIR avant publication.
  location: null,
  availability: null,
  email: null,
  cvPath: null,
  // Passer à true après relecture factuelle complète.
  reviewed: false,
} satisfies Profile;
