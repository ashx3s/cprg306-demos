"use client";
import { createContext, useContext, useState } from "react";

// create a context with a simulated user
// demonstrate how to set up context api
// code that will then be refactored to support async connection to a backend

// create a context as a const
const UserContext = createContext();
// export the context provider which accepts a "children" prop
export function UserProvider({ children }) {
  // useState to create the fake user => this is replaced with firebase
  const [user, setUser] = useState({
    name: "Herbert",
    loggedIn: false,
  });
  // function for toggling login
  const toggleUserLogin = () => {
    setUser((prev) => ({ ...prev, loggedIn: !prev.loggedIn }));
  };
  // return context wrapped around the children prop
  return (
    <UserContext.Provider value={{ user, toggleUserLogin }}>
      {children}
    </UserContext.Provider>
  );
}
// export const
export const useUser = () => useContext(UserContext);
