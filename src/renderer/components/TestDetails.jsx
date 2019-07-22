import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Accordion, AccordionPanel, Box } from "grommet";

const TestDetails = ({ ui }) => {
  const { currentTestIndex, currentTestName } = ui;
  const [fileContents, setFileContents] = useState("");

  useEffect(() => {
    axios
      .get(`/${currentTestIndex}`)
      .then(response => setFileContents(response.data));
  }, []);

  return (
    <Accordion>
      <AccordionPanel label={currentTestName}>
        <Box height="medium" overflow="auto">
          <pre>{fileContents}</pre>
        </Box>
      </AccordionPanel>
    </Accordion>
  );
};

const mapStateToProps = ({ ui }) => ({ ui });

export default connect(mapStateToProps)(TestDetails);
