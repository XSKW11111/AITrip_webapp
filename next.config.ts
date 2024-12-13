import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    webpack: (
        config,
        { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
      ) => {
        return config
      },
      async redirects() {
        return [
          // Basic redirect
          {
            source: '/',
            destination: '/trip',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
