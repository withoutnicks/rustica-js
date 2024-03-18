import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "./firebase";

const db = getFirestore(app);

export async function getPlatos() {
  const queryPlatos = await getDocs(collection(db, "platos"));
  const platosData = [];

  queryPlatos.forEach((doc) => {
    platosData.push({ ...doc.data(), id: doc.id }); 
  });

  return platosData;
}