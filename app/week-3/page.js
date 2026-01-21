import PageHeader from "../components/PageHeader";
export default function Page() {
  const headerInfo = {
    title: "Week 3",
    description: "Creating reusable components with Props.",
  };
  return (
    <main>
      <PageHeader {...headerInfo} />
    </main>
  );
}
