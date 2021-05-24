var reporter = require("cucumber-html-reporter");

var options = {
  theme: "bootstrap",
  jsonFile: "./cucumber.json",
  output: "reports/report.html",
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    "App Version": "0.0.1",
    "Test Environment": "TESTING",
  },
};

reporter.generate(options);
