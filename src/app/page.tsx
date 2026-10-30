import { getPublishedProjects, profile, socials } from "@/content";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  ArrowRightIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
} from "@/components/ui/icons";

const stack = ["Node.js", "React", "Next.js", "TypeScript", "Playwright"];

const socialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
} as const;

export default function HomePage() {
  const projects = getPublishedProjects();

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(34,211,238,0.10),transparent_70%)]"
      />

      <Container className="py-20 sm:py-28 lg:py-32">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          {profile.title}
        </p>

        <h1
          id="hero-title"
          className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-6xl"
        >
          {profile.name}
        </h1>

        <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl">
          {profile.tagline}
        </p>

        {profile.availability ? (
          <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-accent"
            />
            {profile.availability}
          </p>
        ) : null}

        <div className="mt-9 flex flex-wrap items-center gap-3">
          {projects.length > 0 ? (
            <Button href="/projects">
              Voir mes projets
              <ArrowRightIcon className="size-4" />
            </Button>
          ) : null}

          {profile.cvPath ? (
            <Button href={profile.cvPath} variant="secondary" download>
              Télécharger le CV
              <DownloadIcon className="size-4" />
            </Button>
          ) : null}

          {socials.map((social) => {
            if (!social.href) {
              return null;
            }

            const Icon = socialIcons[social.id];

            return (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full px-4 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
              >
                <Icon className="size-4" />
                {social.label}
                <span className="sr-only">(nouvel onglet)</span>
              </a>
            );
          })}
        </div>

        <ul className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-muted">
          {stack.map((item, index) => (
            <li key={item} className="flex items-center gap-3">
              {index > 0 ? (
                <span aria-hidden="true" className="text-line">
                  /
                </span>
              ) : null}
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
