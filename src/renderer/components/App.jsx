import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Accordion, Box, Heading, Text } from "grommet";
import TestResult from "./TestResult";
import Sidebar from "./Sidebar";
import { setReport, setRoot } from "../redux/actions/config";

const App = ({ config, dispatch }) => {
  useEffect(() => {
    axios.get("http://localhost:5000/report").then(response => {
      console.log({ data: response.data });
      dispatch(setReport(response.data));
    });

    axios.get("http://localhost:5000/root").then(response => {
      dispatch(setRoot(response.data));
    });
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
