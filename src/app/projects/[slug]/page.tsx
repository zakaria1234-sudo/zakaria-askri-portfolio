import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getPublishedProjects, profile } from "@/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  ArrowRightIcon,
  GitHubIcon,
  MailIcon,
} from "@/components/ui/icons";
import { ArchitectureDiagram } from "@/components/projects/architecture-diagram";
import { CaseStudy } from "@/components/projects/case-study";
import { MediaGallery } from "@/components/projects/media-gallery";
import {
  getProjectBreadcrumbJsonLd,
  getProjectJsonLd,
  serializeJsonLd,
} from "@/lib/jsonld";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getPublishedProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      title: project.title,
      description: project.summary,
      url: `/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const published = getPublishedProjects();
  const currentIndex = published.findIndex(
    (item) => item.slug === project.slug,
  );
  const nextProject =
    published.length > 1
      ? published[(currentIndex + 1) % published.length]
      : null;

  return (
    <Container className="py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(getProjectJsonLd(project)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(getProjectBreadcrumbJsonLd(project)),
        }}
      />

      <nav aria-label="Fil d'Ariane">
        <ol className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted">
          <li>
            <Link href="/" className="transition-colors hover:text-foreground">
              Accueil
            </Link>
          </li>
          <li aria-hidden="true" className="text-line">
            /
          </li>
          <li>
            <Link
              href="/projects"
              className="transition-colors hover:text-foreground"
            >
              Projets
            </Link>
          </li>
          <li aria-hidden="true" className="text-line">
            /
          </li>
          <li aria-current="page" className="text-foreground">
            {project.title}
          </li>
        </ol>
      </nav>

      <header className="mt-10 max-w-4xl">
        <div className="flex flex-wrap items-center gap-3">
          {project.year ? (
            <span className="font-mono text-xs uppercase tracking-wider text-muted">
              {project.year}
            </span>
          ) : null}
          <Badge tone={project.confidentiality === "concept-only" ? "accent" : "neutral"}>
            {project.confidentiality === "concept-only"
              ? "Présentation conceptuelle"
              : "Projet"}
          </Badge>
        </div>

        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-3xl text-pretty text-lg leading-relaxed text-muted">
          {project.subtitle}
        </p>

        <dl className="mt-10 grid gap-6 border-y border-line py-6 sm:grid-cols-3">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Rôle
            </dt>
            <dd className="mt-1.5 text-sm">{project.role ?? "À préciser"}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Période
            </dt>
            <dd className="mt-1.5 text-sm">
              {project.duration ?? project.year ?? "À préciser"}
            </dd>
          </div>
          {project.team ? (
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Équipe
              </dt>
              <dd className="mt-1.5 text-sm">{project.team}</dd>
            </div>
          ) : null}
        </dl>

        {project.stack.length > 0 ? (
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li key={tech}>
                <Badge tone="muted">{tech}</Badge>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {project.links.repo ? (
            <Button href={project.links.repo} external variant="secondary" size="sm">
              Code source
              <GitHubIcon className="size-4" />
            </Button>
          ) : null}
          {project.links.demo ? (
            <Button href={project.links.demo} external size="sm">
              Voir la démonstration
              <ArrowRightIcon className="size-4" />
            </Button>
          ) : null}
          {project.links.note ? (
            <p className="text-sm text-muted">{project.links.note}</p>
          ) : null}
        </div>
      </header>

      {project.architecture.length > 0 ? (
        <section className="mt-16" aria-labelledby="architecture-title">
          <h2
            id="architecture-title"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Architecture
          </h2>
          <p className="mt-3 max-w-3xl text-pretty leading-relaxed text-muted">
            Quatre couches séparées : les agents orchestrent, les interpreters
            donnent du sens, le workflow structure le modèle, la simulation
            vérifie avant exécution.
          </p>
          <div className="mt-8">
            <ArchitectureDiagram layers={project.architecture} />
          </div>
        </section>
      ) : null}

      <section className="mt-16" aria-labelledby="case-study-title">
        <h2
          id="case-study-title"
          className="text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          Étude de cas
        </h2>
        <div className="mt-8">
          <CaseStudy blocks={project.caseStudy} />
        </div>
      </section>

      {project.media.length > 0 ? (
        <section className="mt-16" aria-labelledby="media-title">
          <h2
            id="media-title"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Aperçus
          </h2>
          <div className="mt-8">
            <MediaGallery media={project.media} />
          </div>
        </section>
      ) : null}

      <div className="mt-16 flex flex-col gap-6 rounded-2xl border border-line bg-surface p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <p className="text-lg font-semibold tracking-tight">
            Ce projet vous intéresse ?
          </p>
          <p className="mt-1 text-sm text-muted">
            Je peux détailler l&apos;architecture et les choix techniques lors
            d&apos;un entretien.
          </p>
        </div>
        {profile.email ? (
          <Button href={`mailto:${profile.email}`}>
            Me contacter
            <MailIcon className="size-4" />
          </Button>
        ) : null}
      </div>

      {nextProject ? (
        <nav aria-label="Navigation entre projets" className="mt-12">
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex items-center justify-between gap-4 border-t border-line pt-6"
          >
            <span>
              <span className="block font-mono text-xs uppercase tracking-wider text-muted">
                Projet suivant
              </span>
              <span className="mt-1.5 block text-lg font-medium tracking-tight">
                {nextProject.title}
              </span>
            </span>
            <ArrowRightIcon className="size-5 text-muted transition-transform group-hover:translate-x-1" />
          </Link>
        </nav>
      ) : null}
    </Container>
  );
}
