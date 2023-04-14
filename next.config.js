/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  env: {
    CODE: process.env.AUTHORIZATION_CODE,
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
  },
};

module.exports = nextConfig;
