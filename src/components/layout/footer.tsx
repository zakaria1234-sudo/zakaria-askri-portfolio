import Link from "next/link";
import { getNavItems, profile, site, socials } from "@/content";
import { Container } from "@/components/ui/container";
import {
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/ui/icons";

const socialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
} as const;

export function Footer() {
  const items = getNavItems();
  const hasContact = Boolean(profile.email || profile.cvPath);

  return (
    <footer className="border-t border-line/70">
      <Container className="py-12">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <p className="font-mono text-sm font-semibold tracking-tight">
              zakaria<span className="text-accent">.</span>askri
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {profile.title}. {profile.tagline}
            </p>

            <ul className="mt-5 flex items-center gap-2">
              {socials.map((social) => {
                if (!social.href) {
                  return null;
                }

                const Icon = socialIcons[social.id];

                return (
                  <li key={social.id}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${social.label} de ${profile.name} (nouvel onglet)`}
                      className="inline-flex size-9 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent/50 hover:text-foreground"
                    >
                      <Icon className="size-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <nav aria-label="Plan du site">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Navigation
            </p>
            <ul className="mt-4 space-y-2">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {hasContact ? (
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                Contact
              </p>
              <ul className="mt-4 space-y-2">
                {profile.email ? (
                  <li>
                    <a
                      href={`mailto:${profile.email}`}
                      className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                    >
                      <MailIcon className="size-4" />
                      {profile.email}
                    </a>
                  </li>
                ) : null}
                {profile.cvPath ? (
                  <li>
                    <a
                      href={profile.cvPath}
                      download
                      className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                    >
                      <DownloadIcon className="size-4" />
                      Télécharger le CV
                    </a>
                  </li>
                ) : null}
              </ul>
            </div>
          ) : null}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line/70 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {profile.name}</p>
          <p>Dernière mise à jour : {site.lastUpdated}</p>
          <a href="#main" className="transition-colors hover:text-foreground">
            Retour en haut
          </a>
        </div>
      </Container>
    </footer>
  );
}
