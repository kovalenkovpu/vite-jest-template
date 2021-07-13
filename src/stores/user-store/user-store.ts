import { action, makeObservable, observable } from "mobx";

interface UserData {
  username: string;
  email: string;
}

interface IUserStore {
  user: UserData | null;
  isDataLoading: boolean;

  fetchUserData: () => Promise<void>;
}

class UserStore implements IUserStore {
  user: UserData | null;
  isDataLoading: boolean;

  constructor() {
    this.user = null;
    this.isDataLoading = false;

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
      const response = await fetch("/api/user");
      const data = await response.json();

      this.user = data;
    } catch (error) {
    } finally {
      this.isDataLoading = false;
    }
  };
}

const userStore = new UserStore();

export type { UserData, IUserStore };
export { UserStore, userStore };
