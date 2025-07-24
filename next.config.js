/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true
  },
  // Disable all SWC features
  swcMinify: false,
  compiler: {
    // Remove React properties only in production
    removeConsole: process.env.NODE_ENV === 'production'
  },
  // Use Babel instead of SWC
  experimental: {
    forceSwcTransforms: false,
  },
  // Webpack config to handle any remaining issues
  webpack: (config, { dev, isServer }) => {
    // Avoid AWS SDK Node.js modules
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
}

module.exports = nextConfig