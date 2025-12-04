import type { NextConfig } from "next";

/**
 * Static Export Configuration for Cloudflare Pages
 *
 * This config removes PayloadCMS and enables static HTML export.
 * Use this for deploying to Cloudflare Pages, Netlify, or any static host.
 *
 * Build command: next build
 * Output directory: out/
 */
const nextConfig: NextConfig = {
  output: 'export',

  // Required for static export - disable image optimization
  images: {
    unoptimized: true,
  },

  // Trailing slashes for cleaner static URLs
  trailingSlash: true,

  // Skip TypeScript/ESLint errors during build (optional)
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
