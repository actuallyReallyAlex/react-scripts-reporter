import React, { useEffect, useState } from "react";
import axios from "axios";
import { AccordionPanel, Box } from "grommet";

const TestResult = ({ testResult, index }) => {
  const [fileContents, setFileContents] = useState("");

  useEffect(() => {
    console.log({ index });
    axios.get(`/${index}`).then(response => {
      console.log({ fileContents });
      setFileContents(response.data);
    });
  }, []);

  return (
    <AccordionPanel label={testResult.testFilePath}>
      <Box height="medium" overflow="auto">
        <pre>{fileContents}</pre>
      </Box>
    </AccordionPanel>
  );
};

export default TestResult;
