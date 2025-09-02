import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "via.placeholder.com",
      "s3-alpha.figma.com",
      "figma-alpha-api.s3.us-west-2.amazonaws.com",
      "images.unsplash.com",
      "plus.unsplash.com",
    ],
  },
};

export default nextConfig;
