"use client";
// BlogPostForm manages all form state and composes the sub-components.
// Handler functions for the tag cloud are defined here and passed as props.

import { useState } from "react";
import { addItem } from "@/app/lib/controller";
import FormField from "./FormField";
import TagCloud from "./TagCloud";

// Factory function avoids shared mutable reference across re-renders
const getInitialFormData = () => ({
  title: "",
  description: "",
  content: "",
  tags: [],
});

export default function BlogPostForm({ authUser }) {
  const [formData, setFormData] = useState(getInitialFormData);
  const [tagInput, setTagInput] = useState("");

  // TODO: Implement addTag
  // - Read tagInput, trim whitespace
  // - Guard: skip if empty or already in formData.tags
  // - Add the tag to the tags array using the spread operator pattern
  // - Reset tagInput to ""
  const addTag = () => {
    // your implementation here
  };

  // TODO: Implement removeTag
  // - Filter formData.tags to remove the tag that matches `target`
  // - Update formData using setFormData and the spread operator pattern
  const removeTag = (target) => {
    // your implementation here
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    // Author info is pulled from the authenticated user, not a form field
    const postData = {
      ...formData,
      author: authUser.email,
      userId: authUser.uid,
    };

    try {
      await addItem("blog_posts", postData);
      setFormData(getInitialFormData());
      setTagInput("");
    } catch (error) {
      console.error("Error creating blog post:", error);
    }
  };

  return (
    <section className="mb-8">
      <header className="mb-4">
        <h2 className="text-xl font-semibold">New Blog Post</h2>
        <p className="text-sm text-gray-600">Author: {authUser.email}</p>
      </header>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <FormField
          label="Title"
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <FormField
          label="Description"
          id="description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <div>
          <label htmlFor="content" className="block mb-1 font-medium">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            rows={8}
            className="border-2 block w-full px-2 py-1 rounded"
          />
        </div>
        {/* TagCloud receives state values and handler functions as props */}
        <TagCloud
          tags={formData.tags}
          tagInput={tagInput}
          setTagInput={setTagInput}
          addTag={addTag}
          removeTag={removeTag}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded self-start"
        >
          Publish Post
        </button>
      </form>
    </section>
  );
}
