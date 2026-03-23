"use client";

// import useState, useAuth, useFirestoreCollection hook
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { addItem } from "../lib/controller";
import { useFirestoreCollection } from "../hooks/useFirestoreCollection";
// import controller functions addItem and getItems

const formDataSchema = {
  title: "",
  description: "",
  author: "",
};

export default function Page() {
  const { authUser, loading } = useAuth();
  const [formData, setFormData] = useState(formDataSchema);

  const { data: items, isDataLoading, dataError } = useFirestoreCollection("blog_posts");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;
    // Guard: ensure auth is resolved and user is signed in before writing
    if (loading || !authUser) return;
    const data = { ...formData, id: authUser.uid };
    try {
      await addItem("blog_posts", data);
    } catch (error) {
      console.error(`Error adding ${data}`, error);
    }
  };

  if (isDataLoading) {
    return <p>Data Loading...</p>;
  }
  if (dataError) {
    return <p>{dataError}</p>;
  }
  return (
    <main>
      <header>
        <h1>Blog Posts</h1>
        <p>{authUser ? `User: ${authUser.email}` : "Nobody is signed in"}</p>
      </header>
      <section>
        <h2>Form to create a new post</h2>
        {/* form element on submit run addItem controller function */}
        <form onSubmit={handleSubmit}>
          <div className="my-2">
            <label htmlFor="title">Title</label>
            <input
              type="text"
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
        {/* fields: title, description, author */}
      </section>
      <section>
        <h2>Place to display all the posts in the collection</h2>
        <div>
          {items.map((item) => {
            return (
              <article key={item.id}>
                <h3>{item.title}</h3>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
