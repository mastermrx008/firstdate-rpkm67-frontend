/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.BASE_DOMAIN_IMAGES,
      },
    ],
  },
};

export default nextConfig;
