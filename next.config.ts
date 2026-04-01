import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [60],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
