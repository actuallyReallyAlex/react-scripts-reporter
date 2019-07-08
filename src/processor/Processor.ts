import fs = require("fs");
import Mustache = require("mustache");

export class Processor {
  public static run(results: jest.AggregatedResult, config: {}) {
    return new Processor(results, config);
  }

  constructor(results: jest.AggregatedResult, config: {}) {
    if (!fs.existsSync("./report")) {
      fs.mkdirSync("./report");
    }

    this.createReportJSON(results);

    this.createReport(results);

    console.log("Files written");
  }

  public createReportJSON(results: jest.AggregatedResult) {
    fs.writeFileSync(
      "./report/report.json",
      JSON.stringify({ ...results }, null, 2)
    );
  }

  public createReport(results: jest.AggregatedResult) {
    const {
      numFailedTestSuites,
      numFailedTests,
      numPassedTestSuites,
      numPassedTests,
      numPendingTestSuites,
      numPendingTests
    } = results;

    const data = fs.readFileSync("./src/processor/index.html").toString("utf8");

    console.log(`Type of 'data' = ${typeof data}`);

    const renderedHTML = Mustache.render(data, {
      numFailedTestSuites,
      numFailedTests,
      numPassedTestSuites,
      numPassedTests,
      numPendingTestSuites,
      numPendingTests
    });

    console.log({ renderedHTML });

    // unction loadUser() {
    //   var template = document.getElementById('template').innerHTML
    //   Mustache.parse(template);   // optional, speeds up future uses
    //   var rendered = Mustache.render(template, {name: "Luke"});
    // $('#target').html(rendered);

    fs.writeFileSync("./report/index.html", renderedHTML);
  }
}
