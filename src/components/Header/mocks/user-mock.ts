import { rest } from "msw";

import { UserData } from "../Header";

const userMocks = [
  rest.get<undefined, UserData>("/api/user", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json({
        username: "admin",
        email: "admin@gmail.com",
      })
    );
  }),
];

export { userMocks };
