"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var figlet_1 = __importDefault(require("figlet"));
var gradient = require("gradient-string");
var boxen = require("boxen");
var progress_1 = __importDefault(require("progress"));
var chalk = require("chalk");
var Processor_1 = require("../processor/Processor");
var Reporter = (function () {
    function Reporter(config, options) {
        var borderStyle = "double";
        console.clear();
        console.log(boxen(gradient.pastel(figlet_1.default.textSync("react-scripts-reporter", {
            font: "Slant"
        })), { borderStyle: borderStyle, float: "center", padding: 1 }));
    }
    Reporter.prototype.onRunStart = function (results, options) {
        this.progressBar = new progress_1.default(":percent", {
            total: results.numTotalTestSuites
        });
    };
    Reporter.prototype.onTestResult = function (testRunConfig, testResults, runResults) {
        this.progressBar.tick();
    };
    Reporter.prototype.onRunComplete = function (contexts, results) {
        var numFailedTestSuites = results.numFailedTestSuites, numFailedTests = results.numFailedTests, numPassedTestSuites = results.numPassedTestSuites, numPassedTests = results.numPassedTests, numPendingTestSuites = results.numPendingTestSuites, numPendingTests = results.numPendingTests;
        console.log(chalk.default.green("COMPLETE"));
        console.log("Number of Failed Test Suites: " +
            (numFailedTestSuites > 0
                ? chalk.default.red("" + numFailedTestSuites)
                : chalk.default.green("" + numFailedTestSuites)));
        console.log("Number of Failed Tests: " +
            (numFailedTests > 0
                ? chalk.default.red("" + numFailedTests)
                : chalk.default.green("" + numFailedTests)));
        console.log("Number of Passed Test Suites: " +
            (numPassedTestSuites === 0
                ? chalk.default.red("" + numPassedTestSuites)
                : chalk.default.green("" + numPassedTestSuites)));
        console.log("Number of Passed Tests: " +
            (numPassedTests === 0
                ? chalk.default.red("" + numPassedTests)
                : chalk.default.green("" + numPassedTests)));
        console.log("Number of Skipped Test Suites: " +
            chalk.default.yellow("" + numPendingTestSuites));
        console.log("Number of Skipped Tests: " + chalk.default.yellow("" + numPendingTests));
        Processor_1.Processor.run(results, {});
    };
    return Reporter;
}());
exports.Reporter = Reporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb3J0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcmVwb3J0ZXIvUmVwb3J0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBNEI7QUFDNUIsMENBQTZDO0FBQzdDLDZCQUFnQztBQUNoQyxzREFBbUM7QUFDbkMsNkJBQWdDO0FBQ2hDLG9EQUFtRDtBQUVuRDtJQUdFLGtCQUFZLE1BQVcsRUFBRSxPQUFZO1FBQ25DLElBQU0sV0FBVyxXQUEyQixDQUFDO1FBQzdDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoQixPQUFPLENBQUMsR0FBRyxDQUNULEtBQUssQ0FDSCxRQUFRLENBQUMsTUFBTSxDQUNiLGdCQUFNLENBQUMsUUFBUSxDQUFDLHdCQUF3QixFQUFFO1lBQ3hDLElBQUksRUFBRSxPQUFPO1NBQ2QsQ0FBQyxDQUNILEVBQ0QsRUFBRSxXQUFXLGFBQUEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FDN0MsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVNLDZCQUFVLEdBQWpCLFVBQWtCLE9BQVksRUFBRSxPQUFZO1FBQzFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxrQkFBVyxDQUFDLFVBQVUsRUFBRTtZQUM3QyxLQUFLLEVBQUUsT0FBTyxDQUFDLGtCQUFrQjtTQUNsQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sK0JBQVksR0FBbkIsVUFBb0IsYUFBa0IsRUFBRSxXQUFnQixFQUFFLFVBQWU7UUFDdkUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU0sZ0NBQWEsR0FBcEIsVUFBcUIsUUFBYSxFQUFFLE9BQThCO1FBRTlELElBQUEsaURBQW1CLEVBQ25CLHVDQUFjLEVBQ2QsaURBQW1CLEVBQ25CLHVDQUFjLEVBQ2QsbURBQW9CLEVBQ3BCLHlDQUFlLENBQ0w7UUFFWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FDVCxnQ0FBZ0M7WUFDOUIsQ0FBQyxtQkFBbUIsR0FBRyxDQUFDO2dCQUN0QixDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBRyxtQkFBcUIsQ0FBQztnQkFDN0MsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUcsbUJBQXFCLENBQUMsQ0FBQyxDQUNyRCxDQUFDO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FDVCwwQkFBMEI7WUFDeEIsQ0FBQyxjQUFjLEdBQUcsQ0FBQztnQkFDakIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUcsY0FBZ0IsQ0FBQztnQkFDeEMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUcsY0FBZ0IsQ0FBQyxDQUFDLENBQ2hELENBQUM7UUFDRixPQUFPLENBQUMsR0FBRyxDQUNULGdDQUFnQztZQUM5QixDQUFDLG1CQUFtQixLQUFLLENBQUM7Z0JBQ3hCLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFHLG1CQUFxQixDQUFDO2dCQUM3QyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBRyxtQkFBcUIsQ0FBQyxDQUFDLENBQ3JELENBQUM7UUFDRixPQUFPLENBQUMsR0FBRyxDQUNULDBCQUEwQjtZQUN4QixDQUFDLGNBQWMsS0FBSyxDQUFDO2dCQUNuQixDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBRyxjQUFnQixDQUFDO2dCQUN4QyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBRyxjQUFnQixDQUFDLENBQUMsQ0FDaEQsQ0FBQztRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQ1QsaUNBQWlDO1lBQy9CLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUcsb0JBQXNCLENBQUMsQ0FDbEQsQ0FBQztRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQ1QsMkJBQTJCLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBRyxlQUFpQixDQUFDLENBQ3pFLENBQUM7UUFFRixxQkFBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLEFBekVELElBeUVDO0FBekVZLDRCQUFRIn0=