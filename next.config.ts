import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: { NEXT_PUBLIC_PREVIEW_READ_ONLY: process.env.PREVIEW_READ_ONLY === 'true' ? 'true' : 'false' },
};

export default nextConfig;
