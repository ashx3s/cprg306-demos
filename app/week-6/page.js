"use client";
import { useState } from "react";

export default function Page() {
  const [isVisible, setIsVisible] = useState(true);
  const [userName, setUserName] = useState("");
  const num = 30;

  function toggleIsVisible() {
    if (num == 30) {
      setIsVisible(!isVisible);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = formData.entries();
    for (const pair of values) {
      console.log(`Key: ${pair[0]}`, `Value: ${pair[1]}`);
    }
    alert(e.target);
  }

  return (
    <main className="mx-8">
      <header>
        <h1>Forms, State, and Interactivity</h1>
      </header>
      <section className="my-8">
        <button onClick={toggleIsVisible}>Toggle Button</button>

        {isVisible && <h2 className="text-2xl font-bold my-4">Hello World</h2>}

        <p className={`${isVisible ? "text-red-500" : "text-blue-500"}`}>
          Check Color Toggle
        </p>
      </section>
      <section>
        <header className="my-2">
          <h2 className="text-2xl">Form Example</h2>
          <p>Applying onChange with useState for interactive forms.</p>
        </header>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="user-name">UserName: </label>
            <input
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              name="userName"
              value={userName}
              id="user-name"
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
        <h3>{userName}</h3>
      </section>
    </main>
  );
}
