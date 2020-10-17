import React from "react";
import { render } from "react-dom";
import AppWrapper from "./AppWrapper";

import GlobalStyle from "./GlobalStyle";

render(
  <React.StrictMode>
    <GlobalStyle />
    <AppWrapper />
  </React.StrictMode>,
  document.getElementById("root")
);
