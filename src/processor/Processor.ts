import fs = require("fs");

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

    fs.writeFileSync(
      "./report/index.html",
      `<html>
        <body>
          <div>
            <p>Number of Failed Test Suites: ${numFailedTestSuites}</p>
            <p>Number of Failed Tests: ${numFailedTests}</p>
            <p>Number of Passed Test Suites: ${numPassedTestSuites}</p>
            <p>Number of Passed Tests: ${numPassedTests}</p>
            <p>Number of Skipped Test Suites: ${numPendingTestSuites}</p>
            <p>Number of Skipped Tests: ${numPendingTests}</p>
          </div>
        </body>
      </html>`
    );
  }
}
