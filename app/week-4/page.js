import PageHeader from "../components/PageHeader";
const simpleArr = ["a", "b", "c"];

const cats = [
  {
    id: 324356753,
    name: "Thomas O'Malley",
    age: 8,
  },
  {
    id: 890654645,
    name: "Duchess",
    age: 7,
  },
  {
    id: 889989989,
    name: "Toulouse",
    age: 1,
  },
  {
    id: 889384389,
    name: "Marie",
    age: 1,
  },
  {
    id: 329983389,
    name: "Berloiz",
    age: 1,
  },
];
const numArrObj = [
  { id: 0, value: 4534563 },
  { id: 2, value: 35854398 },
  { id: 1, value: 8989 },
];
export default function Page() {
  // making sort less mutable
  const numArr = [45, 44, 21, 89, 1];
  console.log("Original Number Array", numArr);
  const sortedArr = [...numArr].sort();
  console.log("OriginalNumber array after sort", numArr);
  console.log("----");
  console.log("Sorted Array after running sort", sortedArr);
  return (
    <main>
      <PageHeader
        title="Rendering Lists"
        description="Iterative logic in React."
      />
      <section className="mx-8 my-4 p-4 bg-emerald-500 dark:bg-emerald-800 md:bg-purple-300 dark:md:bg-purple-800 rounded-xl">
        <h2 className="text-xl sm:text-2xl font-bold">Simple Example</h2>
        <p>Put the simpleArr values onto the page</p>
        <ul className="my-2">
          {simpleArr.map((v) => (
            <li key={v}>{v}</li>
          ))}
        </ul>
      </section>
      <section className="mx-8 my-4 bg-pink-300 dark:bg-pink-800 p-4 rounded-xl">
        <h2 className="text-xl sm:text-2xl font-bold">
          Key values need to be unique
        </h2>
        <p>
          even though index can be technically the same number, it'll change
          based on array changes.
        </p>
        <ol className="list-decimal ml-6 mt-4">
          {numArrObj.map((num) => (
            <li key={num.id} className="text-xl font-bold">
              {num.value}
            </li>
          ))}
        </ol>
      </section>
      <section className="mx-8 my-4">
        <h2 className="text-2xl">Method Chaining & Using Return in Map</h2>
        <p>
          Chain methods like filter and map to get powerful rendering
          possibilities.
        </p>
        <p>If you use curly brackets, use a return statement as well</p>
        <ul className="my-2">
          {cats
            .filter((cat) => cat.age < 2)
            .map((youngCat) => {
              return <li key={youngCat.id}>{youngCat.name}</li>;
            })}
        </ul>
      </section>
    </main>
  );
}
