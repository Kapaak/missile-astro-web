import { config as dotenvConfig } from 'dotenv';
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { sanityIntegration } from "@sanity/astro";
import svelte from "@astrojs/svelte";
// Load environment variables
import vercel from "@astrojs/vercel/serverless";
dotenvConfig();

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  // image: {
  //   service: passthroughImageService() // to FIX image issue
  // },
  integrations: [tailwind(), sanityIntegration({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: "production",
    useCdn: false,
    apiVersion: "2024-01-07"
  }), svelte()],
  adapter: vercel({
    // edgeMiddleware:true
  })
});