import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      // Redirect www to non-www
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'www.weehauljunkdc.com',
          },
        ],
        destination: 'https://weehauljunkdc.com/$1',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
