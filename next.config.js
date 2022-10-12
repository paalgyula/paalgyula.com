/** @type {import('next').NextConfig} */

const { i18n } = require('./src/i18n');

module.exports = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  i18n
};
