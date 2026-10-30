import Link from "next/link";
import { getFeaturedProjects } from "@/content";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowRightIcon } from "@/components/ui/icons";
import { ProjectCard } from "@/components/projects/project-card";

export function FeaturedProjects() {
  const projects = getFeaturedProjects();

  if (projects.length === 0) {
    return null;
  }

  const [main, ...rest] = projects;

  return (
    <Section id="projets" labelledBy="projets-title">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            id="projets-title"
            kicker="Projets"
            title="Réalisations"
            intro="Deux projets pour montrer la construction d'une application complète et l'automatisation d'un système métier."
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            Tous les projets
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>

        <div className="mt-10 space-y-4">
          <ProjectCard project={main} large />
          {rest.length > 0 ? (
            rest.length === 1 ? (
              <ProjectCard project={rest[0]} />
            ) : (
              <div className="grid gap-4 md:grid-cols-2">
                {rest.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            )
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
