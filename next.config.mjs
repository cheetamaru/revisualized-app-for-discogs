/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: process.env.DISCOGS_IMAGE_HOSTNAME,
          },
          {
            protocol: "https",
            hostname: process.env.DISCOGS_GRAVATAR_HOSTNAME,
          }
        ]
    }
};

export default nextConfig;
