export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 py-8 text-white/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:flex-row">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-3">
          <svg
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
            className="text-forest-500"
            aria-hidden="true"
          >
            <path
              d="M16 4C16 4 8 10 8 18C8 22.4183 11.5817 26 16 26C20.4183 26 24 22.4183 24 18C24 10 16 4 16 4Z"
              fill="currentColor"
              opacity="0.9"
            />
            <path
              d="M16 26V14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.4"
            />
          </svg>
          <div className="text-center sm:text-left">
            <strong className="block font-serif text-[0.95rem] text-white">
              John Johns Landscaping
            </strong>
            <span className="text-sm text-white/55">
              Simple. Reliable. Local.
            </span>
          </div>
        </div>
        <p className="text-sm">
          &copy; {year} John Johns Landscaping. Cliffwood, NJ.
        </p>
      </div>
    </footer>
  );
}
