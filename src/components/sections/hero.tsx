import { getPublishedProjects, profile, socials } from "@/content";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  ArrowRightIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/ui/icons";

const stack = ["Node.js", "React", "Next.js", "TypeScript", "Playwright"];

const socialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
} as const;

export function Hero() {
  const hasProjects = getPublishedProjects().length > 0;

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

        {profile.availabilityShort ? (
          <p className="mt-6 inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-1.5 text-xs text-muted">
            <span
              aria-hidden="true"
              className="size-1.5 shrink-0 rounded-full bg-accent"
            />
            {profile.availabilityShort}
          </p>
        ) : null}

        <div className="mt-9 flex flex-wrap items-center gap-3">
          {hasProjects ? (
            <Button href="/projects">
              Voir mes projets
              <ArrowRightIcon className="size-4" />
            </Button>
          ) : null}

          {profile.email ? (
            <Button href={`mailto:${profile.email}`} variant="secondary">
              Me contacter
              <MailIcon className="size-4" />
            </Button>
          ) : null}

          {profile.cvPath ? (
            <Button href={profile.cvPath} variant="secondary" download>
              CV
              <DownloadIcon className="size-4" />
            </Button>
          ) : null}
        </div>

        <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
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
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <Icon className="size-4" />
                  {social.label}
                  <span className="sr-only">(nouvel onglet)</span>
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-line/70 pt-6 font-mono text-xs text-muted">
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
