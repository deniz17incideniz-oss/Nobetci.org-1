import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nobetci.info";

export function createMetadata(title: string, description: string, path = "/"): Metadata {
  const url = new URL(path, siteUrl).toString();
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", locale: "tr_TR", siteName: "Nobetci.org" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export const absoluteSiteUrl = siteUrl;
