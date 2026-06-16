import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";
export const alt = "Abu Sufian Rubel — Senior Software Engineer";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "radial-gradient(circle at 20% 20%, rgba(37,99,235,.36), transparent 34%), radial-gradient(circle at 85% 30%, rgba(20,184,166,.28), transparent 32%), #020617",
          color: "#f8fafc",
          fontFamily: "Inter, Arial, sans-serif",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 36,
            border: "1px solid rgba(148, 163, 184, 0.22)",
            borderRadius: 44
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 24,
              background: "linear-gradient(135deg, #2563EB, #14B8A6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 26
            }}
          >
            ASR
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#93c5fd", fontSize: 24, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Portfolio
            </span>
            <span style={{ color: "rgba(248,250,252,.78)", fontSize: 22 }}>{siteConfig.remoteAvailability}</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 880 }}>
          <h1 style={{ fontSize: 72, lineHeight: 0.95, letterSpacing: "-0.06em", margin: 0 }}>{siteConfig.displayName}</h1>
          <p style={{ fontSize: 34, color: "rgba(248,250,252,.82)", margin: 0 }}>Senior Software Engineer</p>
          <p style={{ fontSize: 28, color: "#5eead4", margin: 0 }}>Laravel · Backend · APIs · Enterprise Systems</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 24, color: "rgba(248,250,252,.72)" }}>
          <span>Dhaka, Bangladesh · Remote Ready</span>
          <span>{siteConfig.email}</span>
        </div>
      </div>
    ),
    size
  );
}
