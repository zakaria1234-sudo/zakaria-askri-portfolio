export const site = {
  name: "Zakaria Askri",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ??
    "https://zakariaaskri.vercel.app",
  description:
    "Portfolio de Zakaria Askri, développeur Full-Stack JavaScript à Tunis. Applications React et Next.js, APIs Node.js, automatisation de workflows ERP/HIS et qualité logicielle. PFE dès février 2027.",
  lastUpdated: "octobre 2026",
  contentUpdated: "2026-10-30",
  /**
   * Indexation autorisée par défaut uniquement sur le déploiement de production Vercel.
   * `NEXT_PUBLIC_ALLOW_INDEX=true|false` permet de forcer le comportement.
   */
  allowIndex:
    process.env.NEXT_PUBLIC_ALLOW_INDEX === "true" ||
    (process.env.NEXT_PUBLIC_ALLOW_INDEX !== "false" &&
      process.env.VERCEL_ENV === "production"),
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Projets", href: "/projects" },
  { label: "Parcours", href: "/#parcours" },
  { label: "Compétences", href: "/#competences" },
  { label: "Contact", href: "/#contact" },
];
