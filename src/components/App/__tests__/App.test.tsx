import * as React from "react";
import { rest } from "msw";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "../App";
import { UserStoreContextProvider } from "../../../stores/user-store/user-store-context";
import { userMockData } from "../../Header/mocks/user-mock";
import { UserData } from "../../../stores/user-store/user-store";
import { server } from "../../../mocks/server";

describe("App", () => {
  test("should change the text content when clicked on the button", () => {
    render(<App />);

    expect(screen.getByRole("button")).toHaveTextContent("0");

    const button = screen.getByRole("button");

    fireEvent.click(button);
    fireEvent.click(button);

    expect(screen.getByRole("button")).toHaveTextContent("2");
  });

  test("should match the snapshot when user data is not loaded", () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("should contain proper user info when user data is loaded", async () => {
    server.use(
      rest.get<undefined, UserData>("/api/user", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(userMockData));
      })
    );

    const wrapper: React.FC = ({ children }) => (
      <UserStoreContextProvider>{children}</UserStoreContextProvider>
    );

    render(<App />, { wrapper });

    const updatedUserDataText = new RegExp(
      `Hello ${userMockData.username}`,
      "i"
    );

    waitFor(() =>
      expect(screen.getByText(updatedUserDataText)).toBeInTheDocument()
    );
  });
});
