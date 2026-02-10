"use client";
import { useState } from "react";
import PageHeader from "@/app/components/PageHeader";
export default function Page() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <main>
      <PageHeader title="interactivity with forms" />
      <section className="mx-8">
        <header>
          <h2>Conditional Rendering</h2>
          <p>Using template literals and ternary operators</p>
        </header>
        <div>
          {isVisible && (
            <div className="bg-yellow-800 text-white p-4">
              <h3 className="text-xl font-semibold">Info box</h3>
              <p className="text-lg">Toggle this based on state</p>
            </div>
          )}
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="px-4 py-3 bg-green-800 text-white cursor-pointer"
          >
            Toggle message Visibility
          </button>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Ternary Operator Example</h3>
          <p
            className={`text-lg my-2 p-2 ${isVisible ? "bg-green-800" : "bg-red-800"}`}
          >
            {isVisible ? "Visible Activated" : "Visible Not Activated"}
          </p>
        </div>
      </section>
      <section>
        <h2>onChange and useState example</h2>
        <form></form>
      </section>
    </main>
  );
}
