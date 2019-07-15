import React, { useEffect, useState } from "react";
import axios from "axios";
import { AccordionPanel, Box } from "grommet";
import path from "path";

const TestResult = ({ index, root, testResult }) => {
  const [fileContents, setFileContents] = useState("");

  useEffect(() => {
    axios.get(`/${index}`).then(response => setFileContents(response.data));
  }, []);

  return (
    <AccordionPanel label={testResult.testFilePath.replace(root, "")}>
      <Box height="medium" overflow="auto">
        <pre>{fileContents}</pre>
      </Box>
    </AccordionPanel>
  );
};

export default TestResult;
