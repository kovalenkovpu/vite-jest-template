import { action, makeObservable, observable } from "mobx";

import { UserData, UserService } from "../../services/user-service";

interface IUserStore {
  user: UserData | null;
  isDataLoading: boolean;

  fetchUserData: () => Promise<void>;
}

class UserStore implements IUserStore {
  user: UserData | null;
  isDataLoading: boolean;

  private userService: UserService;

  constructor() {
    this.user = null;
    this.isDataLoading = false;

    // TODO: DI
    this.userService = new UserService();

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

      this.user = data;
    } catch (error) {
    } finally {
      this.isDataLoading = false;
    }
  };
}

const userStore = new UserStore();

export type { IUserStore };
export { UserStore, userStore };
