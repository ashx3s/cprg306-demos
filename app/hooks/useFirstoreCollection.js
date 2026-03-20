"use client";

import { useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "@/app/lib/firebase/config";

export function useFirestoreCollection(collectionName = "blog_posts") {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    // onSnapshot
    const unsubscribe = onSnapshot(
      collection(db, collectionName),
      (snapshot) => {
        // get items by running "snapshot.docs.map"
        const items = snapshot.docs.map((doc) => ({
          // map them to id: doc.id and pass rest of data
          id: doc.id,
          ...doc.data(),
        }));
        setData(items);
        setIsLoading(false);
        setError(null);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      },
    );
    return unsubscribe;
  }, []);
  return { data, isLoading, error };
}
