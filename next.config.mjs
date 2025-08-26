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
  trailingSlash: false,
  // Явно указываем, что видеофайлы должны быть статическими
  staticPageGenerationTimeout: 120,
};

export default nextConfig;
