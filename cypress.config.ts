import { defineConfig } from "cypress";

// To customize this config: https://docs.cypress.io/guides/references/configuration
export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    video: false,
    viewportWidth: 1280,
    viewportHeight: 720,
    retries: {
      runMode: 2,
      openMode: 0
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
