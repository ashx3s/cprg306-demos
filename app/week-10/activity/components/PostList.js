"use client";
// PostList fetches and displays published blog posts using a real-time listener.

import Link from "next/link";
import { useFirestoreCollection } from "@/app/hooks/useFirestoreCollection";

export default function PostList() {
  const {
    data: posts,
    isDataLoading,
    dataError,
  } = useFirestoreCollection("blog_posts");

  if (isDataLoading) {
    return (
      <section>
        <p>Loading posts...</p>
      </section>
    );
  }

  if (dataError) {
    return (
      <section className="p-4 bg-red-100 text-red-800 rounded">
        <p>Error loading posts: {dataError}</p>
      </section>
    );
  }

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Published Posts</h2>
      {posts.length === 0 ? (
        <p className="text-gray-500">No posts yet. Be the first to publish!</p>
      ) : (
        <ul className="flex flex-col gap-6">
          {posts.map((post) => (
            <li key={post.id}>
              <article className="border rounded p-4">
                <h3 className="text-lg font-medium">
                  <Link
                    href={`/week-10/${post.id}`}
                    className="hover:underline"
                  >
                    {post.title}
                  </Link>
                </h3>
                {post.description && (
                  <p className="text-gray-600 text-sm mt-1">{post.description}</p>
                )}
                <p className="text-xs text-gray-400 mt-1">By {post.author}</p>
                {post.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 px-2 py-0.5 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
