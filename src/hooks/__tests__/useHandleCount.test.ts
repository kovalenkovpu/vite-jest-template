import { act, renderHook } from "@testing-library/react-hooks";

import { useHandleCount } from "../useHandleCount";

describe("useHandleCount", () => {
  test("should set initial value", () => {
    const { result } = renderHook(() => useHandleCount(10));

    expect(result.current.count).toBe(10);
  });

  test("should properly increase value", () => {
    const { result } = renderHook(() => useHandleCount(0));

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increaseCount();
    });
    act(() => {
      result.current.increaseCount();
    });

    expect(result.current.count).toBe(2);
  });
});
