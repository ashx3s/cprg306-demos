"use client";
import { useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "@/app/firebase/config";

export function useFirestoreCollection(collectionName = "characters") {
  const [data, setData] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [dataError, setDataError] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, collectionName),
      (snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(items);
        setIsDataLoading(false);
        setDataError(null);
      },
      (error) => {
        setDataError(error.message); // must match state setter name
        setIsDataLoading(false);
      },
    );

    return unsubscribe; // React calls this as cleanup on unmount
  }, []);

  return { data, isDataLoading, dataError };
}
