"use client";
import { useState } from "react";

const HelloMessage = () => <p>Hello</p>;

export default function Page() {
  const [age, setAge] = useState(80);
  // powerful syntax, allos a lot more manipulation and validation of the data
  const addToAge = () => setAge((a) => a + 1);
  // simple example, great for basic operations and 1 liners
  const removeFromAge = () => setAge(age - 1);

  // ----------------------- //
  helloWorld();
  const badHello = () => {
    console.log("Hello Bad Times");
  };

  function helloWorld() {
    console.log("Hello World");
  }

  helloWorld();
  badHello();

  // ------------------- //
  // array destructuring
  // original way
  const numbers = [1, 2, 3, 4, 5];
  const originalOne = numbers[0];
  // destructured arrays
  const [one, ...rest] = numbers;
  console.log("Destructured: ", one, rest);
  // ---------------------- //

  // object destructuring
  const obj = {
    name: "Scurvy Dog",
    species: "Cat",
  };
  const { name, species } = obj;
  console.log(`Our friend ${name} is a ${species}`);

  // --------------------- //
  // Alert Box Example
  function sayHi() {
    console.log("Hi");
    alert("Hi");
  }

  // --------------------- //
  // Dom manipulation on click
  let counter = 0;
  const addToCounter = () => console.log((counter += 1));
  const removeFromCounter = () => alert((counter -= 1));

  return (
    <main className="mx-6">
      <header>
        <h1>Week 5 Basic Interactivity</h1>
        <HelloMessage />
      </header>
      <section className="my-4">
        <h2 className="text-2xl mb-2">Event Handlers</h2>
        <div>
          <h3>Alert Box Example</h3>
          <p>
            This example using alert will render the message in the alert box
            and console. Testing these places when debugging can be really
            helpful for understanding the nature of dom rendering issues.
          </p>
          <button
            onClick={sayHi}
            className="bg-blue-500 hover:bg-blue-700 active:bg-yellow-600 px-4 py-2 my-2 cursor-pointer"
          >
            Alert Message
          </button>
        </div>
      </section>
      <section>
        <h2 className="text-2xl">Events and the DOM</h2>
        <article>
          <h3 className="my-2 text-3xl font-bold">Counter: {counter}</h3>
          <button
            onClick={removeFromCounter}
            className="bg-red-500 hover:bg-red-700 active:bg-blue-600 px-4 py-2 my-2 cursor-pointer"
          >
            Remove 1
          </button>
          <button
            onClick={addToCounter}
            className="bg-blue-500 hover:bg-blue-700 active:bg-red-500 px-4 py-2 my-2 cursor-pointer"
          >
            Add 1
          </button>
        </article>
        <article>
          <h3 className="my-2 text-3xl font-bold">
            Stateful Variable
            <br />
            Age: {age}
          </h3>
          <p>The proper way to update variables in the DOM</p>
          <button
            onClick={removeFromAge}
            className="bg-red-500 hover:bg-red-700 active:bg-blue-600 px-4 py-2 my-2 cursor-pointer"
          >
            Remove 1
          </button>
          <button
            onClick={addToAge}
            className="bg-blue-500 hover:bg-blue-700 active:bg-red-500 px-4 py-2 my-2 cursor-pointer"
          >
            Add 1
          </button>
        </article>
      </section>
    </main>
  );
}
