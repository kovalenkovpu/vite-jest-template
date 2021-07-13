import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./components/App/App";
import { worker } from "./mocks/browser";
import { UserStoreContextProvider } from "./stores/user-store/user-store-context";

if (process.env.NODE_ENV === "development") {
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <UserStoreContextProvider>
      <App />
    </UserStoreContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
