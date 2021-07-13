import { injectable, inject } from "inversify";
import "reflect-metadata";
import { action, makeObservable, observable, runInAction } from "mobx";

import { UserData, UserService } from "../../services/user-service";
import { TYPES } from "../../inversify.types";

interface IUserStore {
  user: UserData | null;
  isDataLoading: boolean;

  fetchUserData: () => Promise<void>;
}

@injectable()
class UserStore implements IUserStore {
  user: UserData | null;
  isDataLoading: boolean;

  private userService: UserService;

  constructor(@inject(TYPES.UserService) userService: UserService) {
    this.user = null;
    this.isDataLoading = false;
    this.userService = userService;

    makeObservable(this, {
      user: observable,
      isDataLoading: observable,
      fetchUserData: action,
    });

    // Above code is just the example, can be simply:
    // makeAutoObservable(this);
  }

  fetchUserData = async () => {
    this.isDataLoading = true;

    try {
      const data = await this.userService.fetchUserData();

      // Otherwise we have warning about mutating the state outside of the action
      runInAction(() => {
        this.user = data;
      });
    } catch (error) {
    } finally {
      runInAction(() => {
        this.isDataLoading = false;
      });
    }
  };
}

export type { IUserStore };
export { UserStore };
