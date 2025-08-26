/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: false,
      },
    ];
  },
  // Добавляем поддержку видеофайлов
  assetPrefix: "",
  trailingSlash: true,
  // Явно указываем, что видеофайлы должны быть статическими
  staticPageGenerationTimeout: 120,
  // Правильная обработка статических файлов в Next.js 15
  async headers() {
    return [
      {
        source: "/VIDEO/:path*",
        headers: [
          {
            key: "Content-Type",
            value: "video/mp4",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  // Включаем обработку статических файлов
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
