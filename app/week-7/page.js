"use client";
import { Icon } from "@iconify/react";
import { ClipboardIcon } from "@heroicons/react/20/solid";

// initial prime number set
// prime validation script

export default function Page() {
  // state variable for prime numbers
  // state variable for user input
  // state variable for error handling

  // form function for submitting the form and validating errors
  const addToPrimeList = (e) => {
    // e.preventDefault();
    // validate that the input is a number
    // validate that it's an integer
    // check if number is already in the list
    // make sure it's a prime number
    // if all these checks pass, add the number to the list
    // reset the input field
  };
  // handleInputNumber form function
  const handleInputNumber = (e) => {
    // clear any errors
    // set the number to equal target value
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
              <label htmlFor="input-number">Input Number: </label>
              <input
                type="text"
                id="input-number"
                name="input-number"
                onChange={handleInputNumber}
                className="border-3 border-white mx-2 px-2"
              />
            </div>
            <button type="submit" className="px-5 py-2 bg-blue-600 text-white">
              Add to List
            </button>
          </form>
          {/* Error Handling View */}
          <div className="bg-red-601 p-4 flex justify-between w-fit items-center gap-4">
            <p>{formError}</p>
            <Icon icon="fa6-regular:circle-xmark" className="cursor-pointer" />
          </div>
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
