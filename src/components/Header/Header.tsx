import * as React from "react";

import classes from "./Header.module.scss";

interface UserData {
  username: string;
  email: string;
}

const Header: React.VFC = () => {
  const [isDataLoading, setDataLoading] = React.useState(false);
  const [user, setUserData] = React.useState<UserData | null>(null);

  React.useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("/api/user");
      const data = await response.json();

      setUserData(data);
      setDataLoading(false);
    };

    setDataLoading(true);

    fetchUser();
  }, []);

  return (
    <section className={classes.headerContainer}>
      <section>
        {isDataLoading && !user
          ? "User data is loading..."
          : `Hello ${user?.username}`}
      </section>
    </section>
  );
};

export type { UserData };

export { Header };
