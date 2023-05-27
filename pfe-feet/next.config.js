/** @type {import('next').NextConfig} */
const nextConfig = {

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
