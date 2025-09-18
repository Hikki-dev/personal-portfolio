import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
        "@components": new URL("./src/components", import.meta.url).pathname,
        "@layouts": new URL("./src/layouts", import.meta.url).pathname,
        "@types": new URL("./src/types/index.ts", import.meta.url).pathname,
        "@config": new URL("./src/config/index.ts", import.meta.url).pathname,
        "@icons": new URL("./src/components/icons", import.meta.url).pathname,
        "@assets": new URL("./src/assets", import.meta.url).pathname,
      },
    },
  },
});
