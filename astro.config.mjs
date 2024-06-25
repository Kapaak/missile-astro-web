import { config as dotenvConfig } from 'dotenv';
import { defineConfig, squooshImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import sanity from '@sanity/astro'

// Load environment variables
import vercel from "@astrojs/vercel/serverless";
dotenvConfig();

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  image: {
    service: squooshImageService() // to FIX image issue with sharp
  },
  integrations: [tailwind(), sanity({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: "production",
    useCdn: false,
    apiVersion: "2024-01-07"
  }), svelte()],
  adapter: vercel({
    edgeMiddleware:true,
    webAnalytics:{
      enabled:true,
    },
  })
});