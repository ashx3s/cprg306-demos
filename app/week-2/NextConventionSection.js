export default function NextConventionSection() {
  return (
    <section>
      <h2>Important Conventions in NextJS</h2>
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
