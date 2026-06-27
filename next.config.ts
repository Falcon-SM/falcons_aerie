import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Ensure Turbopack resolves modules from this package directory
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
