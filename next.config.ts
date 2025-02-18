import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath:"/waifusims.github.io",
  rewrites: async () => [
    {
      source: "/",
      destination: "/index.html",
    },
  ],
};

export default nextConfig;
