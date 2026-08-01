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
        aria-label="Beautiful landscaped garden"
      />
      <div className="absolute inset-0 bg-linear-to-br from-forest-950/85 via-forest-900/70 to-forest-950/80" />

      <div className="animate-fade-up relative z-10 w-full max-w-3xl px-5 pt-24">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={BRAND.logoPath}
          alt={BRAND.name}
          className="mx-auto mb-6 h-28 w-auto object-contain drop-shadow-[0_2px_16px_rgba(255,255,255,0.35)] sm:h-36 md:h-40"
          width={140}
          height={160}
        />
        <span className="inline-flex items-center rounded-full border border-white/25 bg-white/15 px-3.5 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
          Serving Cliffwood &amp; Surrounding Areas
        </span>
        <h1 className="mt-5 font-serif text-5xl leading-[1.1] font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
          Your Property.
          <br />
          <em className="text-forest-100 not-italic italic">Our Pride.</em>
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
          Complete landscaping care for your entire property. Reliable,
          thorough, and done right — twice a month or every 10 days.
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
            Contact Us
          </a>
        </div>
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
