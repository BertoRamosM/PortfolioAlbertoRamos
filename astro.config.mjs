import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 4567,
    host: "localhost"
  },
  integrations: [tailwind(), react()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "ca", "fr"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});