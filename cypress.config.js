const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl":"https://opensource-demo.orangehrmlive.com",
    "env":{
      "userName":"Admin",
      "password":"admin123"
    },
    "reporter":"mochawesome",
    "reporterOptions":{
      "reportDir": "cypress/results",
      "overwrite": true,
      "reportFilename": "TestResult",
      "reportTitle": "Automation Test Results",
      "charts": true,
      "code": true,
      "html": true,
      "json": false,
      "autoOpen": false,
      "embeddedScreenshots": true,
      "inline":true   
    },
    "video":true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
