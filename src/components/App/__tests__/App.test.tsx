import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "../App";

describe("App", () => {
  test("should change the text content when clicked on the button", () => {
    render(<App />);

    expect(screen.getByRole("button")).toHaveTextContent("0");

    const button = screen.getByRole("button");

    fireEvent.click(button);
    fireEvent.click(button);

    expect(screen.getByRole("button")).toHaveTextContent("2");
  });

  test("should match the snapshot", () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
});
