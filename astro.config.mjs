import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "cat", "fr"],
    routing: {
      prefixDefaultLocale: "en",
    },
  },
  buildOptions: {
    out: "dist", // Specify the output directory as 'dist'
  },
});