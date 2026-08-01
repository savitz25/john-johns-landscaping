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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[4.5rem] border-b border-forest-100/80 bg-white shadow-sm">
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between px-5">
        <a
          href="#hero"
          className="relative z-50 flex shrink-0 items-center"
          onClick={close}
          aria-label={BRAND.name}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={BRAND.logoNavPath}
            alt={BRAND.name}
            className="h-14 w-auto object-contain object-left sm:h-[3.75rem]"
            width={80}
            height={60}
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-forest-900 transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-forest-500 after:transition-all hover:text-forest-700 hover:after:w-full"
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
            className={`block h-0.5 w-[22px] rounded bg-forest-900 transition-all ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-[22px] rounded bg-forest-900 transition-all ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-[22px] rounded bg-forest-900 transition-all ${
              open ? "-translate-y-[7px] -rotate-45" : ""
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
            src={BRAND.logoPath}
            alt=""
            className="mb-2 h-24 w-auto object-contain drop-shadow-[0_2px_14px_rgba(255,255,255,0.3)]"
            width={110}
            height={96}
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
