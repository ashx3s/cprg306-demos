"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Page() {
  // store data inside of state
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  // error handling state
  const [error, setError] = useState(null);
  // Fetch Data from https://api.disneyapi.dev/character

  async function fetchCharacters() {
    // attempt to do this...
    try {
      const response = await fetch("https://api.disneyapi.dev/character");
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data.info);
      setCharacters(data.data);
      // if it fails, do this
    } catch (error) {
      setError(error.message);
      // no matter what, do this
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  // if the request is bad, return this
  // TODO: Extract into a component
  if (loading) {
    return (
      <div className="mx-8">
        <p className="text-xl">loading...</p>
      </div>
    );
  }
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
  if (characters.length === 0) {
    return (
      <div className="mx-8">
        <p className="text-xl font-bold">No Characters. Sorry</p>
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
          {characters.map((character) => (
            <li key={character._id}>{character.name}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
