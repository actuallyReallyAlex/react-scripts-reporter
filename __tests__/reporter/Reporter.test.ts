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

  it("Should call onRunComplete().", () => {
    const context: Set<jest.Context> = undefined;
    const agg: jest.AggregatedResult = {
      numFailedTestSuites: 0,
      numFailedTests: 0,
      numPassedTestSuites: 1,
      numPassedTests: 1,
      numPendingTests: 0,
      numPendingTestSuites: 0,
      numRuntimeErrorTestSuites: 0,
      numTotalTestSuites: 0,
      numTotalTests: 0,
      snapshot: undefined,
      startTime: 0,
      success: true,
      wasInterrupted: false,
      testResults: undefined
    };
    const reporter = new Reporter({}, {});
    reporter.onRunComplete(context, agg);
  });

  it("Should tick the progressbar on each test finishing.", () => {
    const reporter = new Reporter({}, {});
    reporter.progressBar = { tick: jest.fn() };
    expect(reporter.progressBar.tick).toHaveBeenCalledTimes(0);
    reporter.onTestResult({}, {}, {});
    expect(reporter.progressBar.tick).toHaveBeenCalledTimes(1);
  });
});
