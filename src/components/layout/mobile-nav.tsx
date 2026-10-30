"use client";

import { useEffect, useRef, useState } from "react";
import type { NavItem } from "@/content/site";
import { Button } from "@/components/ui/button";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { NavLinks } from "./nav-links";

interface MobileNavProps {
  items: NavItem[];
  cvHref: string | null;
}

export function MobileNav({ items, cvHref }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="menu-mobile"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        className="inline-flex size-10 items-center justify-center rounded-lg border border-line text-foreground"
      >
        {open ? (
          <CloseIcon className="size-5" />
        ) : (
          <MenuIcon className="size-5" />
        )}
      </button>

      {open ? (
        <div
          id="menu-mobile"
          className="fixed inset-x-0 top-16 z-40 border-b border-line bg-background/95 backdrop-blur-md"
        >
          <nav aria-label="Navigation mobile" className="px-5 py-4">
            <NavLinks
              items={items}
              className="flex flex-col gap-1"
              itemClassName="block rounded-lg px-3 py-3 text-base"
              onNavigate={() => setOpen(false)}
            />
            {cvHref ? (
              <Button
                href={cvHref}
                download
                size="sm"
                className="mt-4 w-full"
              >
                Télécharger le CV
              </Button>
            ) : null}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
