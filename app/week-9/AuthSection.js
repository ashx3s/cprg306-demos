"use client";
import LoginForm from "@/app/components/auth/LoginForm";
import { useAuth } from "@/app/contexts/AuthContext";
import { logout } from "../lib/authHelpers";
import SignupForm from "@/app/components/auth/SignupForm";
export default function AuthSection() {
  const { authUser, loading } = useAuth();
  return (
    <section>
      <h2>Authentication</h2>
      <p>{authUser ? authUser.email : "No User"}</p>
      <button onClick={logout}>Log Out</button>
      <LoginForm />
      <SignupForm />
    </section>
  );
}
