import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Crumb = { label: string; href?: string };

export default function PageShell({
  children,
  crumbs,
}: {
  children: React.ReactNode;
  crumbs?: Crumb[];
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-off-white pt-[4.5rem]">
        {crumbs && crumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="border-b border-forest-100 bg-white"
          >
            <ol className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-2 px-5 py-3 text-sm text-muted">
              <li>
                <Link href="/" className="hover:text-forest-700">
                  Home
                </Link>
              </li>
              {crumbs.map((c) => (
                <li key={c.label} className="flex items-center gap-2">
                  <span aria-hidden="true" className="text-forest-300">
                    /
                  </span>
                  {c.href ? (
                    <Link href={c.href} className="hover:text-forest-700">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="font-medium text-forest-900">
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {children}
      </main>
      <Footer />
    </>
  );
}
