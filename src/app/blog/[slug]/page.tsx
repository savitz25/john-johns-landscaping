import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import JsonLd from "@/components/JsonLd";
import { BLOG_POSTS, getPostBySlug } from "@/lib/blog-data";
import { buildMetadata } from "@/lib/seo";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema";
import { BRAND } from "@/lib/brand";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.metaTitle.replace(" | JLuca Blog", "").replace(" | JLuca", ""),
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <PageShell
      crumbs={[
        { label: "Resources", href: "/blog" },
        { label: post.title },
      ]}
    >
      <JsonLd
        data={[
          blogPostingSchema(post),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
      <article className="mx-auto w-full max-w-3xl px-5 py-16">
        <time
          dateTime={post.date}
          className="text-xs font-semibold tracking-wide text-forest-600 uppercase"
        >
          {post.date}
        </time>
        <h1 className="mt-3 font-serif text-4xl font-semibold text-forest-900">
          {post.title}
        </h1>
        <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-muted">
          {post.content.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </div>
        <div className="mt-12 rounded-2xl border border-forest-100 bg-forest-50 p-6">
          <p className="font-medium text-forest-900">
            Need help with your yard in Cliffwood or Monmouth County?
          </p>
          <p className="mt-2 text-sm text-muted">
            Call{" "}
            <a href={`tel:${BRAND.phoneTel}`} className="font-semibold text-forest-700">
              {BRAND.phoneDisplay}
            </a>{" "}
            or{" "}
            <Link href="/#contact" className="font-semibold text-forest-700 hover:underline">
              get a quote
            </Link>
            .
          </p>
        </div>
      </article>
    </PageShell>
  );
}
