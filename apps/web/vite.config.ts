import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: __dirname,
  envPrefix: ['VITE_', 'PAYLOAD_PUBLIC_'],
  plugins: [react(), tailwindcss()],
  build: {
    outDir: path.resolve(__dirname, '../../dist'),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          motion: ['motion'],
          router: ['react-router-dom'],
          validation: ['zod'],
        },
      },
    },
  },
  resolve: {
    alias: {
      '@portfolio/content-contract': path.resolve(__dirname, '../../packages/content-contract/src/index.ts'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
