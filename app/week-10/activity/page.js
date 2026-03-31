"use client";
// Auth check lives at the PAGE layer — not inside the form component.
// This keeps components clean and single-purpose.
import { useAuth } from "@/app/contexts/AuthContext";
import BlogPostForm from "./components/BlogPostForm";
import PostList from "./components/PostList";

export default function Page() {
  const { authUser, loading } = useAuth();

  if (loading) {
    return (
      <main>
        <p className="p-8">Authenticating...</p>
      </main>
    );
  }

  if (!authUser) {
    return (
      <main>
        <p className="p-8">You must be signed in to create a blog post.</p>
      </main>
    );
  }

  return (
    <main className="max-w-2xl mx-auto p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
      </header>
      {/* authUser is passed as a prop — components don't need to import auth hooks */}
      <BlogPostForm authUser={authUser} />
      <PostList />
    </main>
  );
}
