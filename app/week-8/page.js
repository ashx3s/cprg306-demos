"use client";
import { useState, useEffect } from "react";
import FetchErrorMessage from "./FetchErrorMessage";

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
        throw new Error(
          `HTTP Error!  ${response.status} \n ${response.message}`,
        );
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
  if (error) return FetchErrorMessage(error);

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
