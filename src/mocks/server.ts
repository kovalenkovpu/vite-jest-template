import { setupServer } from "msw/node";

import { userMocks } from "../components/Header/mocks/user-mock";

export const server = setupServer(...userMocks);
