class ReactScriptsReporter {
  /**
   * constructor for the reporter
   *
   * @param {Object} globalConfig - Jest configuration object
   * @param {Object} options - Options object defined in jest config
   */
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig
    this._options = options
  }

  /**
   * Hook to process the test run before running the tests, the only real data
   * available at this time is the number of test suites about to be executed
   *
   * @param {JestTestRunResult} - Results for the test run, but only `numTotalTestSuites` is of use
   * @param {JestRunConfig} - Run configuration
   */
  onRunStart(runResults, runConfig) {
    console.log(`onRunStart arguments: ${JSON.stringify(arguments, null, 2)}`)
  }

  /**
   * Hook to process the test run results after a test suite has been executed
   * This will be called many times during the test run
   *
   * @param {JestTestSuiteRunConfig} testRunConfig - Context information about the test run
   * @param {JestTestSuiteResult} testResults - Results for the test suite just executed
   * @param {JestTestRunResult} - Results for the test run at the point in time of the test suite being executed
   */
  onTestResult(testRunConfig, testResults, runResults) {
    console.log(`onTestResult arguments: ${JSON.stringify(arguments, null, 2)}`)
  }

  /**
   * Hook to process the test run results after all the test suites have been
   * executed
   *
   * @param {string} test - The Test last run
   * @param {JestTestRunResult} - Results from the test run
   */
  onRunComplete(test, runResults) {
    console.log(
      `onRunComplete arguments: ${JSON.stringify(arguments, null, 2)}`
    )
  }
}

module.exports = ReactScriptsReporter
