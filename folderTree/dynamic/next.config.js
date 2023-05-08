/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  compiler: {
    emotion: true,
  },
  scripts: {
    lint: 'next lint',
  },
};

module.exports = nextConfig;
