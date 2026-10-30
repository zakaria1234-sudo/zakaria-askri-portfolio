import { education, getPublishedExperiences } from "@/content";
import type { ExperienceType } from "@/content/types";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const typeLabels: Record<ExperienceType, string> = {
  freelance: "Freelance",
  projet: "Projet",
  formation: "Formation",
  autre: "Autre",
};

export function Parcours() {
  const experiences = getPublishedExperiences();

  return (
    <Section id="parcours" labelledBy="parcours-title">
      <Container>
        <SectionHeading
          id="parcours-title"
          kicker="Parcours"
          title="Expériences et formation"
          intro="Un projet professionnel en cours, une expérience freelance et une formation en informatique."
        />

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              Expériences
            </h3>

            <ol className="mt-6 space-y-8">
              {experiences.map((experience) => (
                <li
                  key={experience.id}
                  className="relative border-l border-line pl-6"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-accent"
                  />

                  <div className="flex flex-wrap items-center gap-3">
                    <Badge tone="accent">{typeLabels[experience.type]}</Badge>
                    {experience.period ? (
                      <span className="font-mono text-xs text-muted">
                        {experience.period}
                      </span>
                    ) : null}
                  </div>

                  <h4 className="mt-3 text-lg font-semibold tracking-tight">
                    {experience.role}
                  </h4>
                  <p className="text-sm text-muted">
                    {experience.organization}
                    {experience.location
                      ? ` · ${experience.location}`
                      : null}
                  </p>

                  <p className="mt-3 text-pretty text-sm leading-relaxed text-muted">
                    {experience.summary}
                  </p>

                  {experience.highlights.length > 0 ? (
                    <ul className="mt-4 space-y-2">
                      {experience.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-2.5 text-sm text-muted"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 size-1 shrink-0 rounded-full bg-accent"
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {experience.stack.length > 0 ? (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {experience.stack.map((tech) => (
                        <li key={tech}>
                          <Badge tone="muted">{tech}</Badge>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              Formation
            </h3>

            <div className="mt-6 space-y-4">
              {education.map((entry) => (
                <Card key={entry.id} className="p-6">
                  <p className="font-mono text-xs text-accent">{entry.period}</p>
                  <h4 className="mt-2 text-lg font-semibold tracking-tight">
                    {entry.degree}
                  </h4>
                  <p className="mt-1 text-sm text-muted">{entry.school}</p>
                  <p className="text-sm text-muted">{entry.location}</p>
                  {entry.details ? (
                    <p className="mt-3 text-sm text-muted">{entry.details}</p>
                  ) : null}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
