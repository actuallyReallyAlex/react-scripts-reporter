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
    this.createReportHTML();
    this.createReportJS();

    console.log("Report generated.");
  }

  public createReportJSON(results: jest.AggregatedResult) {
    fs.writeFileSync(
      "./report/report.json",
      JSON.stringify({ ...results }, null, 2)
    );
  }

  public createReportHTML() {
    const html = fs.readFileSync("src/renderer/index.html");
    fs.writeFileSync("./report/index.html", html);
  }

  public createReportJS() {
    const js = fs.readFileSync("src/renderer/main.js");
    fs.writeFileSync("./report/main.js", js);
  }
}
