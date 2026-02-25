"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { ClipboardIcon } from "@heroicons/react/20/solid";

// initial prime number set
const INITIAL_PRIMES = [2, 3, 5, 7, 11];
// prime validation script

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
  // state variable for prime numbers
  const [primes, setPrimes] = useState(INITIAL_PRIMES);
  // state variable for user input
  const [inputNumber, setInputNumber] = useState("");
  // state variable for error handling
  const [formError, setFormError] = useState("");

  // form function for submitting the form and validating errors
  const addToPrimeList = (e) => {
    e.preventDefault();
    const num = Number(inputNumber);
    // validate that the input is a number
    if (isNaN(num) || inputNumber.trim() === "") {
      setFormError("Please enter a valid number");
      return;
    }
    // validate that it's an integer
    if (!Number.isInteger(num)) {
      setFormError("Please enter an integer");
      return;
    }
    // check if number is already in the list
    if (primes.some((prime) => prime === num)) {
      setFormError(`${num} is already in the list`);
      return;
    }
    // make sure it's a prime number
    // TODO: Determine better error message visualization for this use case
    if (!isPrime(num)) {
      setFormError(`${num} is not a prime number`);
      return;
    }
    // if all these checks pass, add the number to the list
    setPrimes((prev) => [...prev, num]);
    // reset the input field
    setInputNumber("");
  };
  // handleInputNumber form function
  const handleInputNumber = (e) => {
    // clear any errors
    setFormError("");
    // set the number to equal target value
    setInputNumber(e.target.value);
  };

  return (
    <main>
      <header>
        <h1>Week 7 Demos</h1>
      </header>
      <section>
        <header>
          <h2>Icon Library Demos</h2>
        </header>
        <div className="flex gap-4">
          <Icon
            icon="fa6-brands:galactic-republic"
            className="text-5xl text-blue-500"
          />
          <ClipboardIcon className="size-12 text-yellow-500" />
        </div>
      </section>
      <section>
        <header>
          <h2>Prime Number Add to List</h2>
          <p>
            Logic demonstrates validating and showing user facing errors when
            they try to input a new prime number into a list.
          </p>
        </header>
        <div>
          {/* Form for user to input */}
          <form onSubmit={addToPrimeList}>
            <div>
              <label htmlFor="input-number">Input Number:</label>
              <input
                type="text"
                id="input-number"
                name="input-number"
                value={inputNumber}
                onChange={handleInputNumber}
                className="border-3 border-white mx-2 px-2"
              />
            </div>
            <button type="submit" className="px-5 py-2 bg-blue-600 text-white">
              Add to List
            </button>
          </form>
          {/* Error Handling View */}
          {formError && (
            <div className="bg-red-600 p-4 flex justify-between w-fit items-center gap-4">
              <p>{formError}</p>
              <Icon
                icon="fa6-regular:circle-xmark"
                className="cursor-pointer"
                onClick={() => setFormError("")}
              />
            </div>
          )}
          {/* display of the prime numbers */}
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
