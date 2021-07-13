import { Container } from "inversify";

import { TYPES } from "./inversify.types";
import { IUserService, UserService } from "./services/user-service";
import { IUserStore, UserStore } from "./stores/user-store/user-store";

const DIContainer = new Container();
DIContainer.bind<IUserService>(TYPES.UserService).to(UserService);
DIContainer.bind<IUserStore>(TYPES.UserStore).to(UserStore);

export { DIContainer };
