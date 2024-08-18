import 'dotenv/config';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [new URL(process.env.NEXT_PUBLIC_CRAFT_CMS_BASE_PATH).hostname],
  },
};

export default nextConfig;