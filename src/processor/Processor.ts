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

    console.log("Report generated.");
  }

  public createReportJSON(results: jest.AggregatedResult) {
    fs.writeFileSync(
      "./report/report.json",
      JSON.stringify({ ...results }, null, 2)
    );
  }
}
