import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { GlobalStyle } from "./components/GlobalStyle";
import { observableTodoStore } from "./store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App store={observableTodoStore} />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
);
