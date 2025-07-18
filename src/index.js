import React from "react";
import ReactDOM from "react-dom";
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
// import './serviceWorker';
import "./assets/font-awesome/css/all.css";

const engine = new Styletron();

ReactDOM.render(
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BaseProvider>
  </StyletronProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
