import Link from "next/link";
import { BRAND } from "@/lib/brand";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh items-center justify-center overflow-hidden text-center"
    >
      <div
        className="absolute inset-0 animate-hero-zoom bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=2000&q=80)",
        }}
        role="img"
        aria-label="Professionally maintained residential lawn and landscaping in New Jersey"
      />
      <div className="absolute inset-0 bg-linear-to-br from-forest-950/85 via-forest-900/70 to-forest-950/80" />

      <div className="animate-fade-up relative z-10 w-full max-w-3xl px-5 pt-20">
        <span className="inline-flex items-center rounded-full border border-white/25 bg-white/15 px-3.5 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
          Landscaping &amp; Lawn Care · Cliffwood, NJ
        </span>
        <h1 className="mt-5 font-serif text-4xl leading-[1.12] font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Landscaping in Cliffwood, NJ
          <span className="mt-2 block text-forest-100">
            Your Property. Our Pride.
          </span>
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
          Local lawn care and full property landscaping for Cliffwood and
          Monmouth County. Bi-weekly or every 10 days—reliable, thorough, and
          done right.
        </p>
        <p className="mt-3 text-sm font-medium text-white/70">
          <a
            href={`tel:${BRAND.phoneTel}`}
            className="underline-offset-2 hover:text-white hover:underline"
          >
            {BRAND.phoneDisplay}
          </a>
          {" · "}
          Serving {BRAND.addressLocality} &amp; nearby towns
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="#pricing"
            className="w-full rounded-full bg-forest-700 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-forest-700/40 transition hover:-translate-y-0.5 hover:bg-forest-600 sm:w-auto"
          >
            View Pricing
          </a>
          <a
            href="#contact"
            className="w-full rounded-full border-2 border-white/50 px-8 py-3.5 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/12 sm:w-auto"
          >
            Get a Free Quote
          </a>
        </div>
        <p className="mt-6 text-xs text-white/55">
          <Link href="/services" className="underline-offset-2 hover:underline">
            Services
          </Link>
          {" · "}
          <Link
            href="/service-areas"
            className="underline-offset-2 hover:underline"
          >
            Service areas
          </Link>
          {" · "}
          <Link
            href="/lawn-care-cliffwood-nj"
            className="underline-offset-2 hover:underline"
          >
            Lawn care Cliffwood
          </Link>
        </p>
      </div>

      <a
        href="#services"
        className="animate-bounce-soft absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-xs font-medium tracking-widest text-white/70 uppercase transition hover:text-white"
        aria-label="Scroll to services"
      >
        Explore
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
