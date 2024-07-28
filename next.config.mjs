/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compress: true,
  compiler: {
    removeConsole: process.env.APP_ENV == 'production',
  },
  output: 'standalone',
  images: {
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rpkm67.sgp1.cdn.digitaloceanspaces.com',
      },
      {
        protocol: 'https',
        hostname: 's3.sgcu.in.th',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.API_BASE_URL,
    NEXT_PUBLIC_BAAN_ANNOUCE_DATE: process.env.BAAN_ANNOUCE_DATE,
    NEXT_PUBLIC_CLOSED_BAAN_SELECTION_DATE:
      process.env.CLOSED_BAAN_SELECTION_DATE,
    NEXT_PUBLIC_FIRST_DATE_DATE: process.env.FIRST_DATE_DATE,
    NEXT_PUBLIC_FRESHY_NIGHT_DATE: process.env.FRESHY_NIGHT_DATE,
    NEXT_PUBLIC_FRESHY_NIGHT_EVENT: process.env.FRESHY_NIGHT_EVENT,
    NEXT_PUBLIC_RPKM_DAY_1: process.env.RPKM_DAY_1,
    NEXT_PUBLIC_RPKM_DAY_2: process.env.RPKM_DAY_2,
    NEXT_PUBLIC_RUP_PEUN_DATE: process.env.RUP_PEUN_DATE,
  },
};

export default nextConfig;
