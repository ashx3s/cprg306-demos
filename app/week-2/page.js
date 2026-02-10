
import NextConventionSection from "./NextConventionSection";
export default function Page() {
  return (
    <main>
      <header>
        <h2>Week 2</h2>
        <p>
          This week we learned how to create static components that can be
          rendered in different pages.
        </p>
        <p>
          Along with this, we also explored how to create new{" "}
          <strong>pages</strong> in NextJS. Use a directory with the name of the
          page and then inside that directory add a <code>page.js</code> file.
        </p>
      </header>
      <NextConventionSection />
    </main>
  );
}
