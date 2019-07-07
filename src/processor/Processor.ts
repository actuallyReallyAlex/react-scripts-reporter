import fs = require("fs");

export class Processor {
  public static run(results: jest.AggregatedResult, config: {}) {
    return new Processor(results, config);
  }

  constructor(results: any, config: any) {
    console.log({ results, config });
    // fs.writeFileSync("./report/index.html", );
    console.log("File written");
  }
}
