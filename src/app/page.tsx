import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SERVICE_AREAS } from "@/lib/areas";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = buildMetadata({
  title: "Landscaping Cliffwood NJ | Lawn Care | JLuca",
  description:
    "JLuca Landscaping — local lawn care & landscaping in Cliffwood, NJ. Bi-weekly from $75. Mowing, beds, edges & clean-up. Call (732) 597-6659.",
  path: "/",
  keywords: [
    "landscaping Cliffwood NJ",
    "lawn care Cliffwood",
    "bi-weekly lawn care NJ",
  ],
});

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema()} />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <About />

        {/* Local SEO — service area strip */}
        <section
          id="service-areas-preview"
          className="border-y border-forest-100 bg-white py-16"
          aria-labelledby="areas-heading"
        >
          <div className="mx-auto w-full max-w-6xl px-5">
            <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <span className="mb-2 inline-block text-sm font-semibold tracking-widest text-forest-700 uppercase">
                  Service Area
                </span>
                <h2
                  id="areas-heading"
                  className="font-serif text-2xl font-semibold text-forest-900 sm:text-3xl"
                >
                  Landscaping Near Cliffwood &amp; Monmouth County
                </h2>
                <p className="mt-2 max-w-xl text-muted">
                  Proudly serving {BRAND.areaServedLabel}.
                </p>
              </div>
              <Link
                href="/service-areas"
                className="text-sm font-semibold text-forest-700 underline-offset-4 hover:underline"
              >
                View all service areas →
              </Link>
            </div>
            <ul className="flex flex-wrap gap-2">
              {SERVICE_AREAS.slice(0, 8).map((area) => (
                <li key={area.name}>
                  <Link
                    href="/service-areas"
                    className="inline-block rounded-full border border-forest-100 bg-forest-50 px-3.5 py-1.5 text-sm font-medium text-forest-800 transition hover:border-forest-300 hover:bg-forest-100"
                  >
                    {area.name}, {area.state}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">
              Looking for{" "}
              <Link
                href="/lawn-care-cliffwood-nj"
                className="font-semibold text-forest-700 hover:underline"
              >
                lawn care in Cliffwood
              </Link>{" "}
              or{" "}
              <Link
                href="/landscaping-monmouth-county"
                className="font-semibold text-forest-700 hover:underline"
              >
                landscaping in Monmouth County
              </Link>
              ? See our dedicated pages for local details.
            </p>
          </div>
        </section>

        <Faq limit={4} />
        <div className="bg-forest-50 pb-4 text-center">
          <Link
            href="/faq"
            className="text-sm font-semibold text-forest-700 underline-offset-4 hover:underline"
          >
            Read all FAQs →
          </Link>
        </div>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
