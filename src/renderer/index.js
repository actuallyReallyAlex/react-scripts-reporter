import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Grommet, grommet } from "grommet";

ReactDOM.render(
  <Grommet full theme={grommet}>
    <App />
  </Grommet>,
  document.getElementById("root")
);
