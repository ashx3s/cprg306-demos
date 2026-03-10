"use client";
import { useUser } from "../contexts/UserContext";
export default function Page() {
  const { user, toggleUserLogin } = useUser();
  return (
    <main>
      <header>
        <h1>Use Context Examples</h1>
      </header>
      <section>
        {/* If user is logged in, show name, otherwise show logged Out */}
        <h2 className="text-2xl my-4">
          {user.loggedIn ? user.name : "Nobody is logged in"}
        </h2>

        <button
          className="py-2 px-4 bg-blue-500 rounded-md my-2 cursor-pointer"
          onClick={toggleUserLogin}
        >
          Toggle Login User
        </button>
      </section>
    </main>
  );
}
