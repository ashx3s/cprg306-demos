"use client";

import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { addItem } from "../lib/controller";

const formDataSchema = {
  title: "",
  description: "",
  author: "",
};

export default function NewBlogPostForm() {
  const { authUser, loading } = useAuth();
  const [formData, setFormData] = useState(formDataSchema);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;
    if (loading || !authUser) return;
    const data = { ...formData, userid: authUser.uid };
    try {
      await addItem("blog_posts", data);
    } catch (error) {
      console.error("Error uploading blog post: ", error);
    }
  };

  return (
    <section>
      <header>
        <h2>Form to create a new post</h2>

        <p>{authUser ? `User: ${authUser.email}` : "Nobody is signed in"}</p>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="my-2">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
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
            id="author"
            name="author"
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
            id="description"
            name="description"
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
  );
}
