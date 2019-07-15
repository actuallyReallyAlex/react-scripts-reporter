import React, { useEffect, useState } from "react";
import axios from "axios";
import { Accordion, Box, Heading, Text } from "grommet";
import TestResult from "./TestResult";

const App = () => {
  useEffect(() => {
    axios.get("http://localhost:5000/report").then(response => {
      console.log({ data: response.data });
      setReport(response.data);
    });

    axios.get("http://localhost:5000/root").then(response => {
      setRoot(response.data);
    });
  }, []);

  const [report, setReport] = useState({
    numFailedTestSuites: null,
    numFailedTests: null,
    numPassedTestSuites: null,
    numPassedTests: null,
    numPendingTestSuites: null,
    numPendingTests: null,
    testResults: []
  });
  const [root, setRoot] = useState(null);

  return (
    <Box fill>
      <Heading level="1">Test Results</Heading>
      <Box fill="horizontal">
        <Text>Number of Failed Test Suites: {report.numFailedTestSuites}</Text>
        <Text>Number of Failed Tests: {report.numFailedTests}</Text>
        <Text>Number of Passed Test Suites: {report.numPassedTestSuites}</Text>
        <Text>Number of Passed Tests: {report.numPassedTests}</Text>
        <Text>
          Number of Skipped Test Suites: {report.numPendingTestSuites}
        </Text>
        <Text>Number of Skipped Tests: {report.numPendingTests}</Text>
      </Box>
      <Box align="center" fill="horizontal" justify="center">
        <Accordion>
          {report.testResults.map((testResult, i) => (
            <TestResult index={i} root={root} testResult={testResult} />
          ))}
        </Accordion>
      </Box>
    </Box>
  );
};

export default App;
