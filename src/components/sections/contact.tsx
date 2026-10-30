import { profile, socials } from "@/content";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { CopyEmailButton } from "./copy-email-button";

const socialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
} as const;

export function Contact() {
  return (
    <Section id="contact" labelledBy="contact-title">
      <Container>
        <div className="rounded-3xl border border-line bg-surface p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Contact
              </p>
              <h2
                id="contact-title"
                className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Discutons de votre projet ou de votre équipe.
              </h2>
              <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted">
                Je réponds aux opportunités de PFE, de stage, d&apos;alternance,
                aux postes junior et aux missions freelance.
              </p>

              <div className="mt-8 flex flex-wrap items-start gap-3">
                {profile.email ? (
                  <>
                    <Button href={`mailto:${profile.email}`}>
                      Écrire un email
                      <MailIcon className="size-4" />
                    </Button>
                    <CopyEmailButton email={profile.email} />
                  </>
                ) : null}
              </div>

              {profile.email ? (
                <p className="mt-4 font-mono text-xs text-muted">
                  {profile.email}
                </p>
              ) : null}
            </div>

            <dl className="space-y-6">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  Disponibilité
                </dt>
                <dd className="mt-1.5 text-sm">{profile.availability}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  Localisation
                </dt>
                <dd className="mt-1.5 text-sm">
                  {profile.location} · télétravail possible
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  Réseaux
                </dt>
                <dd className="mt-2">
                  <ul className="flex flex-wrap gap-2">
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
                            className="inline-flex h-9 items-center gap-2 rounded-lg border border-line px-3 text-sm text-muted transition-colors hover:border-accent/50 hover:text-foreground"
                          >
                            <Icon className="size-4" />
                            {social.label}
                            <span className="sr-only">
                              (nouvel onglet)
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </Section>
  );
}
