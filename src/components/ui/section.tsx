import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  id?: string;
  labelledBy?: string;
  className?: string;
}

export function Section({ children, id, labelledBy, className }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("scroll-mt-24 py-16 sm:py-24", className)}
    >
      {children}
    </section>
  );
}
