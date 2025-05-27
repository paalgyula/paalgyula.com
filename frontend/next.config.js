/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  swcMinify: true,
  experimental: {},
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  trailingSlash: true,
};
