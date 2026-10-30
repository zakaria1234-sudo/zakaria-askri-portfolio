import Link from "next/link";
import { getNavItems, profile } from "@/content";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MobileNav } from "./mobile-nav";
import { NavLinks } from "./nav-links";

export function Header() {
  const items = getNavItems();

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-background/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight text-foreground"
        >
          zakaria<span className="text-accent">.</span>askri
          <span className="sr-only"> — retour à l&apos;accueil</span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden md:block">
          <div className="flex items-center gap-2">
            <NavLinks
              items={items}
              className="flex items-center gap-1"
              itemClassName="rounded-full px-3 py-2 text-sm"
            />
            {profile.cvPath ? (
              <Button href={profile.cvPath} download size="sm">
                CV
              </Button>
            ) : null}
          </div>
        </nav>

        <MobileNav items={items} cvHref={profile.cvPath} />
      </Container>
    </header>
  );
}
