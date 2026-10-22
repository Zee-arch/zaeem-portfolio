import { ImageResponse } from "next/og";
import { person } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${person.name} — ${person.tagline}`;

/**
 * The card LinkedIn, Slack and iMessage render when the site is shared.
 * Satori (which backs ImageResponse) supports a flexbox-only CSS subset —
 * every element below needs an explicit `display: flex`.
 */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f7f5ee",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              width: 14,
              height: 14,
              borderRadius: 7,
              background: "#4c4ddc",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: 4,
              color: "#8b8471",
            }}
          >
            {person.name.toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              lineHeight: 1.14,
              color: "#17150f",
              maxWidth: 940,
            }}
          >
            {person.tagline}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 34,
              fontSize: 27,
              color: "#55503f",
            }}
          >
            Sales operations, partnerships and sponsorships. NUST BBA.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 22,
            color: "#8b8471",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "9px 20px",
              borderRadius: 999,
              background: "#e6efe9",
              color: "#38765b",
            }}
          >
            OPEN TO WORK
          </div>
          <div style={{ display: "flex" }}>Ex-Podium · ImagineArt · Nestlé · AIESEC</div>
        </div>
      </div>
    ),
    size,
  );
}
