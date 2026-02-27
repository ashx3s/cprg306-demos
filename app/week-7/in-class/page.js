"use client";
import aristocats from "./data.json";
import { useState } from "react";

// sort fields

export default function Page() {
  // state array for the characters --> add unique key to each character
  const [characters, setCharacters] = useState(
    aristocats.map((char) => ({ ...char, id: crypto.randomUUID() })),
  );
  console.log(characters);
  // filter select state
  // sort by category state
  // extract species for filter logic
  // sort logic
  // reset button
  return (
    <main>
      <header>
        <h1 className="text-3xl">Aristocats</h1>
        <p>Explore objects, user interactions, and state.</p>
      </header>
      <div>
        {/* sort ui: dropdown field */}
        {/* filter by species: also a dropdown */}
        {/* render our list */}
        <section className="my-4">
          <h2 className="text-2xl mb-2">Character List</h2>
          <ul>
            {characters.map((char) => {
              return (
                <li key={char.id} className="my-2">
                  <h3 className="text-xl">{char.name}</h3>
                  <p>{char.notes}</p>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </main>
  );
}
