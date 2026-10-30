import type { ArchitectureLayer } from "@/content/types";
import { ArrowRightIcon } from "@/components/ui/icons";

const flow = [
  "Observation",
  "Interprétation",
  "Découverte",
  "Construction",
  "Validation",
  "Simulation",
];

export function ArchitectureDiagram({
  layers,
}: {
  layers: ArchitectureLayer[];
}) {
  return (
    <div className="space-y-10">
      <ol className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-muted">
        {flow.map((step, index) => (
          <li key={step} className="flex items-center gap-2">
            <span className="rounded-md border border-line bg-background px-2 py-1">
              {step}
            </span>
            {index < flow.length - 1 ? (
              <ArrowRightIcon className="size-3 text-line" />
            ) : null}
          </li>
        ))}
      </ol>

      <div className="grid gap-4 md:grid-cols-2">
        {layers.map((layer, index) => (
          <div
            key={layer.id}
            className="rounded-2xl border border-line bg-surface p-6"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-xs text-accent">
                0{index + 1}
              </span>
              <h3 className="text-lg font-semibold tracking-tight">
                {layer.label}
              </h3>
            </div>

            <p className="mt-3 text-pretty text-sm leading-relaxed text-muted">
              {layer.description}
            </p>

            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {layer.components.map((component) => (
                <li
                  key={component}
                  className="min-w-0 break-all rounded-lg border border-line/70 bg-background px-3 py-2 font-mono text-[11px] leading-snug text-foreground/90"
                >
                  {component}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
