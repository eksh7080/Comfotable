/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  compiler: {
    emotion: true,
  },
  scripts: {
    lint: 'next lint',
  },
};

module.exports = nextConfig;
