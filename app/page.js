import Link from "next/link";
export default function Home() {
  // react uses JSX which is like HTML + Javascript
  // anything visual goes in the return
  return (
    <main>
      <header className="pt-10 pb-6 mx-4">
        <h1 className="text-3xl lg:text-6xl font-bold">CPRG 306 Demo Site</h1>
        <p>Weekly demonstrations of code concepts for cprg 306</p>
      </header>
      <section className="mx-4">
        <header className="bg-violet-900 p-2 rounded-lg mb-4">
          <h2 className="text-xl font-semibold">Weekly Demos</h2>
          <p className="text-stone-300">
            See rendered versions and the code versions of each code week by
            week
          </p>
        </header>
        <ul className="list-disc mx-4">
          <li>
            <strong>Week 2:</strong>
            <br />
            <Link
              href="week-2"
              className="hover:text-yellow-500 hover:underline underline-offset-2"
            >
              View Page in this site
            </Link>
            <br />
            <Link
              href="https://github.com/ashx3s/cprg306-demos/tree/main/app/week-2"
              className="hover:text-yellow-500 hover:underline underline-offset-2"
            >
              View Code in Github
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
