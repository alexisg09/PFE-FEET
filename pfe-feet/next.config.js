/** @type {import('next').NextConfig} */
const nextConfig = {
 
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.

    // I am not in danger, Skyler. I am the danger.
    ignoreDuringBuilds: true,
  },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'media.discordapp.net',
          },
          {
            protocol: 'https',
            hostname: 'cdn.discordapp.com',
          },
        ],
      },
}

module.exports = nextConfig
