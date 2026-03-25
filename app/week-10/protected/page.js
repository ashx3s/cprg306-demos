"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/contexts/AuthContext";

export default function Page() {
  const { authUser, loading } = useAuth();
  const router = useRouter();

  // route guard in useEffect if not loading and no auth user, take them back to week 9
  useEffect(() => {
    if (!loading && !authUser) {
      router.push("/week-9");
    }
  }, []);
  // if loading, return that it's loading / verifying authentication
  if (loading) {
    return <div>Verifying Authentication...</div>;
  }
  // render guard for no user
  if (!authUser) {
    return null;
  }
  return (
    <main>
      <h1>This page is hidden with route protection</h1>
    </main>
  );
}
