"use client";
import { useState } from "react";
import aristocats from "./data.json";
export default function Page() {
  // state for the actual characters with added id
  const [characters, setCharacters] = useState(
    aristocats.map((char) => ({ ...char, id: crypto.randomUUID() })),
  );
  const [sortByCategory, setSortByCategory] = useState("alignment");

  const SORT_FIELDS = ["name", "alignment", "species", "role"];

  // sort logic
  const displayedCharacters = [...characters].sort((a, b) =>
    a[sortByCategory].localeCompare(b[sortByCategory]),
  );
  //  filter logic
  // Event Handlers
  return (
    <main>
      <header>
        <h1>Aristocats Character Viewer</h1>
        <p>Exploring interacting form fields in react.</p>
      </header>
      <section className="my-8">
        <h2 className="text-3xl">Form and Data visualization</h2>
        {/* Sort by category: select */}
        <div className="my-2">
          <h3 className="text-lg">Sort By Category</h3>
          <select
            name="sort-by-category"
            id="sort-by-category"
            value={sortByCategory}
            onChange={(e) => setSortByCategory(e.target.value)}
          >
            {SORT_FIELDS.map((category) => (
              // TODO: Add disabled based on the filter value so you can't use species twice
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        {/* filter by species: select */}
        {/* render the characters */}
        <div>
          <ul>
            {displayedCharacters.map((character) => (
              <li key={character.id} className="my-4">
                <h3 className="text-2xl">{character.name}</h3>
                <p>{character.species}</p>
                <p>{character.alignment}</p>
                <p>{character.notes}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
