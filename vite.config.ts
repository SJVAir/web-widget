import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  base: "/static/widget",
  plugins: [svelte()],
  esbuild: {
    target: "es2024"
  },
})
