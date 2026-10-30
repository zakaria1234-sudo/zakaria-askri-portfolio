"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckIcon, CopyIcon } from "@/components/ui/icons";

type CopyStatus = "idle" | "copied" | "error";

const labels: Record<CopyStatus, string> = {
  idle: "Copier l'adresse",
  copied: "Adresse copiée",
  error: "Copie impossible",
};

export function CopyEmailButton({ email }: { email: string }) {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) {
        window.clearTimeout(timer.current);
      }
    };
  }, []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("error");
    }

    if (timer.current) {
      window.clearTimeout(timer.current);
    }

    timer.current = window.setTimeout(() => setStatus("idle"), 2500);
  }

  return (
    <>
      <Button variant="secondary" onClick={handleCopy}>
        {status === "copied" ? (
          <CheckIcon className="size-4" />
        ) : (
          <CopyIcon className="size-4" />
        )}
        {labels[status]}
      </Button>
      <span aria-live="polite" className="sr-only">
        {status === "copied"
          ? "Adresse email copiée dans le presse-papiers."
          : status === "error"
            ? "La copie a échoué. Utilisez le lien email."
            : ""}
      </span>
    </>
  );
}
