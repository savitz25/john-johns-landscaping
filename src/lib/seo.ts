import type { Metadata } from "next";
import { BRAND, PRIMARY_KEYWORDS } from "@/lib/brand";

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function absoluteUrl(path = "/"): string {
  const base = BRAND.siteUrl.replace(/\/$/, "");
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  noIndex = false,
}: PageSeo): Metadata {
  const url = absoluteUrl(path);
  const kw = [...PRIMARY_KEYWORDS, ...keywords, BRAND.name, "Cliffwood NJ"];

  return {
    title,
    description,
    keywords: kw,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: BRAND.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: absoluteUrl(BRAND.ogImagePath),
          alt: `${BRAND.name} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(BRAND.ogImagePath)],
    },
  };
}

/** All public routes for sitemap */
export const SITE_ROUTES: { path: string; changeFrequency: "weekly" | "monthly"; priority: number }[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/lawn-care-cliffwood-nj", changeFrequency: "weekly", priority: 0.95 },
  { path: "/landscaping-monmouth-county", changeFrequency: "weekly", priority: 0.9 },
  { path: "/service-areas", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services", changeFrequency: "weekly", priority: 0.9 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.75 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/#pricing", changeFrequency: "monthly", priority: 0.6 },
  { path: "/#contact", changeFrequency: "monthly", priority: 0.6 },
];
