"use client";
import { useState } from "react";
import { addItem } from "../lib/controller";

const formDataSchema = {
  title: "",
  description: "",
  author: "",
};

export default function NewPostForm() {
  const [formData, setFormData] = useState(formDataSchema);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;
    try {
      await addItem("blog_posts", formData);
    } catch (error) {
      console.error("Error adding blog post", error);
    }
  };
  return (
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
  );
}
