/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => [
    {
      source: "/dashboard",
      destination: "/dashboard/search-and-delete",
      permanent: true,
    },
  ],
  images: {
    domains: ["pbs.twimg.com"],
  },
};

module.exports = nextConfig;
