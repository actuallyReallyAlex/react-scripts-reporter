import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Grommet, grommet } from "grommet";
import { Provider } from "react-redux";
import store from "./redux/store/store";

ReactDOM.render(
  <Provider store={store}>
    <Grommet full theme={grommet}>
      <App />
    </Grommet>
  </Provider>,
  document.getElementById("root")
);
