import * as React from "react";

import logo from "../assets/logo.svg";
import "./App.css";

import { useHandleCount } from "../hooks/useHandleCount";

function App() {
  const { count, increaseCount } = useHandleCount(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={increaseCount}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
      </header>
    </div>
  );
}

export default App;
