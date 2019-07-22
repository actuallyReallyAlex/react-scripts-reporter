import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Grommet, grommet } from "grommet";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import * as Sentry from '@sentry/browser';

Sentry.init({dsn: "https://dca9f4f412b644969a67ed784299cc0f@sentry.io/1510040"});

ReactDOM.render(
  <Provider store={store}>
    <Grommet full theme={grommet}>
      <App />
    </Grommet>
  </Provider>,
  document.getElementById("root")
);
