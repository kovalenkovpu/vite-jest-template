import * as React from "react";

interface UserData {
  username: string;
  email: string;
}

function useFetchUserData() {
  const [isDataLoading, setDataLoading] = React.useState(false);
  const [data, setUserData] = React.useState<UserData | null>(null);
  const fetchUserData = async () => {
    setDataLoading(true);

    try {
      const response = await fetch("/api/user");
      const data = await response.json();

      setUserData(data);
    } catch (error) {
      console.log("Error", error);
    } finally {
      setDataLoading(false);
    }
  };

  React.useEffect(() => {
    fetchUserData();
  }, []);

  return { isDataLoading, data };
}

export type { UserData };

export { useFetchUserData };
