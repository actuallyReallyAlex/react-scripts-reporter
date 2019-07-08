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
    const context: any = {};
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
      snapshot: {
        added: 0,
        didUpdate: false,
        failure: false,
        filesAdded: 0,
        filesRemoved: 0,
        filesUnmatched: 0,
        filesUpdated: 0,
        matched: 0,
        total: 0,
        unchecked: 0,
        unmatched: 0,
        updated: 0
      },
      startTime: 0,
      success: true,
      wasInterrupted: false,
      testResults: []
    };
    const reporter = new Reporter({}, {});
    reporter.onRunComplete(context, agg);
  });

  it("Should tick the progressbar on each test finishing.", () => {
    const reporter = new Reporter({}, {});
    reporter.progressBar = {
      tick: jest.fn(),
      render: jest.fn(),
      interrupt: jest.fn(),
      terminate: jest.fn(),
      curr: 0,
      total: 10,
      update: jest.fn(),
      complete: false
    };
    expect(reporter.progressBar.tick).toHaveBeenCalledTimes(0);
    reporter.onTestResult({}, {}, {});
    expect(reporter.progressBar.tick).toHaveBeenCalledTimes(1);
  });
});
