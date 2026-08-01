import { BRAND } from "@/lib/brand";
import { SERVICE_AREAS } from "@/lib/areas";
import { FAQS } from "@/lib/faq-data";
import { absoluteUrl } from "@/lib/seo";
import type { ServicePage } from "@/lib/services-data";
import type { BlogPost } from "@/lib/blog-data";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${BRAND.siteUrl}/#business`,
    name: BRAND.name,
    image: absoluteUrl(BRAND.logoPath),
    logo: absoluteUrl(BRAND.logoMarkPath),
    url: BRAND.siteUrl,
    telephone: BRAND.phoneTel,
    email: BRAND.email,
    priceRange: BRAND.priceRange,
    description: BRAND.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: BRAND.addressLocality,
      addressRegion: BRAND.addressRegion,
      postalCode: BRAND.postalCode,
      addressCountry: BRAND.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BRAND.geo.latitude,
      longitude: BRAND.geo.longitude,
    },
    areaServed: SERVICE_AREAS.map((a) => ({
      "@type": "City",
      name: `${a.name}, ${a.state}`,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:00",
        closes: "18:00",
      },
    ],
    sameAs: [],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BRAND.siteUrl}/#website`,
    url: BRAND.siteUrl,
    name: BRAND.name,
    description: BRAND.description,
    publisher: { "@id": `${BRAND.siteUrl}/#business` },
    inLanguage: "en-US",
  };
}

export function faqSchema(items = FAQS) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceSchema(service: ServicePage) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: { "@id": `${BRAND.siteUrl}/#business` },
    areaServed: SERVICE_AREAS.map((a) => `${a.name}, ${a.state}`),
    url: absoluteUrl(`/services/${service.slug}`),
  };
}

export function breadcrumbSchema(
  crumbs: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function blogPostingSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: BRAND.name,
    },
    publisher: {
      "@type": "Organization",
      name: BRAND.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(BRAND.logoMarkPath),
      },
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };
}
