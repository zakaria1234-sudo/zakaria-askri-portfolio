import { skillGroups } from "@/content";
import type { SkillLevel } from "@/content/types";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const levelLabels: Record<SkillLevel, string> = {
  solide: "solide",
  progression: "en progression",
  notions: "notions",
};

export function Skills() {
  return (
    <Section id="competences" labelledBy="competences-title">
      <Container>
        <SectionHeading
          id="competences-title"
          kicker="Compétences"
          title="Ce que je sais construire"
          intro="Des compétences reliées à des projets concrets, avec un niveau indiqué sans surenchère."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <Card key={group.id} className="p-6">
              <h3 className="text-lg font-semibold tracking-tight">
                {group.label}
              </h3>
              <p className="mt-1.5 text-sm text-muted">{group.description}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill.name}
                    className="inline-flex items-center gap-2 rounded-lg border border-line bg-background px-2.5 py-1.5 text-sm"
                  >
                    {skill.name}
                    {skill.level ? (
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                        {levelLabels[skill.level]}
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
