"use client";
import { useState } from "react";
import aristocats from "./data.json";

const getUniqueValues = (data, field) => [
  ...new Set(data.map((item) => item[field])),
];

export default function Page() {
  // state for the actual characters with added id
  const [characters, setCharacters] = useState(
    aristocats.map((char) => ({ ...char, id: crypto.randomUUID() })),
  );
  const [sortByCategory, setSortByCategory] = useState("name");
  const [filterBySpecies, setFilterBySpecies] = useState("");

  const SORT_FIELDS = ["name", "alignment", "species", "role"];

  const SPECIES = getUniqueValues(characters, "species");

  // sort logic
  const displayedCharacters = [...characters]
    .filter((char) =>
      filterBySpecies ? char.species === filterBySpecies : true,
    )
    .sort((a, b) => a[sortByCategory].localeCompare(b[sortByCategory]));

  // reset button
  const resetFields = () => {
    setFilterBySpecies("");
    setSortByCategory("name");
  };
  // filter event handler
  const onFilterBySpecies = (e) => {
    setFilterBySpecies(e.target.value);
    setSortByCategory("name");
  };
  return (
    <main>
      <header>
        <h1>Aristocats Character Viewer</h1>
        <p>Exploring interacting form fields in react.</p>
      </header>
      <section className="my-8">
        <h2 className="text-3xl">Form and Data visualization</h2>
        {/* Sort by category: select */}
        <div className="flex gap-4">
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
                <option
                  key={category}
                  value={category}
                  disabled={category === "species" && !!filterBySpecies}
                >
                  {category}
                </option>
              ))}
            </select>
          </div>
          {/* filter by species: select */}
          <div className="my-2">
            <h3 className="text-lg">Filter By Species</h3>
            <select
              name="filter-by-species"
              id="filter-by-species"
              value={filterBySpecies}
              // refactor this onChange
              onChange={onFilterBySpecies}
            >
              <option value="">all</option>
              {SPECIES.map((species) => (
                // TODO: Add disabled based on the filter value so you can't use species twice
                <option key={species} value={species}>
                  {species}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button onClick={resetFields} className="bg-red-500 px-4 py-2">
              Reset
            </button>
          </div>
        </div>

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
