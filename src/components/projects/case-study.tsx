import type { CaseStudyBlock } from "@/content/types";

export function CaseStudy({ blocks }: { blocks: CaseStudyBlock[] }) {
  return (
    <div className="space-y-12">
      {blocks.map((block, index) => {
        if (block.kind === "callout") {
          return (
            <aside
              key={index}
              className="max-w-3xl rounded-2xl border border-accent/25 bg-accent/5 p-6"
            >
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                {block.title}
              </p>
              <p className="mt-2 text-pretty leading-relaxed text-muted">
                {block.text}
              </p>
            </aside>
          );
        }

        return (
          <div key={index} className="max-w-3xl">
            {block.title ? (
              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                {block.title}
              </h3>
            ) : null}

            {block.kind === "paragraph" ? (
              <p className="mt-4 text-pretty leading-relaxed text-muted">
                {block.text}
              </p>
            ) : (
              <ul className="mt-4 space-y-2.5">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3 text-muted">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 size-1 shrink-0 rounded-full bg-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
