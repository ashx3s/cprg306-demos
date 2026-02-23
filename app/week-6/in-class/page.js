"use client";
import { useState } from "react";

const characterClasses = [
  "Barbarian",
  "Bard",
  "Cleric",
  "Druid",
  "Fighter",
  "Monk",
  "Paladin",
  "Ranger",
  "Rogue",
  "Sorcerer",
  "Warlock",
  "Wizard",
];

export default function Page() {
  const [characterName, setCharacterName] = useState("");
  const [characterClass, setCharacterClass] = useState("Barbarian");
  const [character, setCharacter] = useState({ name: "", class: "" });
  function handleSubmit(e) {
    e.preventDefault();
    setCharacter({
      name: characterName,
      class: characterClass,
    });
    console.log(character);
  }
  return (
    <main className="mx-6 my-8">
      <header>
        <h1 className="text-3xl">Week 6 In Class Demo</h1>
      </header>
      {/* DONE: dark mode / light mode support */}
      <form onSubmit={handleSubmit}>
        {/* TODO: label connect to field */}
        <div className="m-2">
          <label htmlFor="name" className="sr-only">
            Name:{" "}
          </label>
          <input
            id="name"
            name="name"
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)}
            type="text"
            className="border-amber-50 border-2 px-2 rounded-md text-gray-600 dark:text-gray-300 text-3xl"
          />
        </div>
        <div>
          <label htmlFor="character-class" className="block text-xl">
            Character Class
          </label>
          <select
            name="character-class"
            id="character-class"
            onChange={(e) => setCharacterClass(e.target.value)}
          >
            {/* Iterate through array and generate options */}
            {characterClasses.map((cls) => (
              <option key={cls} value={cls}>
                {cls}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="bg-blue-800 text-white">
          Submit
        </button>
      </form>

      {/* TODO: Render a character on submit */}
      <section>
        <header>
          <h2>Characters</h2>
        </header>
        {/* Generate this whole div */}
        <p>{character.name}</p>
        <p>{character.class}</p>
      </section>
    </main>
  );
}
