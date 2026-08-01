import Link from "next/link";
import { BRAND } from "@/lib/brand";
import { SERVICES } from "@/lib/services-data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 text-white/70" role="contentinfo">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" aria-label={`${BRAND.name} home`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={BRAND.logoPath}
              alt={`${BRAND.name} logo`}
              className="h-20 w-auto object-contain drop-shadow-[0_1px_10px_rgba(255,255,255,0.25)]"
              width={90}
              height={80}
            />
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-white/55">
            Local landscaping and lawn care in Cliffwood, NJ and surrounding
            Monmouth County. Simple. Reliable. Local.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-bold tracking-widest text-forest-400 uppercase">
            Contact
          </h2>
          {/* NAP block for local SEO consistency */}
          <address className="mt-3 not-italic text-sm leading-relaxed">
            <strong className="block text-white">{BRAND.name}</strong>
            <span className="block text-white/60">{BRAND.location}</span>
            <a
              href={`tel:${BRAND.phoneTel}`}
              className="mt-2 block font-semibold text-forest-300 transition hover:text-white"
            >
              {BRAND.phoneDisplay}
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              className="block transition hover:text-white"
            >
              {BRAND.email}
            </a>
          </address>
        </div>

        <div>
          <h2 className="text-xs font-bold tracking-widest text-forest-400 uppercase">
            Services
          </h2>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {SERVICES.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="transition hover:text-white"
                >
                  {s.shortTitle}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="transition hover:text-white">
                All services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold tracking-widest text-forest-400 uppercase">
            Explore
          </h2>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <Link href="/service-areas" className="transition hover:text-white">
                Service areas
              </Link>
            </li>
            <li>
              <Link
                href="/lawn-care-cliffwood-nj"
                className="transition hover:text-white"
              >
                Lawn care Cliffwood
              </Link>
            </li>
            <li>
              <Link
                href="/landscaping-monmouth-county"
                className="transition hover:text-white"
              >
                Monmouth County
              </Link>
            </li>
            <li>
              <Link href="/faq" className="transition hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/blog" className="transition hover:text-white">
                Resources / Blog
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="transition hover:text-white">
                Get a quote
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        <p>
          &copy; {year} {BRAND.name}. {BRAND.locationShort}. All rights
          reserved.
        </p>
        <p className="mt-1">
          Landscaping · Lawn care · Bi-weekly maintenance · Monmouth County, NJ
        </p>
      </div>
    </footer>
  );
}
