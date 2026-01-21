import NextConventionSection from "./NextConventionSection";
import PageHeader from "../components/PageHeader";
export default function Page() {
  const headerInfo = {
    title: "Week 2",
    description:
      "This week we learned how to create static components that can be rendered in different pages.",
  };
  return (
    <main>
      <PageHeader {...headerInfo} />
      <NextConventionSection />
    </main>
  );
}
