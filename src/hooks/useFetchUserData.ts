import * as React from "react";

import { UserStoreContext } from "../stores/user-store/user-store-context";

// Not necessary to put as a separate hook, but just for testing purposes
function useFetchUserData() {
  const { isDataLoading, user, fetchUserData } =
    React.useContext(UserStoreContext);

  React.useEffect(() => {
    fetchUserData();
  }, []);

  return { isDataLoading: isDataLoading, data: user };
}

export { useFetchUserData };
