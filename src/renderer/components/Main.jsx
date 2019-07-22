import React from "react";
import { Accordion, Box, Text } from "grommet";
import { connect } from "react-redux";
import TestResult from "./TestResult";

const Main = ({ config }) => {
  return (
    <Box pad="small">
      <Box fill="horizontal">
        <Text>
          Number of Failed Test Suites: {config.report.numFailedTestSuites}
        </Text>
        <Text>Number of Failed Tests: {config.report.numFailedTests}</Text>
        <Text>
          Number of Passed Test Suites: {config.report.numPassedTestSuites}
        </Text>
        <Text>Number of Passed Tests: {config.report.numPassedTests}</Text>
        <Text>
          Number of Skipped Test Suites: {config.report.numPendingTestSuites}
        </Text>
        <Text>Number of Skipped Tests: {config.report.numPendingTests}</Text>
      </Box>
      <Box align="center" fill="horizontal" justify="center">
        <Accordion>
          {config.report.testResults.map((testResult, i) => (
            <TestResult index={i} root={root} testResult={testResult} />
          ))}
        </Accordion>
      </Box>
    </Box>
  );
};

const mapStateToProps = ({ config }) => ({ config });

export default connect(mapStateToProps)(Main);
