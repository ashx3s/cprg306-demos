"use client";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { addItem } from "../lib/controller";
import { useFirestoreCollection } from "../hooks/useFirestoreCollection";

const formDataSchema = {
  title: "",
  description: "",
  author: "",
};

export default function Page() {
  const [formData, setFormData] = useState(formDataSchema);
  // Fetch Data from our specific firestore collection called blog_posts
  const {
    data: items,
    isLoading,
    error,
  } = useFirestoreCollection("blog_posts");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;
    try {
      await addItem("blog_posts", formData);
    } catch (error) {
      console.error("Error adding blog post", error);
    }
  };
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <main>
      <header>
        <h1>Blog Collection & Form Page</h1>
      </header>
      {/* form to add information for new articles */}
      <section>
        <h2>Create Blog Post Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="my-2">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="border-2 block my-2"
            />
          </div>
          <div className="my-2">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              name="author"
              id="author"
              value={formData.author}
              onChange={(e) =>
                setFormData({ ...formData, author: e.target.value })
              }
              className="border-2 block my-2"
            />
          </div>
          <div className="my-2">
            <label htmlFor="description"></label>
            <textarea
              name="description"
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="border-2 block my-2"
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 px-4">
            Submit
          </button>
        </form>
      </section>
      <section>
        <h2>Blog Articles Collection</h2>
        {/* print out list of current articles */}
        {isLoading ? (
          <p>loading...</p>
        ) : (
          items.map((item) => {
            {
              /* iterate through the blog posts */
            }
            return (
              <article key={item.id}>
                <h3>{item.title}</h3>
              </article>
            );
            {
              /* render each title */
            }
          })
        )}
      </section>
    </main>
  );
}

("whirlpool-36-30-52ft");
