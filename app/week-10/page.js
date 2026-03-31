import NewBlogPostForm from "./NewBlogPostForm";
import BlogPostSection from "./BlogPostSection";

export default function Page() {
  return (
    <main>
      <header>
        <h1>Blog Posts</h1>
      </header>
      <NewBlogPostForm />
      <BlogPostSection />
    </main>
  );
}
