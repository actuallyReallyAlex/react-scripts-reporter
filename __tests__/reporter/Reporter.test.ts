import { Reporter } from "../../src/reporter/Reporter";

describe("Reporter", () => {
  it("Should create an instance of the Reporter class.", () => {
    const reporter = new Reporter({}, {});
    expect(reporter instanceof Reporter).toBe(true);
  });

  it("Should call onRunStart.", () => {
    const reporter = new Reporter({}, {});
    reporter.onRunStart({ numTotalTestSuites: 1 }, {});
  });

  it("Should increase the number of completed tests when onTestResult is called.", () => {
    const reporter = new Reporter({}, {});
    reporter.onRunStart({ numTotalTestSuites: 10 }, {});
    expect(reporter.completedTests).toBe(0);
    reporter.onTestResult({}, {}, {});
    expect(reporter.completedTests).toBe(1);
  });

  it("Should call onRunComplete().", () => {
    const reporter = new Reporter({}, {});
    reporter.onRunComplete({}, {});
  });
});
