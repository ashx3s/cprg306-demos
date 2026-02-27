"use client";
import aristocats from "./data.json";
import { useState } from "react";

// get unique values logic
const getUniqueValues = (data, field) => [
  ...new Set(data.map((item) => item[field])),
];
// sort fields
const SORT_FIELDS = ["name", "alignment", "species", "role"];

export default function Page() {
  // state array for the characters --> add unique key to each character
  const [characters, setCharacters] = useState(
    aristocats.map((char) => ({ ...char, id: crypto.randomUUID() })),
  );
  // sort by category state
  const [sortByCategory, setSortByCategory] = useState("alignment");

  // filter select state
  const [filterBySpecies, setFilterBySpecies] = useState("human");

  // extract species for filter logic
  const species = getUniqueValues(characters, "species");
  console.log(species);

  // sort logic + filter logic
  const displayedCharacters = [...characters]
    .filter((char) =>
      filterBySpecies ? char.species === filterBySpecies : true,
    )
    .sort((a, b) => a[sortByCategory].localeCompare(b[sortByCategory]));
  // reset button
  return (
    <main>
      <header>
        <h1 className="text-3xl">Aristocats</h1>
        <p>Explore objects, user interactions, and state.</p>
      </header>
      <div>
        {/* sort ui: dropdown field */}
        <div>
          <h3>Sort by Category</h3>
          <select
            name="sort-by-category"
            id="sort-by-category"
            value={sortByCategory}
            onChange={(e) => setSortByCategory(e.target.value)}
          >
            {SORT_FIELDS.map((category) => (
              // add disabled logic for when filter by species is on to disable sort by species
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        {/* filter by species: also a dropdown */}
        <div>
          <h3>Filter By Species</h3>
          <select
            name="sort-by-category"
            id="sort-by-category"
            value={filterBySpecies}
            onChange={(e) => setFilterBySpecies(e.target.value)}
          >
            {species.map((species) => (
              <option key={species} value={species}>
                {species}
              </option>
            ))}
          </select>
        </div>
        <section className="my-4">
          <h2 className="text-2xl mb-2">Character List</h2>
          {/* render a list of sorted characters */}
          <ul>
            {displayedCharacters.map((char) => {
              return (
                <li key={char.id} className="my-2">
                  <h3 className="text-xl">{char.name}</h3>
                  <p>{char.notes}</p>
                  <p>{char.alignment}</p>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </main>
  );
}
