import type { Metadata } from "next";

import { siteConfig } from "@/content/site";

export const siteUrl = "https://www.testeetesteadvocacia.com.br";

export function buildMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${siteUrl}${normalizedPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: normalizedPath,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} | ${siteConfig.city}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/twitter-image"],
    },
  };
}
