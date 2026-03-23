"use client";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useFirestoreCollection } from "../hooks/useFirestoreCollection";

export default function Page() {
  const { authUser, loading } = useAuth();
  // Fetch Data from our specific firestore collection called blog_posts
  const {
    data: items,
    isLoading,
    error,
  } = useFirestoreCollection("blog_posts");
  // return loading message
  //  return error message
  return (
    <main>
      <header>
        <h1>Blog Collection & Form Page</h1>
        {/* <p>{authUser.email}</p> */}
      </header>
      {/* form to add information for new articles */}
      <section>
        <h2>Create Blog Post Form</h2>
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
