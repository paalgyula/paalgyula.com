/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  experimental: {
    swcMinify: true,
  },
  trailingSlash: true,
};
