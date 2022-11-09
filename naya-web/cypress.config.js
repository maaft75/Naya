const { defineConfig } = require("cypress");
const getCompareSnapshotsPlugin = require("cypress-image-diff-js/dist/plugin");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      getCompareSnapshotsPlugin(on, config);

      // These dimensions are NOT automatically inherited from viewportWidth and viewportHeight
      on("before:browser:launch", (browser = {}, launchOptions) => {
        if (browser.name === "electron" && browser.isHeadless) {
          launchOptions.preferences.width = 1920;
          launchOptions.preferences.height = 1080;
        }
        return launchOptions;
      });
    },
  },
  
  viewportWidth: 1920,
  viewportHeight: 1080,

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
    //supportFile: false
  },

});