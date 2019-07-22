import React from "react";
import { connect } from "react-redux";
import Main from "./Main";
import TestDetails from "./TestDetails";

const Components = {
  Main: Main,
  TestDetails: TestDetails
};

const Content = ({ ui }) => {
  const { content } = ui;
  const Component = Components[content];
  return <Component />;
};

const mapStateToProps = ({ ui }) => ({ ui });

export default connect(mapStateToProps)(Content);
