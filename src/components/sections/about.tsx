import { education, languages, profile } from "@/content";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  const currentEducation = education[0];

  return (
    <Section id="a-propos" labelledBy="a-propos-title">
      <Container>
        <SectionHeading
          id="a-propos-title"
          kicker="Profil"
          title="À propos"
          intro="Développeur full-stack orienté JavaScript, automatisation et systèmes métier."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <div className="space-y-4 text-pretty leading-relaxed text-muted">
            {profile.summary.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <Card className="h-fit p-6">
            <dl className="space-y-5">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  Localisation
                </dt>
                <dd className="mt-1.5 text-sm">{profile.location}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  Disponibilité
                </dt>
                <dd className="mt-1.5 text-sm">{profile.availability}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  Formation
                </dt>
                <dd className="mt-1.5 text-sm">
                  {currentEducation.degree}
                  <span className="block text-muted">
                    {currentEducation.school} · {currentEducation.period}
                  </span>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  Langues
                </dt>
                <dd className="mt-1.5 text-sm">
                  {languages.map((language) => language.name).join(" · ")}
                </dd>
              </div>
            </dl>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
