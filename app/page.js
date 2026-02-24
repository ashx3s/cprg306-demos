import PageHeader from "./components/PageHeader";
import DemoNav from "./components/DemoNav";
export default function Home() {
  const pageHeaderData = {
    title: "CPRG 306 Web App Class",
    description: "in class examples.",
  };
  return (
    <main>
      {/* Pass information to PageHeader */}
      <PageHeader {...pageHeaderData} />
      <DemoNav />
    </main>
  );
}
