import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  e2e: {
    specPattern: "**/*.feature", // Sadece .feature dosyalarını test olarak gör
    async setupNodeEvents(on, config) {
      // Cucumber plugin'ini aktif et
      await addCucumberPreprocessorPlugin(on, config);

      // Kodları esbuild ile işle (Hız için)
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});