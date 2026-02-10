"use client";
import { useState } from "react";
import PageHeader from "@/app/components/PageHeader";
export default function Page() {
  const [isVisible, setIsVisible] = useState(true);
  const [userName, setUserName] = useState("");

  function formSubmit(e) {
    e.preventDefault();
    alert(e.target[0].defaultValue);
  }

  return (
    <main>
      <PageHeader title="interactivity with forms" />
      <section className="mx-8 mb-8">
        <header>
          <h2 className="text-2xl font-semibold">Conditional Rendering</h2>
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
      <section className="my-4 mx-8">
        <header>
          <h2 className="text-2xl font-semibold my-2">
            onChange and useState example
          </h2>
        </header>
        <div className="flex gap-4 flex-wrap">
          <form onSubmit={formSubmit}>
            <label htmlFor="userName" className="mr-2 p-2">
              UserName
            </label>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              id="userName"
              name="user-name"
              className="outline-1 outline-amber-50 p-2"
            />
            <input
              type="submit"
              value="Send Alert"
              className="bg-purple-800 text-white px-4 py-2 block my-2  cursor-pointer"
            />
          </form>
          <div>
            <h3 className="text-4xl font-bold">
              User Name: <span>{userName}</span>
            </h3>
          </div>
        </div>
      </section>
      <section>
        <h2>Delete this later</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus magnam
          veniam, explicabo soluta doloremque dolore sunt vitae eos amet tenetur
          non, facere doloribus quaerat iusto nemo similique ut ratione
          asperiores. Iure nisi, quisquam, aspernatur perferendis modi dolore
          aut nobis maxime laborum quidem dolorem voluptatem iusto quam
          voluptatibus accusantium incidunt necessitatibus sed temporibus fugiat
          dicta facilis. Itaque exercitationem saepe sint quisquam?
          Exercitationem, quae cumque eos expedita itaque minus suscipit?
          Placeat sed ex libero asperiores vitae dolorum ipsum dolorem ut dicta,
          quisquam explicabo doloremque excepturi est veritatis consequatur
          dolore vel nesciunt fugiat perspiciatis commodi mollitia numquam? Ea
          eos voluptate et impedit odio consequatur in ipsum provident commodi
          cum ut debitis velit quos dolores quas, dicta pariatur assumenda animi
          perspiciatis quaerat. Laborum architecto, tempore nisi dicta ipsa cum
          nam ex aspernatur dignissimos excepturi? Animi excepturi qui corrupti
          eligendi dolorum et, suscipit quis, velit harum aliquid incidunt ab
          officia doloremque itaque assumenda aperiam sit corporis officiis.
          Ullam, tempora sit! Odio obcaecati tenetur fugiat dolor tempora
          veritatis dolorem adipisci perspiciatis eaque repellendus quidem,
          accusantium ipsam inventore labore quod assumenda sint omnis aliquam
          minus, debitis perferendis quo odit ad maxime. Quod error mollitia
          dolore aliquid porro veniam, nisi ratione sapiente sit nesciunt
          aspernatur repellat fugit est.
        </p>
      </section>
    </main>
  );
}
