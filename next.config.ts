import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  darkMode: "class",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
