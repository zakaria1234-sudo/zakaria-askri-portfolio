import Image from "next/image";
import Link from "next/link";

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
  const publishedProjects = getPublishedProjects();
  const hasProjects = publishedProjects.length > 0;
  const currentProject = publishedProjects.find(
    (project) => project.slug === "his-ai-workflow",
  );

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(34,211,238,0.10),transparent_70%)]"
      />

      <Container className="py-12 sm:py-24 lg:py-24">
        <div className="grid items-center gap-6 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
          <div>
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
          </div>

          <div className="order-first flex flex-col items-center lg:order-none">
            <div className="relative flex size-40 items-center justify-center sm:size-64 lg:size-72">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full border border-line/60"
              />
              <div
                aria-hidden="true"
                className="absolute inset-5 hidden rounded-full border border-line/35 sm:block"
              />
              <div
                aria-hidden="true"
                className="absolute inset-4 rounded-full bg-accent/10 blur-2xl"
              />

              <div className="relative rounded-full bg-linear-to-br from-accent/80 via-accent/40 to-accent/25 p-0.5 shadow-[0_0_70px_-18px_rgba(34,211,238,0.55)]">
                <Image
                  src="/photo-de-profil/portrait.jpg"
                  alt="Portrait de Zakaria Askri"
                  width={320}
                  height={320}
                  loading="eager"
                  className="size-28 rounded-full object-cover sm:size-40 lg:size-44"
                />
              </div>
            </div>

            {currentProject ? (
              <Link
                href={`/projects/${currentProject.slug}`}
                className="mt-7 hidden items-center gap-2 text-sm text-muted transition-colors hover:text-foreground lg:inline-flex"
              >
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-accent"
                />
                Projet en cours : {currentProject.title}
                <ArrowRightIcon className="size-3.5" />
              </Link>
            ) : null}
          </div>
        </div>

        <ul className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-line/70 pt-6 font-mono text-xs text-muted">
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
