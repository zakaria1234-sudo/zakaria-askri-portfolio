import Link from "next/link";
import type { Project } from "@/content/types";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  large?: boolean;
}

export function ProjectCard({ project, large = false }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col rounded-2xl border border-line bg-surface transition-colors focus-within:border-accent/50 hover:border-accent/40",
        large ? "p-8 sm:p-10" : "p-6 sm:p-8",
      )}
    >
      <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wider text-muted">
        {project.year ? <span>{project.year}</span> : null}
        <span aria-hidden="true" className="text-line">
          /
        </span>
        <span>
          {project.confidentiality === "concept-only"
            ? "Étude de cas conceptuelle"
            : "Projet"}
        </span>
      </div>

      <h3
        className={cn(
          "mt-4 text-balance font-semibold tracking-tight",
          large ? "text-3xl sm:text-4xl" : "text-xl",
        )}
      >
        <Link
          href={`/projects/${project.slug}`}
          className="after:absolute after:inset-0 focus-visible:outline-none"
        >
          {project.title}
        </Link>
      </h3>

      <p
        className={cn(
          "mt-3 text-pretty text-muted",
          large ? "max-w-2xl text-base sm:text-lg" : "text-sm",
        )}
      >
        {project.summary}
      </p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.stack.slice(0, large ? 6 : 4).map((tech) => (
          <li key={tech}>
            <Badge tone="muted">{tech}</Badge>
          </li>
        ))}
      </ul>

      <span className="mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-medium text-accent">
        Lire l&apos;étude de cas
        <ArrowUpRightIcon className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </article>
  );
}
