/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*/",
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*/`
      },
    ];
  },
  // trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    fontLoaders: [
      { loader: 'next/font/google', options: { subsets: ['latin'] } },
    ],
  }
}

module.exports = nextConfig