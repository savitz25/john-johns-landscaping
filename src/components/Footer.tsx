import { BRAND } from "@/lib/brand";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 py-8 text-white/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:flex-row">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={BRAND.logoPath}
            alt={BRAND.name}
            className="h-16 w-auto object-contain drop-shadow-[0_1px_10px_rgba(255,255,255,0.28)]"
            width={48}
            height={64}
          />
          <div className="text-center sm:text-left">
            <strong className="block font-serif text-[0.95rem] text-white">
              {BRAND.name}
            </strong>
            <span className="text-sm text-white/55">
              Simple. Reliable. Local.
            </span>
          </div>
        </div>
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
          <p className="mt-1">
            &copy; {year} {BRAND.name}. {BRAND.locationShort}.
          </p>
        </div>
      </div>
    </footer>
  );
}
