import type { NextConfig } from "next";
import path from "path";

const staticExport = process.env.STATIC_EXPORT === "true";

const rawBase = process.env.BASE_PATH?.trim();
/** GitHub project pages use `/repo-name`; user/org site (`user.github.io`) uses no base path */
const basePath =
  rawBase && rawBase !== "/" ? (rawBase.startsWith("/") ? rawBase : `/${rawBase}`) : undefined;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname),

  ...(staticExport
    ? {
        output: "export" as const,
        trailingSlash: true,
      }
    : {}),

  ...(basePath ? { basePath } : {}),

  images: {
    unoptimized: staticExport,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
