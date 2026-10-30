import type { Project } from "../types";

export const ecommerce = {
  slug: "ecommerce",
  title: "Projet e-commerce",
  subtitle: "Première application web complète, réalisée en 2023",
  year: "2023",
  status: "published",
  featured: true,
  order: 2,
  role: "Projet académique et personnel",
  duration: null,
  team: null,
  summary:
    "Projet académique et personnel qui m'a permis de mettre en pratique le développement d'une application web complète, de l'interface utilisateur à la logique backend.",
  context:
    "Projet réalisé en 2023, dans le cadre de mon parcours en informatique, avec pour objectif de couvrir l'ensemble de la chaîne d'une application web.",
  problem:
    "Construire une application e-commerce fonctionnelle en reliant une interface utilisateur, une logique métier et la gestion des données.",
  goal:
    "Mettre en pratique le développement full-stack en JavaScript, du frontend au backend, sur un cas concret de commerce en ligne.",
  constraints: [],
  architecture: [],
  stack: ["JavaScript"],
  caseStudy: [
    {
      kind: "paragraph",
      title: "Contexte",
      text: "Le projet e-commerce de 2023 est ma première application web complète. Il m'a servi à relier une interface utilisateur, une logique métier et la gestion des données dans un même projet.",
    },
    {
      kind: "list",
      title: "Compétences mobilisées",
      items: [
        "Développement frontend",
        "Développement backend",
        "JavaScript",
        "Gestion des données",
        "Logique métier e-commerce",
        "Conception d'une application web full-stack",
      ],
    },
    {
      kind: "callout",
      title: "Fiche en cours d'enrichissement",
      text: "Les fonctionnalités détaillées, le contexte exact, mon rôle précis et les liens vers le dépôt ou une démonstration seront ajoutés lorsqu'ils seront disponibles.",
    },
  ],
  media: [],
  links: {
    repo: null,
    demo: null,
    note: null,
  },
  confidentiality: "public",
} satisfies Project;
