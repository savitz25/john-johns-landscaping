import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // GitHub Pages project site: https://savitz25.github.io/john-johns-landscaping/
  ...(isGithubPages
    ? {
        basePath: "/john-johns-landscaping",
        assetPrefix: "/john-johns-landscaping",
      }
    : {}),
};

export default nextConfig;
