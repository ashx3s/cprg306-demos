"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/firebase/config";
import { useAuth } from "@/app/contexts/AuthContext";
export default function Page({ params }) {
  // get access to the route parameters
  const unwrappedParams = use(params);
  const router = useRouter();
  const { authUser, loading } = useAuth();
  const [post, setPost] = useState(null);
  const [postLoading, setPostLoading] = useState(true);
  const [error, setError] = useState(null);
  // get access to data for the page
  // error handle
  // fetch useEffect
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(db, "blog_posts", unwrappedParams.id);
        console.log(docRef);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPost({ id: docSnap.id, ...docSnap.data() });
        } else {
          setError("Post not found");
        }
      } catch (error) {
        console.error("Error", error);
      } finally {
        setPostLoading(false);
      }
    };
    fetchPost();
  }, [unwrappedParams.id]);
  // search for items in a particular collection
  // create a page by accessing an individual document
  console.log(post);
  // loading return
  if ((loading, postLoading)) return <div>Loading</div>;
  // error return
  if (error) return <div>Error: {error}</div>;
  // no post found return
  if (!post) return <div>404</div>;
  // return the article if it exists
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
    </article>
  );
}
