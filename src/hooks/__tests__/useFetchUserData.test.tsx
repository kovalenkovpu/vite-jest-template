import * as React from "react";
import { waitFor } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { observer } from "mobx-react-lite";

import { useFetchUserData } from "..";
import { userMockData } from "../../components/Header/mocks/user-mock";
import { UserStoreContextProvider } from "../../stores/user-store/user-store-context";

describe("useFetchUserData", () => {
  const wrapper: React.FC = observer(({ children }) => (
    <UserStoreContextProvider>{children}</UserStoreContextProvider>
  ));

  test("should fetch and return proper user data", () => {
    const { result } = renderHook(() => useFetchUserData(), {
      wrapper,
    });

    waitFor(() => {
      expect(result.current.isDataLoading).toBeTruthy();
    });

    waitFor(() => {
      expect(result.current.isDataLoading).toBeFalsy();
      expect(result.current.data).toBe(userMockData);
    });
  });
});
