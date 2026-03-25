"use client";
import { useEffect, useState, use } from "react";
import Link from "next/link";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/lib/firebase/config";
import { useAuth } from "@/app/contexts/AuthContext";

export default function Page({ params }) {
  // handle params to get the route query
  const unwrappedParams = use(params);
  const { authUser, loading: authLoading } = useAuth();

  // import our page information
  const [post, setPost] = useState(null);
  // loading state
  const [loading, setLoading] = useState(true);
  //error state
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // get a docReference
        const docRef = doc(db, "blog_posts", unwrappedParams.id);
        // fetch information using the getDoc method by passing the reference
        const docSnap = await getDoc(docRef);
        // append to our post
        if (docSnap.exists()) {
          setPost({ id: docSnap.id, ...docSnap.data() });
        } else {
          setError("Post not found");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [unwrappedParams.id]);

  // alternate renders
  if (loading || authLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error}</p>
      </div>
    );
  }
  if (!post) {
    return (
      <main>
        <h1>Post Not Found</h1>
        <Link href="week-10">Get me outta here</Link>
      </main>
    );
  }
  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
    </main>
  );
}
