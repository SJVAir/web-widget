import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/static/widget",
  plugins: [vue()],
  esbuild: {
    target: "es2024"
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  }
})
