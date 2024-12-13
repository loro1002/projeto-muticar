import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression'; // Nome correto da importação
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    viteCompression(), // Uso do plugin de compressão
    sitemap({
      hostname: 'https://www.multcar.com.br',
      generateRobotsTxt: true,
    }),
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 500000,
    maxEntrypointSize: 500000,
  },
});
