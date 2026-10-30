export interface Language {
  id: string;
  name: string;
}

/**
 * Les niveaux CECRL sont volontairement omis : ils seront ajoutés
 * uniquement lorsqu'ils seront validés.
 */
export const languages: Language[] = [
  { id: "arabe", name: "Arabe" },
  { id: "francais", name: "Français" },
  { id: "anglais", name: "Anglais" },
  { id: "allemand", name: "Allemand" },
];
