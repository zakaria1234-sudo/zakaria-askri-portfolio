import { discipline } from "@/content";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function Discipline() {
  return (
    <Section id="discipline" labelledBy="discipline-title">
      <Container>
        <SectionHeading
          id="discipline-title"
          kicker="Hors du code"
          title="Discipline & sport"
          intro="Une pratique régulière, transmise aussi par l'encadrement."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <p className="max-w-2xl text-pretty leading-relaxed text-muted">
            {discipline.intro}
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {discipline.facts.map((fact) => (
              <Card key={fact.label} className="p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  {fact.label}
                </p>
                <p className="mt-2 text-sm">{fact.value}</p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
