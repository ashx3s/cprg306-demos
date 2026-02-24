
import NextConventionSection from "./NextConventionSection";
import PageHeader from "../components/PageHeader";

export default function Page() {
  const data = {
    title: "Another Example",
    description: "Showcase how to use the spread operator",
    bgColor: "bg-orange-300 dark:bg-orange-800",
  };

  return (
    <main>
      <PageHeader
        title="Week 2"
        description="This week we learned how to create static components that can be"
        bgColor="bg-green-300 dark:bg-green-800"
      />
      <PageHeader {...data} />
      <NextConventionSection />
    </main>
  );
}
