/**
 * @returns {import('next').NextConfig}
 * */
const nextConfig = () => {
  const __PROD__ = process.env.NODE_ENV === 'production'

  return {
    /**
     * @see https://nextjs.org/docs/architecture/nextjs-compiler#remove-react-properties
     */
    compiler: {
      reactRemoveProperties: __PROD__
        ? { properties: ['^data-testid'] }
        : false,
      removeConsole: __PROD__
        ? {
            exclude: ['error'],
          }
        : false,
    },
    experimental: {
      appDir: true,
      serverActions: true,
      typedRoutes: true,
    },
    poweredByHeader: false,
    reactStrictMode: true,
    trailingSlash: true,
  }
}

module.exports = nextConfig()
