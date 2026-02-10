import PageHeader from "./components/PageHeader";
import SiteNav from "./components/SiteNav";
export default function Home() {
  return (
    <main>
      <PageHeader
        title="CPRG 306 Demo Site"
        description="examples of weekly code"
      />
      <SiteNav />
    </main>
  );
}
