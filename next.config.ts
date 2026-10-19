import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ydhstraw.web.id",
      },
    ],
  },
};

export default nextConfig;
