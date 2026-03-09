"use client";
import { useState, useEffect } from "react";
import FetchErrorMessage from "./FetchErrorMessage";
export default function CharacterSection() {
  // a place to store our characters
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
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
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  if (loading) return <p>Loading ...</p>;
  // if the fetch doesn't work do this...
  if (error) return <FetchErrorMessage error={error} />;
  if (characters.length === 0) return <p>No results found</p>;

  // If things work out do the following
  return (
    <section>
      <header>
        <h2>Data Fetching of Disney Characters</h2>
      </header>
      {/* Render character list + error handling + loading here through components */}
      <ul>
        {characters.map((character) => (
          <li key={character._id} className="my-2 text-lg">
            {character.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
