import { BRAND } from "@/lib/brand";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 py-10 text-white/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-8 px-5 sm:flex-row sm:gap-6">
        <a
          href="#hero"
          className="flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:gap-4"
          aria-label={BRAND.name}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={BRAND.logoPath}
            alt={BRAND.name}
            className="h-[4.5rem] w-auto object-contain drop-shadow-[0_1px_10px_rgba(255,255,255,0.25)] sm:h-20"
            width={90}
            height={80}
          />
          <span className="text-center text-sm text-white/50 sm:text-left">
            Simple. Reliable. Local.
          </span>
        </a>

        <div className="text-center text-sm sm:text-right">
          <p>
            <a
              href={`tel:${BRAND.phoneTel}`}
              className="transition hover:text-white"
            >
              {BRAND.phoneDisplay}
            </a>
            {" · "}
            <a
              href={`mailto:${BRAND.email}`}
              className="transition hover:text-white"
            >
              {BRAND.email}
            </a>
          </p>
          <p className="mt-1 text-white/45">
            &copy; {year} {BRAND.name}. {BRAND.locationShort}.
          </p>
        </div>
      </div>
    </footer>
  );
}
