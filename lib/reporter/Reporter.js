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
var Sentry = require("@sentry/node");
var Reporter = (function () {
    function Reporter(config, options) {
        Sentry.init({
            dsn: "https://d8d9d7aef3594c6388835cdaf834b781@sentry.io/1510035"
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb3J0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcmVwb3J0ZXIvUmVwb3J0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBNEI7QUFDNUIsMENBQTZDO0FBQzdDLDZCQUFnQztBQUNoQyxzREFBbUM7QUFDbkMsNkJBQWdDO0FBQ2hDLG9EQUFtRDtBQUNuRCxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFdkM7SUFHRSxrQkFBWSxNQUFXLEVBQUUsT0FBWTtRQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1YsR0FBRyxFQUFFLDREQUE0RDtTQUNsRSxDQUFDLENBQUM7UUFDSCxJQUFNLFdBQVcsV0FBMkIsQ0FBQztRQUM3QyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FDVCxLQUFLLENBQ0gsUUFBUSxDQUFDLE1BQU0sQ0FDYixnQkFBTSxDQUFDLFFBQVEsQ0FBQyx3QkFBd0IsRUFBRTtZQUN4QyxJQUFJLEVBQUUsT0FBTztTQUNkLENBQUMsQ0FDSCxFQUNELEVBQUUsV0FBVyxhQUFBLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQzdDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFTSw2QkFBVSxHQUFqQixVQUFrQixPQUFZLEVBQUUsT0FBWTtRQUMxQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksa0JBQVcsQ0FBQyxVQUFVLEVBQUU7WUFDN0MsS0FBSyxFQUFFLE9BQU8sQ0FBQyxrQkFBa0I7U0FDbEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLCtCQUFZLEdBQW5CLFVBQW9CLGFBQWtCLEVBQUUsV0FBZ0IsRUFBRSxVQUFlO1FBQ3ZFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVNLGdDQUFhLEdBQXBCLFVBQXFCLFFBQWEsRUFBRSxPQUE4QjtRQUU5RCxJQUFBLGlEQUFtQixFQUNuQix1Q0FBYyxFQUNkLGlEQUFtQixFQUNuQix1Q0FBYyxFQUNkLG1EQUFvQixFQUNwQix5Q0FBZSxDQUNMO1FBRVosT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQ1QsZ0NBQWdDO1lBQzlCLENBQUMsbUJBQW1CLEdBQUcsQ0FBQztnQkFDdEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUcsbUJBQXFCLENBQUM7Z0JBQzdDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFHLG1CQUFxQixDQUFDLENBQUMsQ0FDckQsQ0FBQztRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQ1QsMEJBQTBCO1lBQ3hCLENBQUMsY0FBYyxHQUFHLENBQUM7Z0JBQ2pCLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFHLGNBQWdCLENBQUM7Z0JBQ3hDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFHLGNBQWdCLENBQUMsQ0FBQyxDQUNoRCxDQUFDO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FDVCxnQ0FBZ0M7WUFDOUIsQ0FBQyxtQkFBbUIsS0FBSyxDQUFDO2dCQUN4QixDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBRyxtQkFBcUIsQ0FBQztnQkFDN0MsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUcsbUJBQXFCLENBQUMsQ0FBQyxDQUNyRCxDQUFDO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FDVCwwQkFBMEI7WUFDeEIsQ0FBQyxjQUFjLEtBQUssQ0FBQztnQkFDbkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUcsY0FBZ0IsQ0FBQztnQkFDeEMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUcsY0FBZ0IsQ0FBQyxDQUFDLENBQ2hELENBQUM7UUFDRixPQUFPLENBQUMsR0FBRyxDQUNULGlDQUFpQztZQUMvQixLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFHLG9CQUFzQixDQUFDLENBQ2xELENBQUM7UUFDRixPQUFPLENBQUMsR0FBRyxDQUNULDJCQUEyQixHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUcsZUFBaUIsQ0FBQyxDQUN6RSxDQUFDO1FBRUYscUJBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQTVFRCxJQTRFQztBQTVFWSw0QkFBUSJ9