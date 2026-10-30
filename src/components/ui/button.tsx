import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md";

interface CommonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

interface LinkProps extends CommonProps {
  href: string;
  external?: boolean;
  download?: boolean;
}

interface ActionProps
  extends CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

export type ButtonProps = LinkProps | ActionProps;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-accent-ink hover:bg-accent/90",
  secondary:
    "border border-line bg-surface text-foreground hover:border-accent/50 hover:bg-surface-2",
  ghost: "text-muted hover:bg-surface hover:text-foreground",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4",
  md: "h-11 px-5",
};

export function Button(props: ButtonProps) {
  const { children, variant = "primary", size = "md", className } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.href) {
    const { href, external = false, download = false } = props;
    const isInternal = href.startsWith("/") || href.startsWith("#");

    if (isInternal && !download) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(download ? { download: "" } : {})}
      >
        {children}
      </a>
    );
  }

  const { type = "button", onClick, disabled, name, value } = props as ActionProps;
  const { "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy } =
    props as ActionProps;

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      name={name}
      value={value}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
    >
      {children}
    </button>
  );
}
