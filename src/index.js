import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import Context from "./Context/ContextAuth";

import { LocationProvider, createHistory } from "@reach/router";
import { createHashSource } from "reach-router-hash-history";

const history = createHistory(createHashSource());

ReactDom.render(
  <Context.Provider>
    <LocationProvider history={history}>
      <App />
    </LocationProvider>
  </Context.Provider>,
  document.getElementById("app")
);
