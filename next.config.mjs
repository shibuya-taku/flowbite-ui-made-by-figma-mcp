/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/figma_mcp' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig; 