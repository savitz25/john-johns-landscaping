import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { BRAND, PRIMARY_KEYWORDS } from "@/lib/brand";
import Analytics from "@/components/Analytics";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#14532d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.siteUrl),
  title: {
    default: "Landscaping Cliffwood NJ | JLuca Landscaping",
    template: "%s | JLuca Landscaping",
  },
  description:
    "Local landscaping & lawn care in Cliffwood, NJ. Bi-weekly plans from $75. Mowing, beds, edges & clean-up. Call (732) 597-6659.",
  keywords: [
    ...PRIMARY_KEYWORDS,
    "lawn mowing Cliffwood",
    "JLuca Landscaping",
    "Aberdeen landscaping",
    "Matawan lawn care",
  ],
  authors: [{ name: BRAND.name, url: BRAND.siteUrl }],
  creator: BRAND.name,
  publisher: BRAND.name,
  applicationName: BRAND.name,
  category: "Landscaping",
  icons: {
    icon: BRAND.logoMarkPath,
    apple: BRAND.logoMarkPath,
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BRAND.siteUrl,
    siteName: BRAND.name,
    title: "Landscaping Cliffwood NJ | JLuca Landscaping",
    description:
      "Your Property. Our Pride. Complete lawn care & landscaping for Cliffwood and Monmouth County.",
    images: [
      {
        url: absoluteUrl(BRAND.ogImagePath),
        alt: "JLuca Landscaping — Cliffwood, NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landscaping Cliffwood NJ | JLuca Landscaping",
    description:
      "Bi-weekly lawn care & full property landscaping in Cliffwood, NJ. Call (732) 597-6659.",
    images: [absoluteUrl(BRAND.ogImagePath)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
  other: {
    "geo.region": "US-NJ",
    "geo.placename": "Cliffwood",
    "geo.position": `${BRAND.geo.latitude};${BRAND.geo.longitude}`,
    ICBM: `${BRAND.geo.latitude}, ${BRAND.geo.longitude}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen antialiased">
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
