export const site = {
  name: "Zakaria Askri",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ??
    "https://zakaria-askri.vercel.app",
  description:
    "Portfolio de Zakaria Askri, développeur Full-Stack JavaScript. Applications web React et Next.js, APIs Node.js, automatisation de workflows métier ERP/HIS et qualité logicielle.",
  lastUpdated: "octobre 2026",
  allowIndex: process.env.NEXT_PUBLIC_ALLOW_INDEX === "true",
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
