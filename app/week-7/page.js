"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { Bars3CenterLeftIcon } from "@heroicons/react/16/solid";

const INITIAL_PRIMES = [3, 5, 7, 11, 13];

const isPrime = (num) => {
  if (num <= 0) return false;
  if (num === 2 || num === 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  const checkDivisor = (divisor) => {
    if (divisor * divisor > num) return true;
    if (num % divisor === 0 || num % (divisor + 2) === 0) return false;
    return checkDivisor(divisor + 6);
  };
  return checkDivisor(5);
};

export default function Page() {
  const [primes, setPrimes] = useState(INITIAL_PRIMES);
  const [inputNumber, setInputNumber] = useState("");
  const [formError, setFormError] = useState("");

  const addToPrimeList = (e) => {
    e.preventDefault();
    const num = Number(inputNumber);
    if (isNaN(num) || inputNumber.trim() === "") {
      setFormError("Please enter a valid number");
      return;
    }
    if (!Number.isInteger(num)) {
      setFormError("Please enter a whole number.");
      return;
    }
    if (primes.some((prime) => prime === num)) {
      setFormError(`${num} is already in the list`);
      return;
    }
    if (!isPrime(num)) {
      setFormError(`${num} is not a prime number`);
      return;
    }
    setPrimes((prev) => [...prev, num]);
    setInputNumber("");
  };

  const handleInputNumber = (e) => {
    setFormError("");
    setInputNumber(e.target.value);
  };

  return (
    <main className="mx-8">
      <header>
        <h1 className="text-3xl">Week 7 Demo</h1>
        <p>Icons and state and logic</p>
      </header>
      <section>
        <h2>Icons</h2>
        <div>
          <h3>Iconify Icons</h3>
          <div className="flex gap-4">
            <Icon icon="fa6-brands:fedora" className="text-8xl text-blue-500" />
            <Icon icon="fa7-solid:angry" className="text-8xl text-red-500" />
          </div>
        </div>
        <div>
          <h3>Heroicons</h3>
          <div>
            <Bars3CenterLeftIcon className="size-8 text-amber-500 fill-pink-500" />
          </div>
        </div>
      </section>
      <section className="my-5">
        <header>
          <h2 className="text-2xl">Prime Number Examples</h2>
          <p>Helper functions to validate and verify primes.</p>
        </header>
        <div>
          <form onSubmit={addToPrimeList}>
            <div className="my-3">
              <label htmlFor="input-number" className="sr-only">
                Prime Number Candidate:{" "}
              </label>
              <input
                type="text"
                id="input-number"
                name="input-number"
                value={inputNumber}
                onChange={handleInputNumber}
                className="border-3 border-white mx-2 px-2"
              />
            </div>
            <button type="submit" className="px-6 py-2 bg-blue-600 text-white">
              Submit
            </button>
            {/* TODO: Add a reset that clears any updated information and form fields and error messages */}
          </form>

          {/* TODO: Extract into a separate component */}
          {formError && (
            <div className="bg-red-600 p-4 flex justify-between w-fit items-center gap-4">
              {formError}{" "}
              <Icon
                icon="fa6-regular:circle-xmark"
                className="cursor-pointer"
                onClick={() => setFormError("")}
              />
            </div>
          )}

          <ul>
            {primes.map((prime) => (
              <li key={prime}>{prime}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
