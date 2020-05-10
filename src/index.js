import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import {GlobalProvider} from "./state/GlobalContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  rootElement
);
