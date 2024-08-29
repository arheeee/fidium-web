import 'dotenv/config';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "build",
  images: {
    domains: [
      new URL(process.env.NEXT_PUBLIC_CRAFT_CMS_BASE_PATH).hostname
      , new URL(process.env.NEXT_PUBLIC_CRAFT_CMS_ASSETS_PATH).hostname],
  },
};

export default nextConfig;