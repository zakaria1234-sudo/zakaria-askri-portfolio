import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="py-24 sm:py-32">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        Erreur 404
      </p>
      <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight">
        Page introuvable
      </h1>
      <p className="mt-4 max-w-xl text-pretty text-muted">
        La page demandée n&apos;existe pas ou a été déplacée.
      </p>
      <div className="mt-8">
        <Button href="/">Retour à l&apos;accueil</Button>
      </div>
    </Container>
  );
}
