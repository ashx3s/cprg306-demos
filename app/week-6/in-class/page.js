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
  return (
    <main className="mx-6 my-8">
      <header>
        <h1 className="text-3xl">Week 6 In Class Demo</h1>
      </header>
      {/* DONE: dark mode / light mode support */}
      <form>
        {/* TODO: label connect to field */}
        <div className="m-2">
          <label htmlFor="name" className="sr-only">
            Name:{" "}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="border-amber-50 border-2 px-2 rounded-md text-gray-600 dark:text-gray-300 text-3xl"
          />
        </div>
        <div>
          <label htmlFor="character-class" className="block text-xl">
            Character Class
          </label>
          <select name="character-class" id="character-class">
            {/* Iterate through array and generate options */}
            {characterClasses.map((cls) => (
              <option key={cls} value={cls}>
                {cls}
              </option>
            ))}
          </select>
        </div>
      </form>
    </main>
  );
}
