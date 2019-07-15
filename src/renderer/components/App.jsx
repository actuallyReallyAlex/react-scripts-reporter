import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Accordion, Box, Text } from "grommet";
import TestResult from "./TestResult";
import Sidebar from "./Sidebar";
import { getReport, getRoot } from "../redux/actions/config";

const App = ({ config, dispatch }) => {
  useEffect(() => {
    dispatch(getReport());
    dispatch(getRoot());
  }, []);

  return (
    <Box background="dark-1" direction="row" fill>
      <Sidebar report={config.report} root={config.root} />
      <Box fill pad="small">
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
    </Box>
  );
};

const mapStateToProps = ({ config }) => ({ config });

export default connect(mapStateToProps)(App);
