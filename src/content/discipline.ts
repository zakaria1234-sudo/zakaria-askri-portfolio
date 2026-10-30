import type { Discipline } from "./types";

/**
 * Section secondaire : elle montre la régularité et la persévérance,
 * jamais l'activité professionnelle principale.
 */
export const discipline = {
  intro:
    "Le sport fait partie de mon quotidien depuis 2015. La pratique régulière et l'encadrement m'ont appris la constance, la préparation et la progression par étapes — des principes que je retrouve dans le développement logiciel.",
  facts: [
    { label: "Taekwondo", value: "Pratique depuis 2015" },
    { label: "Grade", value: "1er Dan" },
    { label: "Course", value: "Marathon de Tunis 2025" },
  ],
  draft: true,
} satisfies Discipline;
