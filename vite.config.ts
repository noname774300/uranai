import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "./",
  build: {
    outDir: "./dist",
  },
  server: {
    open: true,
  },
  plugins: [
    VitePWA({
      devOptions: { enabled: true },
      registerType: "prompt",
      includeAssets: ["favicon.ico", "apple-touch-icon.png"],
      manifest: {
        name: "cgl-boilerplate",
        short_name: "cgl-boilerplate",
        description: "cgl-boilerplate",
        theme_color: "#cc144b",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
