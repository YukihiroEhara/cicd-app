import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
  },

  component: {
    // specPattern: "**/*.cy.{js,ts,jsx,tsx}",
    supportFile: false,
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
