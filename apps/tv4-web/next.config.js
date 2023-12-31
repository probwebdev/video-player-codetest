const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const ContentSecurityPolicy = `
  default-src 'self';
  img-src https://*;
  child-src 'none';
`;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'iptvimagecache-playplus-prod-vip.han.telia.se',
      },
    ],
  },
  transpilePackages: ['@tv4/api'],
};

module.exports = (phase) => {
  const config = [withBundleAnalyzer].reduce(
    (acc, plugin) => plugin(acc),
    nextConfig
  );

  /* Temporarily disable secure headers for prod build
  if (phase !== PHASE_DEVELOPMENT_SERVER) {
    return {
      async headers() {
        return [
          {
            source: '/:path*',
            headers: securityHeaders,
          },
        ];
      },
      ...config,
    };
  }
  */

  return config;
};
