import { rest } from "msw";

import { UserData } from "../../../services/user-service";

const userMockData: UserData = {
  username: "John Doe",
  email: "john_doe@gmail.com",
};

const userMocks = [
  rest.get<undefined, UserData>("/api/user", (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(1000), ctx.json(userMockData));
  }),
];

export { userMocks, userMockData };
