export default function Page() {
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
  return (
    <main>
      <h1>Week 5 Basic Interactivity</h1>
    </main>
  );
}
