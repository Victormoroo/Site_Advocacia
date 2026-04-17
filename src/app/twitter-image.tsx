import { ImageResponse } from "next/og";

import { siteConfig } from "@/content/site";

export const size = {
  width: 1200,
  height: 600,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "52px 58px",
          background:
            "radial-gradient(circle at 84% 10%, rgba(124,146,162,0.34), transparent 40%), linear-gradient(140deg, #131820 0%, #1d2630 56%, #324350 100%)",
          color: "#f4f2ee",
        }}
      >
        <div style={{ fontSize: 18, letterSpacing: "0.14em", textTransform: "uppercase", color: "#dbe5eb" }}>
          {siteConfig.city}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h1 style={{ margin: 0, fontSize: "62px", lineHeight: 1.05 }}>{siteConfig.name}</h1>
          <p style={{ margin: 0, fontSize: "28px", color: "#e3e8ec" }}>
            Previdenciário | Trabalhista | Cível
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
