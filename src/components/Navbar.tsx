"use client";

import { useEffect, useState } from "react";
import { BRAND } from "@/lib/brand";

const links = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[72px] transition-all duration-300 ${
        scrolled
          ? "bg-white/92 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between px-5">
        <a
          href="#hero"
          className="relative z-50 flex items-center gap-2.5"
          onClick={close}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={BRAND.logoLightPath}
            alt={BRAND.name}
            className={`h-12 w-auto rounded-full object-cover shadow-sm ring-1 transition ${
              scrolled || open
                ? "ring-forest-100"
                : "ring-white/30"
            }`}
            width={48}
            height={48}
          />
          <span className="flex flex-col leading-tight">
            <span
              className={`font-serif text-lg font-semibold transition-colors ${
                scrolled || open ? "text-forest-900" : "text-white"
              }`}
            >
              {BRAND.shortName}
            </span>
            <span
              className={`text-[0.7rem] font-medium tracking-wider uppercase transition-colors ${
                scrolled || open
                  ? "text-forest-700"
                  : "text-white/75"
              }`}
            >
              Landscaping
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-forest-500 after:transition-all hover:after:w-full ${
                scrolled
                  ? "text-forest-900 hover:text-forest-700"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-forest-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-forest-700/30 transition hover:-translate-y-0.5 hover:bg-forest-600"
          >
            Get a Quote
          </a>
        </nav>

        <button
          type="button"
          className="relative z-50 flex flex-col gap-1.5 p-2 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-[22px] rounded transition-all ${
              open
                ? "translate-y-[7px] rotate-45 bg-white"
                : scrolled
                  ? "bg-forest-900"
                  : "bg-white"
            }`}
          />
          <span
            className={`block h-0.5 w-[22px] rounded transition-all ${
              open
                ? "opacity-0"
                : scrolled
                  ? "bg-forest-900"
                  : "bg-white"
            }`}
          />
          <span
            className={`block h-0.5 w-[22px] rounded transition-all ${
              open
                ? "-translate-y-[7px] -rotate-45 bg-white"
                : scrolled
                  ? "bg-forest-900"
                  : "bg-white"
            }`}
          />
        </button>

        <div
          className={`fixed inset-0 flex flex-col items-center justify-center gap-7 bg-forest-950/98 backdrop-blur-xl transition-all duration-300 md:hidden ${
            open
              ? "visible opacity-100"
              : "invisible opacity-0 pointer-events-none"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={BRAND.logoLightPath}
            alt=""
            className="mb-2 h-16 w-16 rounded-full object-cover ring-2 ring-forest-600/40"
            width={64}
            height={64}
            aria-hidden="true"
          />
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className="text-xl font-medium text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={close}
            className="mt-2 rounded-full bg-forest-600 px-8 py-3.5 text-base font-semibold text-white"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
}
