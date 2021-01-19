import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import Context from "./Context/ContextAuth";

ReactDom.render(
  <Context.Provider>
    <App />
  </Context.Provider>,
  document.getElementById("app")
);
