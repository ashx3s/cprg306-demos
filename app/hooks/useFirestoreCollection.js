"use client";
import { useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "@/app/lib/firebase/config";

export function useFirestoreCollection(collectionName) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    // onSnapshot function to real time fetch information
    const unsubscribe = onSnapshot(
      collection(db, collectionName),
      (snapshot) => {
        // fetch items by mapping the snapshot
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // map the id and any other data
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
