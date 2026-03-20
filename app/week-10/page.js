"use client";

// import useStatee, useAuth, useFirestoreCollection hook
// import controller functions addItem and getItems

export default function Page() {
  return (
    <main>
      <header>
        <h1>Blog Posts</h1>
      </header>
      <section>
        <h2>Form to create a new post</h2>
        {/* form element on submit run addItem controller function */}
        {/* fields: title, description, author */}
      </section>
      <section>
        <h2>Place to display all the posts in the collection</h2>
        <div>
          {/* get all the items and iterate */}
          {/* print out a card for each one */}
          {/* display title, description, author */}
        </div>
      </section>
    </main>
  );
}
