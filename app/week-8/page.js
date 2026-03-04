"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function Page() {
  // a place to store our characters
  const [characters, setCharacters] = useState([]);
  // a place to store the error message
  const [error, setError] = useState(null);

  // logic for the fetch request
  async function fetchCharacters() {
    try {
      // await a fetch from our endpoint
      const response = await fetch("https://api.disneyapi.dev/character");
      // if this doesn't come through, we need to render the error
      if (!response.ok) {
        throw new Error(`HTTP ERROR: Status ${response.status}`);
      }
      // if the data does come through, we need to parse it as json
      const data = await response.json();
      setCharacters(data.data);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  // if the fetch doesn't work do this...
  if (error) {
    return (
      <main className="flex flex-col justify-center items-center h-full bg-red-700">
        <h1 className="text-5xl">ERROR</h1>
        <p>{error}</p>
        <Link
          href="/"
          className="bg-white text-red-700 px-4 py-3 rounded-lg my-4 block"
        >
          {" "}
          Take Me Home
        </Link>
      </main>
    );
  }

  // If things work out do the following
  return (
    <main>
      <header>
        <h1>Data Fetching of Disney Characters</h1>
      </header>
      {/* ---- CONDITIONAL RENDERING ---- */}
      <ul>
        {characters.length > 0 ? (
          characters.map((character) => (
            <li key={character._id} className="my-2 text-lg">
              {character.name}
            </li>
          ))
        ) : (
          <li>Loading...</li>
        )}
      </ul>
    </main>
  );
}
