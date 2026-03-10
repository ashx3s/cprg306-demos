"use client";
import { createContext, useContext, useState, useEffect } from "react";

// get firebase authentication library -> onAuthStateChanged
// import firebase config info

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  // TODO: Set to false and only toggle on during the loading
  const [loading, setLoading] = useState(true);

  // perform the connection to the backend in a useEffect
  useEffect(() => {
    // run onAuthStateChanged from the firebase library
    // us auth, and user as arguments
    // if user then log authenticated
    // else log no user found
    // set the authUser variable to our user from the backend
    // set loading false
    // log that we've logged in
    // if an error, log the error and set loading false
    // run unsubscribe in the return
  }, []);

  // pass values to the provider
  return (
    <AuthContext.Provider values={{ authUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// custom hook for authentication
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(
      "Context Error: useAuth must be used wtihin the Auth Provider",
    );
  }
  return context;
}
