import { ImageResponse } from "next/og";

import { siteConfig } from "@/content/site";

export const size = {
  width: 1200,
  height: 630,
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
          padding: "58px 62px",
          background:
            "radial-gradient(circle at 88% 8%, rgba(104,130,151,0.38), transparent 42%), linear-gradient(140deg, #111419 0%, #151c24 52%, #2a3946 100%)",
          color: "#f4f2ee",
        }}
      >
        <div
          style={{
            width: "74px",
            height: "74px",
            borderRadius: "999px",
            border: "1px solid rgba(220,234,244,0.42)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "28px",
            letterSpacing: "0.06em",
            color: "#d9e4eb",
          }}
        >
          TA
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "20px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#dbe5eb" }}>
            Escritório de Advocacia em {siteConfig.city}
          </p>
          <h1 style={{ margin: 0, fontSize: "70px", lineHeight: 1.02, maxWidth: "920px" }}>{siteConfig.name}</h1>
          <p style={{ margin: 0, fontSize: "31px", color: "#e5ebef", maxWidth: "980px" }}>
            Direito Previdenciário | Direito Trabalhista | Direito Cível
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
