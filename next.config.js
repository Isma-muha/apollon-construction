/** @type {import('next').NextConfig} */
const isExport = !!process.env.STATIC_EXPORT;

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: isExport,
  output: isExport ? "export" : undefined,
  images: { unoptimized: true },
  async redirects() {
    if (isExport) return [];
    return [{ source: "/", destination: "/fr", permanent: true }];
  }
};

module.exports = nextConfig;
