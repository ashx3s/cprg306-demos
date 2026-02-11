"use client";
import { useState } from "react";

export default function Page() {
  const [isVisible, setIsVisible] = useState(true);

  const num = 30;

  function toggleIsVisible() {
    if (num == 30) {
      setIsVisible(!isVisible);
    }
  }
  return (
    <main className="mx-8">
      <header>
        <h1>Forms, State, and Interactivity</h1>
      </header>
      <section>
        <button onClick={toggleIsVisible}>Toggle Button</button>

        {isVisible && <h2 className="text-2xl font-bold my-4">Hello World</h2>}

        <p className={`${isVisible ? "text-red-500" : "text-blue-500"}`}>
          Check Color Toggle
        </p>
      </section>
    </main>
  );
}
