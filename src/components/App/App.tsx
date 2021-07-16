import * as React from "react";

import logo from "../../assets/logo.svg";
import classes from "./App.module.scss";

import { useHandleCount } from "../../hooks";
import { Header } from "../Header/Header";

const App: React.VFC = () => {
  const { count, increaseCount } = useHandleCount(0);

  return (
    <div className={classes.app}>
      <Header />
      <header className={classes.appHeader}>
        <img src={logo} className={classes.appLogo} alt="logo" />

        <p>
          <label htmlFor="increase-button">Click to increase: </label>
          <button
            id="increase-button"
            className={classes.button}
            type="button"
            onClick={increaseCount}
          >
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
      </header>
    </div>
  );
};

export default App;
