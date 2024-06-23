import { defineConfig } from 'astro/config';
import content from "@astro/content";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 4567,
    host: "localhost",
  },
  integrations: [tailwind(), content()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "ca", "fr"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});