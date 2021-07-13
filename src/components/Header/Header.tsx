import * as React from "react";
import { observer } from "mobx-react-lite";

import { useFetchUserData } from "../../hooks";

import classes from "./Header.module.scss";

const Header: React.VFC = observer(() => {
  const { isDataLoading, data: user } = useFetchUserData();

  return (
    <section className={classes.headerContainer}>
      <section>
        {isDataLoading && !user
          ? "User data is loading..."
          : `Hello ${user?.username}`}
      </section>
    </section>
  );
});

export { Header };
