import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Teste e teste Advocacia",
    short_name: "Teste e teste",
    description:
      "Escritório de advocacia em Franca-SP com atuação em Direito Previdenciário, Trabalhista e Cível.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f5f3",
    theme_color: "#111419",
    lang: "pt-BR",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
