import { ImageResponse } from "next/og";
import { profile } from "@/content";

export const alt = "Zakaria Askri — Développeur Full-Stack JavaScript";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0e14",
          color: "#e6edf3",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#22d3ee",
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#22d3ee",
            }}
          >
            {profile.title}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: "-0.03em" }}>
            {profile.name}
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 30,
              lineHeight: 1.4,
              maxWidth: 900,
              color: "#93a1b1",
            }}
          >
            Applications web full-stack, automatisation de workflows ERP/HIS et
            qualité logicielle.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 24,
            borderTop: "1px solid #233044",
            paddingTop: 28,
            fontSize: 22,
            color: "#93a1b1",
            fontFamily: "monospace",
          }}
        >
          <span>Node.js</span>
          <span style={{ color: "#233044" }}>/</span>
          <span>React</span>
          <span style={{ color: "#233044" }}>/</span>
          <span>Next.js</span>
          <span style={{ color: "#233044" }}>/</span>
          <span>Playwright</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
