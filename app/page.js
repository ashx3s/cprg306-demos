import Link from "next/link";
import NavListItem from "./components/NavListItem";
export default function Home() {
  // react uses JSX which is like HTML + Javascript
  // anything visual goes in the return
  return (
    <main>
      <header>
        <h1 className="text-3xl lg:text-6xl font-bold">Hello World</h1>
      </header>
      <section>
        <header>
          <h2>Weekly Demos</h2>
          <p>
            See rendered versions and the code versions of each code week by
            week
          </p>
        </header>
        <ul>
          <NavListItem
            title="Week 2"
            pageLink="week-2"
            repoLink="https://github.com/ashx3s/cprg306-demos"
          />
          <NavListItem
            title="Week 3"
            pageLink="week-3"
            repoLink="https://github.com/ashx3s/cprg306-demos"
          />
        </ul>
      </section>
    </main>
  );
}
