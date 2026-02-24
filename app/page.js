import PageHeader from "./components/PageHeader";
<<<<<<< c-class
import SiteNav from "./components/SiteNav";
export default function Home() {
  return (
    <main>
      <PageHeader
        title="CPRG 306 Demo Site"
        description="examples of weekly code"
      />
      <SiteNav />
=======
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
>>>>>>> main
    </main>
  );
}
