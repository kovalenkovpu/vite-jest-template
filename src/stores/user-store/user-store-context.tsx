import * as React from "react";

import { DIContainer } from "../../inversify.config";
import { TYPES } from "../../inversify.types";

import { IUserStore } from "./user-store";

const userStore = DIContainer.get<IUserStore>(TYPES.UserStore);

const UserStoreContext = React.createContext<IUserStore>(userStore);

const UserStoreContextProvider: React.FC = ({ children }) => (
  <UserStoreContext.Provider value={userStore}>
    {children}
  </UserStoreContext.Provider>
);

export { UserStoreContext, UserStoreContextProvider };
