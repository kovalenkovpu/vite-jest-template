import * as React from "react";

import { userStore, UserStore } from "./user-store";

const UserStoreContext = React.createContext<UserStore>(userStore);

const UserStoreContextProvider: React.FC = ({ children }) => (
  <UserStoreContext.Provider value={userStore}>
    {children}
  </UserStoreContext.Provider>
);

export { UserStoreContext, UserStoreContextProvider };
