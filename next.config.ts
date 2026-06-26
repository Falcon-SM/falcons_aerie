import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Ensure Turbopack resolves modules from this package directory
  // @ts-ignore - `turbopack` is not yet typed in Next's NextConfig
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
