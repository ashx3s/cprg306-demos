"use client";

import { useFirestoreCollection } from "../hooks/useFirestoreCollection";

export default function BlogPostSection() {
  const {
    data: items,
    isDataLoading,
    dataError,
  } = useFirestoreCollection("blog_posts");

  if (isDataLoading) {
    return (
      <section>
        <h2>Data is loading...</h2>
      </section>
    );
  }
  if (dataError) {
    return (
      <section className="p-8 bg-red-700 text-white">
        <h2>Oops! There has been an error</h2>
        <p>{dataError}</p>
      </section>
    );
  }
  return (
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
  );
}
