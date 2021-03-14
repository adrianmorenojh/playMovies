import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import { UserContectProvider } from "./Context/userContext";

import { LocationProvider, createHistory } from "@reach/router";
import { createHashSource } from "reach-router-hash-history";

const history = createHistory(createHashSource());

ReactDom.render(
  <LocationProvider history={history}>
    <UserContectProvider>
      <App />
    </UserContectProvider>
  </LocationProvider>,
  document.getElementById("app")
);
