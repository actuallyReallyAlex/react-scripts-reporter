import fs = require("fs");

export class Processor {
  public static run(results: jest.AggregatedResult, config: {}) {
    return new Processor(results, config);
  }

  constructor(results: jest.AggregatedResult, config: {}) {
    const {
      numFailedTestSuites,
      numFailedTests,
      numPassedTestSuites,
      numPassedTests,
      numPendingTestSuites,
      numPendingTests
    } = results;

    if (!fs.existsSync("./report")) {
      fs.mkdirSync("./report");
    }

    fs.writeFileSync(
      "./report/report.json",
      JSON.stringify({ ...results }, null, 2)
    );

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
    console.log("Files written");
  }
}
