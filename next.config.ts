import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    webpack: (
        config,
        { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
      ) => {
        // Important: return the modified config
        return config
      },
};

export default nextConfig;
