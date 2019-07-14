import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  useEffect(() => {
    axios.get("http://localhost:5555/").then(response => {
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
    <div>
      <p>Number of Failed Test Suites: {report.numFailedTestSuites}</p>
      <p>Number of Failed Tests: {report.numFailedTests}</p>
      <p>Number of Passed Test Suites: {report.numPassedTestSuites}</p>
      <p>Number of Passed Tests: {report.numPassedTests}</p>
      <p>Number of Skipped Test Suites: {report.numPendingTestSuites}</p>
      <p>Number of Skipped Tests: {report.numPendingTests}</p>
    </div>
  );
};

export default App;
