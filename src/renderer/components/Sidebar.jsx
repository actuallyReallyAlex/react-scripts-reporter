import React from "react";
import { Box, Button, Heading, Text } from "grommet";
import { connect } from "react-redux";
import { setContent, setCurrentTest } from "../redux/actions/ui";

const Sidebar = ({ dispatch, report, root }) => {
  const handleClickMain = () => dispatch(setContent("Main"));
  const handleClickTest = (testFileIndex, testFileName) => {
    dispatch(setCurrentTest(testFileIndex, testFileName));
    dispatch(setContent("TestDetails"));
  };

  return (
    <Box
      border={{ color: "white", side: "right" }}
      fill="vertical"
      pad="small"
      width="350px"
    >
      <Heading level="1" size="medium">
        Test Results
      </Heading>
      <Button
        hoverIndicator
        label={
          <Text color="white" size="small">
            Main
          </Text>
        }
        onClick={handleClickMain}
        plain
      />
      {report.testResults.map((testResult, testFileIndex) => (
        <Button
          hoverIndicator
          label={
            <Text
              color={testResult.failureMessage ? "status-error" : "status-ok"}
              size="small"
            >
              {testResult.testFilePath.replace(root, "")}
            </Text>
          }
          onClick={() =>
            handleClickTest(
              testFileIndex,
              testResult.testFilePath.replace(root, "")
            )
          }
          plain
        />
      ))}
    </Box>
  );
};

const mapDispatchToProps = ({ dispatch }) => ({ dispatch });

export default connect(mapDispatchToProps)(Sidebar);
