"use client";
// context stuff
import { createContext, useContext, useEffect, useState } from "react";
// firebase sdk auth variables
import { onAuthStateChanged } from "firebase/auth";
// our auth
import { auth } from "../lib/firebase/config";

const AuthContext = createContext();

// provider to wrap around your site
export function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          console.log("User Authenticated: ", user.email);
        } else {
          console.log("No user found");
        }
        setAuthUser(user);
        setLoading(false);
        console.log("loading complete");
      },
      (error) => {
        console.error("Auth error", error);
        setAuthUser(null);
        setLoading(false);
      },
    );
    return () => {
      console.log("Cleaning up listener");
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={{ authUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
// hook to get access to the provider logic

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(
      "Context Error: useAuth must be used within the Auth provider",
    );
  }
  return context;
}
