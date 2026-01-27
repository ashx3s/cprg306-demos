import PageHeader from "../components/PageHeader";
const simpleArr = ["a", "b", "c"];

const cats = [
  {
    id: 324356753,
    name: "Thomas O'Malley",
  },
  {
    id: 890654645,
    name: "Duchess",
  },
  {
    id: 889989989,
    name: "Toulouse",
  },
];

export default function Page() {
  return (
    <main>
      <PageHeader
        title="Rendering Lists"
        description="Iterative logic in React."
      />
      <section className="mx-8">
        <h2 className="text-2xl">Simple Example</h2>
        <p>Put the simpleArr values onto the page</p>
        <ul className="my-2">
          {simpleArr.map((v) => (
            <li key={v}>{v}</li>
          ))}
        </ul>
      </section>

      <section className="mx-8 my-4">
        <h2 className="text-2xl">Return in Iterative Logic Example</h2>
        <p>If you use curly brackets, use a return statement as well</p>
        <ul classname="my-2">
          {cats.map((cat) => {
            return <li key={cat.id}>{cat.name}</li>;
          })}
        </ul>
      </section>
    </main>
  );
}
