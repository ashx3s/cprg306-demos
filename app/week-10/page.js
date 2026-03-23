import NewPostForm from "./NewPostForm";
import BlogPostCollection from "./BlogPostsCollection";
export default function Page() {
  // Fetch Data from our specific firestore collection called blog_posts

  return (
    <main>
      <header>
        <h1>Blog Collection & Form Page</h1>
      </header>
      <NewPostForm />
      <BlogPostCollection />
    </main>
  );
}
