import type { Metadata } from "next";
import { getPublishedProjects } from "@/content";
import { Container } from "@/components/ui/container";
import { ProjectCard } from "@/components/projects/project-card";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Études de cas de Zakaria Askri : automatisation de workflows HIS/ERP et application e-commerce full-stack.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  const projects = getPublishedProjects();

  return (
    <Container className="py-16 sm:py-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        Réalisations
      </p>
      <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
        Projets
      </h1>
      <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted">
        Chaque projet est présenté comme une étude de cas : contexte, problème,
        architecture, difficultés techniques et solutions apportées.
      </p>

      <h2 className="sr-only">Tous les projets</h2>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Container>
  );
}
