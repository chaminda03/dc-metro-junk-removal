import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'www.weehauljunkdc.com',
          },
        ],
        destination: 'https://weehauljunkdc.com/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
