interface SectionHeadingProps {
  id: string;
  kicker: string;
  title: string;
  intro?: string;
}

export function SectionHeading({ id, kicker, title, intro }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {kicker}
      </p>
      <h2
        id={id}
        className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
      >
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
