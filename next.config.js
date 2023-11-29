/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'packschool.s3.amazonaws.com' }],
  },
};

module.exports = nextConfig;
