const createMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // Optionally add remark and rehype plugins
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  experimental: {},
  trailingSlash: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'], // Add 'md' and 'mdx'
};

module.exports = createMDX(nextConfig);