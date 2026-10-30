"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/content/site";
import { cn } from "@/lib/utils";

interface NavLinksProps {
  items: NavItem[];
  className?: string;
  itemClassName?: string;
  onNavigate?: () => void;
}

function isActive(pathname: string, href: string): boolean {
  if (href.startsWith("/#")) {
    return false;
  }

  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavLinks({
  items,
  className,
  itemClassName,
  onNavigate,
}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul className={className}>
      {items.map((item) => {
        const active = isActive(pathname, item.href);

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              onClick={onNavigate}
              className={cn(
                "text-muted transition-colors hover:text-foreground",
                active && "text-foreground",
                itemClassName,
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
