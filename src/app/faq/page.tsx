import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "FAQ | Lawn Care & Landscaping Cliffwood",
  description:
    "FAQs about JLuca Landscaping: pricing, bi-weekly lawn care, service areas in Cliffwood & Monmouth County, and how to get a quote.",
  path: "/faq",
  keywords: ["landscaping FAQ Cliffwood", "lawn care cost NJ"],
});

export default function FaqPage() {
  return (
    <PageShell crumbs={[{ label: "FAQ" }]}>
      <JsonLd
        data={[
          faqSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />
      <Faq />
    </PageShell>
  );
}
