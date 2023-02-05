/**
 * Configuration for a Next.js project
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Enable React's strict mode for development checks
  reactStrictMode: true,
  // Enable minification with the swc JavaScript compiler
  swcMinify: true,
  // Specify the domains from which the application can load images
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  /**
   * Asynchronous function that returns an array of redirect objects
   * @returns {Array<{source: string, destination: string, permanent: boolean}>}
   */
  async redirects() {
    return [
      {
        // Specify the source URL to be redirected
        source: "/github",
        // Specify the destination URL
        destination: "https://github.com/steven-tey/precedent",
        // Specify if the redirect should be cached by the browser
        permanent: false,
      },
    ];
  },
};

// Export the nextConfig object as a module
module.exports = nextConfig;