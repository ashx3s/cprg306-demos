// Database controller

// imports
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase/config";
// add item logic
export const addItem = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

// get all items logic
export const getItems = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error(`error reading collection: ${collectionName}`, error);
  }
};
// get item logic

// ... update and delete as second phase
