import fs = require("fs");
import path = require("path");

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
    this.createAssets();

    console.log("Report generated.");
  }

  public createReportJSON(results: jest.AggregatedResult) {
    fs.writeFileSync(
      "./report/report.json",
      JSON.stringify({ ...results }, null, 2)
    );
  }

  public createReportHTML() {
    const html = fs.readFileSync(
      path.resolve(__dirname, "../renderer/index.html")
    );
    fs.writeFileSync("./report/index.html", html);
  }

  public createReportJS() {
    const js = fs.readFileSync(path.resolve(__dirname, "../renderer/main.js"));
    fs.writeFileSync("./report/main.js", js);
  }

  public createAssets() {
    const webmanifest = fs.readFileSync(
      path.resolve(__dirname, "../renderer/assets/site.webmanifest")
    );
    const appleTouchIcon = fs.readFileSync(
      path.resolve(__dirname, "../renderer/assets/apple-touch-icon.png")
    );
    const favicon32 = fs.readFileSync(
      path.resolve(__dirname, "../renderer/assets/favicon-32x32.png")
    );
    const favicon16 = fs.readFileSync(
      path.resolve(__dirname, "../renderer/assets/favicon-16x16.png")
    );
    const favicon = fs.readFileSync(
      path.resolve(__dirname, "../renderer/assets/favicon.ico")
    );

    fs.writeFileSync("./report/site.webmanifest", webmanifest);
    fs.writeFileSync("./report/apple-touch-icon.png", appleTouchIcon);
    fs.writeFileSync("./report/favicon-32x32.png", favicon32);
    fs.writeFileSync("./report/favicon-16x16.png", favicon16);
    fs.writeFileSync("./report/favicon.ico", favicon);
  }
}
