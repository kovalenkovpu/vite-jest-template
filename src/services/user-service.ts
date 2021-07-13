import { injectable } from "inversify";
import "reflect-metadata";

interface UserData {
  username: string;
  email: string;
}

interface IUserService {
  fetchUserData: () => Promise<UserData>;
}

@injectable()
class UserService implements IUserService {
  fetchUserData = async () => {
    try {
      const response = await fetch("/api/user");
      const data = await response.json();

      return data;
    } catch (error) {
      console.log("User Service error: ", error);
    }
  };
}

export type { UserData, IUserService };
export { UserService };
