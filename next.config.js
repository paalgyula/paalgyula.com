/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    // appDir: true,
  },
  trailingSlash: true,
  pageExtensions: ['js', 'jsx'],
};
