"use client";
import LoginForm from "../components/auth-forms/LoginForm";
import SignUpForm from "../components/auth-forms/SignupForm";
import { useAuth } from "../contexts/AuthContext";
import { logout } from "../lib/authHelpers";

export default function AuthDemoSection() {
  const { authUser, loading } = useAuth();
  const handleLogout = async () => {
    await logout();
  };
  return (
    <section className="my-4 p-6 bg-stone-300 dark:bg-stone-800 rounded-lg">
      <header>
        <h2 className="text-2xl font-bold mb-4">Authentication Section</h2>
        <p></p>
      </header>
      {loading ? (
        <p>Loading auth state...</p>
      ) : authUser ? (
        <div className="space-y-4">
          <div className="p-4 bg-green-100 dark:bg-green-900 rounded">
            <p className="font-semibold">Logged in as: {authUser.email}</p>
            <p className="text-sm">User ID: {authUser.uid}</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          <SignUpForm />
          <LoginForm />
        </div>
      )}
    </section>
  );
}
