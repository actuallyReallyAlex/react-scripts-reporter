import React from "react";
import { Box, Paragraph, Heading, Text } from "grommet";

const Sidebar = ({ report, root }) => {
  return (
    <Box fill="vertical" pad="small" width="350px">
      <Heading level="1" size="medium">
        Test Results
      </Heading>
      {report.testResults.map(testResult => (
        <Text
          color={testResult.failureMessage ? "status-error" : "status-ok"}
          size="small"
        >
          {testResult.testFilePath.replace(root, "")}
        </Text>
      ))}
    </Box>
  );
};

export default Sidebar;
