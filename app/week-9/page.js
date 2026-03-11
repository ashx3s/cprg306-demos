"use client";
import { useUser } from "../contexts/UserContext";
// import context information here
export default function Page() {
  const { user, toggleLogin } = useUser();
  return (
    <main>
      <header>
        <h1>Context API and Firebase Auth</h1>
      </header>
      <section className="my-4">
        <h2 className="text-xl">
          Show the user name on toggle of login status:{" "}
          <span className="font-bold text-pink-500">
            {user.loggedIn
              ? `${user.name} is Logged In`
              : `${user.name} Logged out`}
          </span>
        </h2>
        {user.loggedIn && <p>{user.bio}</p>}
        <button
          onClick={toggleLogin}
          className="bg-blue-500 px-4 py-2 rounded-md my-2 cursor-pointer hover:bg-blue-700"
        >
          Toggle Login Status
        </button>
      </section>
    </main>
  );
}
