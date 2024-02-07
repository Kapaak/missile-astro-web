Sharp error fixed: yarn add sharp --ignore-engines
Sanity error with SRR fixed: sanityIntegration() in astro.config.mjs instead of sanity()

in order to add new package need to delete node_modules - this is due to sharp

Due to page transitions I need to listen to astro:page-load event, so that on page redirects
the eventListeners are newly setup
