"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Page() {
  // store data inside of state
  const [characters, setCharacters] = useState([]);
  // error handling state
  const [error, setError] = useState(null);
  // Fetch Data from https://api.disneyapi.dev/character

  async function fetchCharacters() {
    try {
      const response = await fetch("https://api.disneyapi.dev/character");
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      const data = await response.json();
      setCharacters(data.data);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  // if the request is bad, return this
  if (error) {
    return (
      <div className="bg-red-500 flex justify-center items-center p-8">
        <h2 className="text-5xl font-bold">ERROR!</h2>
        <p className="text-xl">{error}</p>
        <Link href="/" className="bg-amber-600 px-4 py-2 rounded-md">
          Take me home
        </Link>
      </div>
    );
  }
  return (
    <main className="mx-8">
      <header>
        <h1>Data Fetching Example</h1>
      </header>
      <div>
        <ul>
          {characters.length > 0
            ? characters.map((character) => (
                <li key={character._id}>{character.name}</li>
              ))
            : "there are no characters"}
        </ul>
      </div>
    </main>
  );
}
