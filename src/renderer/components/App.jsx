import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Text, Heading } from "grommet";

const App = () => {
  useEffect(() => {
    axios.get("http://localhost:5000/report").then(response => {
      console.log({ response });
      setReport(response.data);
    });
  }, []);

  const [report, setReport] = useState({
    numFailedTestSuites: null,
    numFailedTests: null,
    numPassedTestSuites: null,
    numPassedTests: null,
    numPendingTestSuites: null,
    numPendingTests: null
  });

  return (
    <Box align="center" fill justify="center">
      <Heading level="1">Test Results</Heading>
      <Text>Number of Failed Test Suites: {report.numFailedTestSuites}</Text>
      <Text>Number of Failed Tests: {report.numFailedTests}</Text>
      <Text>Number of Passed Test Suites: {report.numPassedTestSuites}</Text>
      <Text>Number of Passed Tests: {report.numPassedTests}</Text>
      <Text>Number of Skipped Test Suites: {report.numPendingTestSuites}</Text>
      <Text>Number of Skipped Tests: {report.numPendingTests}</Text>
    </Box>
  );
};

export default App;
