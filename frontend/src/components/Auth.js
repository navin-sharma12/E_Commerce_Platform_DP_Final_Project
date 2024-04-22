import React from "react";
import { useLocalStorageState } from "./useLocalStorage";
export const AuthContext = React.createContext();

AuthContext.displayName = "AuthContext";

export const AuthProvider = (props) => {
  const [userData, setUserData] = useLocalStorageState("userData", null);

  let isLoggedIn = true;

  console.log(userData);
  if (userData) {
    isLoggedIn = true;
  } else {
    isLoggedIn = true;
  }
  return (
    <AuthContext.Provider
      value={{ userData, setUserData, isLoggedIn }}
      {...props}
    />
  );
};
