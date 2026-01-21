export default function NextConventionSection() {
  const sectionTitle = "Important Conventions in NextJS";
  const userName = "Pingu";
  return (
    <section>
      <h2 className="text-2xl my-2">{sectionTitle.toUpperCase()}</h2>
      <p className="text-blue-200 text-5xl my-5">
        {/* This will conditionally render the message "Hello Pingu" or "Who even are you??" based on the evaluation of userName ==="Pingu" */}
        {userName === "Pingu" ? "Hello Pingu!" : "Who even are you???"}
      </p>
      <ul>
        <li>
          Components are named with <strong>PascalCase</strong> like{" "}
          <code>app/components/PageHeader.js</code>
        </li>
        <li>
          Pages are named with <strong>kebab-case.</strong> like{" "}
          <code>app/week-2/page.js</code>
        </li>
        <li>
          JSX is rendered inside the <code>return ()</code>
        </li>
        <li>
          export pages using <code>export default function Page()</code>
        </li>
        <li>
          export components using <code>export function ComponentName()</code>.
          You can use default if it's the only thing being exported.
        </li>
      </ul>
    </section>
  );
}
