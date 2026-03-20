"use client";

// import useState, useAuth, useFirestoreCollection hook
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useFirestoreCollection } from "../hooks/useFirstoreCollection";
// import controller functions addItem and getItems

const formDataSchema = {
  title: "",
  description: "",
  author: "",
};

export default function Page() {
  const { authUser, loading } = useAuth();
  const [formData, setFormData] = useState(formDataSchema);

  const { data: items, isLoading, error } = useFirestoreCollection();

  const handleSubmit = async (e) => {
    // e?.preventDefault()
    if (!formData.title.trim()) return;
    const { data } = { ...formData };
    try {
      await addItem("blog_posts", data);
    } catch (error) {
      console.error(`Error adding ${data}`, error);
    }
  };

  if (isLoading) {
    return <p>Data Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <main>
      <header>
        <h1>Blog Posts</h1>
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
