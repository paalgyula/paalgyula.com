/** @type {import('next').NextConfig} */

// const rehypeHighlight = require("rehype-highlight");
// const remarkFrontmatter = require("remark-frontmatter");

const { i18n } = require("./i18n");

module.exports = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  i18n,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack: (config, options) => {
    config.resolve.fallback = { fs: false };
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
          options: {
            providerImportSource: "@mdx-js/react",
            remarkPlugins: [],
            rehypePlugins: [],
          },
        },
      ],
    });

    return config;
  },
};
