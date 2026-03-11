"use client";

import { createContext, useContext, useState } from "react";

// define a context with the createContext function
const UserContext = createContext();

// export a provider that can be used in a layout -> takes a children prop
export function UserProvider({ children }) {
  // create a fake user with a login status flag to toggle
  const [user, setUser] = useState({
    name: "Herbert",
    bio: "Herbert is a friendly developer who likes magpies and reactJS",
    loggedIn: false,
  });
  // logic to toggle the login state
  const toggleLogin = () => {
    setUser((prev) => ({ ...prev, loggedIn: !prev.loggedIn }));
  };
  // return provider on the context we defined with our state variables and functions passed to all the children

  return (
    <UserContext.Provider value={{ user, toggleLogin }}>
      {children}
    </UserContext.Provider>
  );
}

// export a useUser hook for other components to have access to the context and be able to interact with it

export const useUser = () => useContext(UserContext);
