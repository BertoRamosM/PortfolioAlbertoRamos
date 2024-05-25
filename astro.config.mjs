import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 4567, 
    host: 'localhost'
  },
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'cat', 'fr'],
    routing: {
      prefixDefaultLocale: false
    }
  },
});