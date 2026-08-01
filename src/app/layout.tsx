import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { BRAND } from "@/lib/brand";
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

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.siteUrl),
  title: `${BRAND.name} | ${BRAND.locationShort}`,
  description: `Complete landscaping care for your entire property in ${BRAND.location}. Reliable, thorough, and done right — twice a month or every 10 days. Call ${BRAND.phoneDisplay}.`,
  keywords: [
    "landscaping",
    "Cliffwood NJ",
    "lawn care",
    "JLuca Landscaping",
    "J Luca Landscaping",
    "property maintenance",
  ],
  icons: {
    icon: BRAND.logoPath,
    apple: BRAND.logoPath,
  },
  openGraph: {
    title: `${BRAND.name} | ${BRAND.locationShort}`,
    description: `${BRAND.tagline} Complete landscaping care for Cliffwood & surrounding areas.`,
    type: "website",
    locale: "en_US",
    images: [{ url: BRAND.logoPath }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
