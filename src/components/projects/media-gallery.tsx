import Image from "next/image";
import type { ProjectMedia } from "@/content/types";

export function MediaGallery({ media }: { media: ProjectMedia[] }) {
  if (media.length === 0) {
    return null;
  }

  return (
    <ul className="grid gap-6 sm:grid-cols-2">
      {media.map((item) => (
        <li key={item.src}>
          <figure>
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              className="h-auto w-full rounded-xl border border-line"
            />
            {item.caption ? (
              <figcaption className="mt-2 text-xs text-muted">
                {item.caption}
              </figcaption>
            ) : null}
          </figure>
        </li>
      ))}
    </ul>
  );
}
