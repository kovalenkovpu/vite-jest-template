import { userMockData } from "../../components/Header/mocks/user-mock";
import { DIContainer } from "../../inversify.config";
import { TYPES } from "../../inversify.types";
import { IUserService } from "../user-service";

describe("user-service", () => {
  const userService = DIContainer.get<IUserService>(TYPES.UserService);

  test('"fetchUserData" should resolve with correct user data', async () => {
    const data = await userService.fetchUserData();

    expect(data).toEqual(userMockData);
  });
});
