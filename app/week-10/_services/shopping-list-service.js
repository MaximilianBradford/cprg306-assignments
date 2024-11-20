import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";

export const getItems = async (userId) => {
  const q = query(collection(db, `users/${userId}/items`), where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  const items = querySnapshot.docs.map(doc => doc.data());
  return items;
};

export const addItem = async (userId, item) => {
  await addDoc(collection(db, `users/${userId}/items`), { ...item, userId });
};