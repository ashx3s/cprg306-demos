"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/contexts/AuthContext";
export default function Page() {
  const { authUser, loading } = useAuth();
  const router = useRouter();
  // set up a route guard
  // if auth is not loading and there is no authUser, send the user to week-9
  useEffect(() => {
    if (!loading && !authUser) {
      // router.push("/week-9");
    }
  });

  return (
    <main>
      <h1>Protected Page</h1>
      <p>Can only see this if you're logged in</p>
    </main>
  );
}
