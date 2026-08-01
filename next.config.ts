import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  // Static export only for GitHub Pages. Vercel keeps Node runtime for /api.
  ...(isGithubPages
    ? {
        output: "export" as const,
        basePath: "/john-johns-landscaping",
        assetPrefix: "/john-johns-landscaping",
      }
    : {}),
  images: {
    unoptimized: isGithubPages,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
