/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["src"],
  },
  images: {
    domains: ["media.valorant-api.com"],
  },
};

module.exports = nextConfig;
