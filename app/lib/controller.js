// imports: read all of the blog_posts, read a single blog_post, write a new blog_post, update a blog_post, and delete a blog_post
import { collection, addDoc, getDocs } from "firebase/firestore";
// import our db from our config
import { db } from "@/app/lib/firebase/config";

// add Document / add new blog Post item

// take a collection and the data from the user (created in a form) and send it to firestore
export const addItem = async (collectionName = "blog_posts", data) => {
  try {
    await addDoc(collection(db, collectionName), data);
  } catch (err) {
    console.error(`Error adding item to ${collectionName}`, err);
    throw err;
  }
};

export const getItems = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error reading collection: ", collectionName);
  }
};
