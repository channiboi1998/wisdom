/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['images.ctfassets.net'],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "avatars.githubusercontent.com",
    //     port: "",
    //     pathname: "/**",
    //  },
    // ]
  }
};

module.exports = nextConfig;
