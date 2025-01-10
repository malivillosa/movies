import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VitePWA } from "vite-plugin-pwa"

// https://vite.dev/config/
export default defineConfig({
  base: "/movies/",
  plugins: [
    vue(),
    vueDevTools(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
          "favicon.ico",
      ],
      manifest: {
          name: "movies",
          short_name: "movies",
          description: "",
          theme_color: "#090909",
          icons: [
              {
                  src: "pwa-192x192.png",
                  sizes: "192x192",
                  type: "image/png"
              },
              {
                  src: "pwa-512x512.png",
                  sizes: "512x512",
                  type: "image/png"
              }
          ]
      }
  })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
