
import { config as dotenvConfig } from 'dotenv';
import { defineConfig,  } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { sanityIntegration } from "@sanity/astro";
import svelte from "@astrojs/svelte";

// Load environment variables
dotenvConfig();

export default defineConfig({
  // image: {
  //   service: passthroughImageService() // to FIX image issue
  // },
  integrations: [tailwind(), sanityIntegration({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: "production",
    useCdn: true,
    apiVersion: "2024-01-07"
  }), svelte()]
});