import { withPayload } from "@payloadcms/next/withPayload";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.graphassets.com',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      }
    ],
  },
}

export default withPayload(nextConfig)
