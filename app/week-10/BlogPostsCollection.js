"use client";
import Link from "next/link";
import { useFirestoreCollection } from "../hooks/useFirestoreCollection";

export default function BlogPostCollection() {
  const {
    data: items,
    isLoading,
    error,
  } = useFirestoreCollection("blog_posts");
  if (error) {
    return <p>{error}</p>;
  }
  return (
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
              <h3>
                <Link href={`/week-10/${item.id}`}>{item.title}</Link>
              </h3>
            </article>
          );
        })
      )}
    </section>
  );
}
