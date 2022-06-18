/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => [
    {
      source: "/dashboard",
      destination: "/dashboard/search-and-delete",
      permanent: true,
    },
  ]
}

module.exports = nextConfig
