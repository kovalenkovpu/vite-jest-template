import * as React from "react";

// Quite a synthetic example just for testing purposes
function useHandleCount(initialValue: number) {
  const [count, setCount] = React.useState(initialValue);
  const increaseCount = () => setCount(count + 1);

  return { count, increaseCount };
}

export { useHandleCount };
