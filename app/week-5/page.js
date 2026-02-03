"use client";

import PageHeader from "../components/PageHeader";
export default function Page() {
  function alertMsg() {
    alert("Hello World! Simple Alert");
  }
  const greet = "Hello User";
  function alertDynamic(msg) {
    alert(msg);
  }
  return (
    <main>
      <PageHeader title="Week 5" description="Event Handlers and State" />
      <section className="mx-8">
        <header className="mb-4">
          <h2 className="text-2xl">Event Handlers</h2>
          <p>
            These examples trigger alerts from function declarations. The second
            one uses an anonymous function with the function parameter.
          </p>
        </header>
        <button
          className="bg-blue-500 px-4 py-2 my-2 cursor-pointer"
          onClick={alertMsg}
        >
          Trigger an Alert
        </button>
        <button
          className="bg-amber-600 px-4 py-2 my-2 cursor-pointer"
          onClick={() => alertDynamic(greet)}
        >
          Trigger an Alert
        </button>
      </section>
      <section>
        <header className="mb-4">
          <h2 className="text-2xl">Events with page data</h2>
          <p>
            Try rendering data from js to the DOM. Then try to manipulate it.
          </p>
        </header>
      </section>
    </main>
  );
}
