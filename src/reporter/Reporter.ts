import figlet = require("figlet");
import gradient = require("gradient-string");
import boxen = require("boxen");
import ProgressBar = require("progress");
import chalk = require("chalk");

export class Reporter {
  public completedTests: number;
  public progressBar: ProgressBar;

  constructor(config: any, options: any) {
    this.completedTests = 0;
    const borderStyle = boxen.BorderStyle.Double;
    console.clear();
    console.log(
      boxen(
        gradient.pastel(
          figlet.textSync("react-scripts-reporter", {
            font: "Slant"
          })
        ),
        { borderStyle, float: "center", padding: 1 }
      )
    );
  }

  public onRunStart(results: any, options: any) {
    this.progressBar = new ProgressBar(":percent", {
      total: results.numTotalTestSuites
    });
  }

  public onTestResult(testRunConfig: any, testResults: any, runResults: any) {
    this.completedTests++;
    this.progressBar.tick();
  }

  public onRunComplete(test: any, runResults: any) {
    console.log(chalk.default.green("COMPLETE"));
  }
}
