import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Box } from "grommet";
import Sidebar from "./Sidebar";
import { getReport, getRoot } from "../redux/actions/config";
import Content from "./Content";

const App = ({ config, dispatch }) => {
  useEffect(() => {
    dispatch(getReport());
    dispatch(getRoot());
  }, []);

  return (
    <Box background="dark-1" direction="row" fill>
      <Sidebar report={config.report} root={config.root} />
      <Content />
    </Box>
  );
};

const mapStateToProps = ({ config }) => ({ config });

export default connect(mapStateToProps)(App);
