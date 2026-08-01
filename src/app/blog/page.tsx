import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { BLOG_POSTS } from "@/lib/blog-data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Lawn Care Resources | Cliffwood NJ Blog",
  description:
    "Tips and guides on lawn care and landscaping for Cliffwood and Monmouth County homeowners from JLuca Landscaping.",
  path: "/blog",
  keywords: ["lawn care tips Cliffwood", "landscaping blog NJ"],
});

export default function BlogIndexPage() {
  return (
    <PageShell crumbs={[{ label: "Resources" }]}>
      <div className="mx-auto w-full max-w-3xl px-5 py-16">
        <h1 className="font-serif text-4xl font-semibold text-forest-900">
          Lawn Care &amp; Landscaping Resources
        </h1>
        <p className="mt-4 text-lg text-muted">
          Practical guides for homeowners in Cliffwood and Monmouth County. We’ll
          keep adding local tips here over time.
        </p>

        <ul className="mt-12 flex flex-col gap-6">
          {BLOG_POSTS.map((post) => (
            <li key={post.slug}>
              <article className="rounded-2xl border border-forest-100 bg-white p-6 shadow-sm">
                <time
                  dateTime={post.date}
                  className="text-xs font-semibold tracking-wide text-forest-600 uppercase"
                >
                  {post.date}
                </time>
                <h2 className="mt-2 font-serif text-xl font-semibold text-forest-900">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-forest-700"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-muted">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-3 inline-block text-sm font-semibold text-forest-700 hover:underline"
                >
                  Read article →
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
