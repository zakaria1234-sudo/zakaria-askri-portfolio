import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ProseProps {
  children: ReactNode;
  className?: string;
}

export function Prose({ children, className }: ProseProps) {
  return (
    <div
      className={cn(
        "space-y-4 text-pretty leading-relaxed text-muted [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_strong]:font-medium [&_strong]:text-foreground",
        className,
      )}
    >
      {children}
    </div>
  );
}
