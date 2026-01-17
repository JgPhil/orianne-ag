import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true,
  },
  // Optimisations pour Cloudflare Pages
  // Note: compress et properties below might not apply to static export the same way but keeping them doesn't hurt usually, except output: standalone which conflicts with export.
  // compress: true, 
  // poweredByHeader: false,
  // generateEtags: true,
};

export default nextConfig;
