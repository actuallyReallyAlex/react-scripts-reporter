// import * as chalk from 'chalk'
const chalk = require('chalk')
// import Logger from './util/Logger'

class ReactScriptsReporter {
  /**
   * constructor for the 
   *
   * @param {Object} globalConfig - Jest configuration object
   * @param {Object} options - Options object defined in jest config
   */
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig
    this._options = options
    // this.logger = new Logger()
  }

  /**
   * Hook to process the test run before running the tests, the only real data
   * available at this time is the number of test suites about to be executed
   *
   * @param {JestTestRunResult} - Results for the test run, but only `numTotalTestSuites` is of use
   * @param {JestRunConfig} - Run configuration
   */
  onRunStart(runResults, runConfig) {
    // this.logger.info(`onRunStart arguments: ${JSON.stringify(arguments, null, 2)}`)
    console.clear()
    console.log(chalk.blue('this should be blue'))
    // this.logger.info(chalk.green('react-scripts-reporter'))
    // this.logger.info(chalk.blue('----------------------'))
    // this.logger.info('')
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
    // this.logger.info(`onTestResult arguments: ${JSON.stringify(arguments, null, 2)}`)
  }

  /**
   * Hook to process the test run results after all the test suites have been
   * executed
   *
   * @param {string} test - The Test last run
   * @param {JestTestRunResult} - Results from the test run
   */
  onRunComplete(test, runResults) {
    // this.logger.info(
    //   `onRunComplete arguments: ${JSON.stringify(arguments, null, 2)}`
    // )
    // this.logger.info('')
    // this.logger.info(chalk.blue('----------------------'))
    // this.logger.info(chalk.green('COMPLETE'))
    // this.logger.info(chalk.blue('----------------------'))
    // this.logger.info('')
  }
}


module.exports = ReactScriptsReporter