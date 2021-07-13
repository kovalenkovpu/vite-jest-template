interface UserData {
  username: string;
  email: string;
}

interface IUserServiceInterface {
  fetchUserData: () => Promise<UserData>;
}

class UserService implements IUserServiceInterface {
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

export type { UserData };
export { UserService };
