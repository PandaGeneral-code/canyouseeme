import React from "react";

import App from "./App";
import AppContextProvider from "./AppState";

const AppWrapper = () => (
  <AppContextProvider>
    <App />
  </AppContextProvider>
);

export default AppWrapper;
