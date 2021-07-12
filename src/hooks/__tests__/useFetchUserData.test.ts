import { waitFor } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";

import { useFetchUserData } from "..";
import { userMockData } from "../../components/Header/mocks/user-mock";

describe("useFetchUserData", () => {
  test("should fetch and return proper user data", () => {
    const { result } = renderHook(() => useFetchUserData());

    expect(result.current.isDataLoading).toBeTruthy();

    waitFor(() => {
      expect(result.current.isDataLoading).toBeFalsy();
      expect(result.current.data).toBe(userMockData);
    });
  });
});
