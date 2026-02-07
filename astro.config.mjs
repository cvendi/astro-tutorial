// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://dancing-otter-ad592e.netlify.app",
  integrations: [preact()],
});