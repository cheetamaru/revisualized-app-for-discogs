/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: process.env.DISCOGS_IMAGE_HOSTNAME,
        },
        {
          protocol: "https",
          hostname: process.env.DISCOGS_GRAVATAR_HOSTNAME,
        },
        {
          protocol: "https",
          hostname: process.env.DISCOGS_GRAVATAR_DEFAULT_HOSTNAME,
        },
        {
          protocol: "https",
          hostname: process.env.NEXT_PUBLIC_DISCOGS_HOSTNAME
        }
      ]
  }
};

export default nextConfig;
