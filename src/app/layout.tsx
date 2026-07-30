import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
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
  title: "John Johns Landscaping | Cliffwood, NJ",
  description:
    "Complete landscaping care for your entire property in Cliffwood, New Jersey. Reliable, thorough, and done right — twice a month or every 10 days.",
  keywords: [
    "landscaping",
    "Cliffwood NJ",
    "lawn care",
    "John Johns Landscaping",
    "property maintenance",
  ],
  openGraph: {
    title: "John Johns Landscaping | Cliffwood, NJ",
    description:
      "Your Property. Our Pride. Complete landscaping care for Cliffwood & surrounding areas.",
    type: "website",
    locale: "en_US",
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
