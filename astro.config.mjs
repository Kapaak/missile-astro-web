import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { sanityIntegration } from "@sanity/astro";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  image: {
    service: passthroughImageService() // to FIX image issue
  },
  integrations: [tailwind(), sanityIntegration({
    projectId: "zruf8q5v",
    dataset: "production",
    useCdn: true,
    apiVersion: "2024-01-07"
  }), svelte()]
});