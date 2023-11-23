import { doc, getDoc } from "firebase/firestore";
import { setDoc } from "firebase/firestore";
import { database } from "../configs/firebaseconfig";

export const GetDocById = async (
  collectionName: string,
  documentId: string
) => {
  try {
    const docRef = doc(database, collectionName, documentId);
    const snapshot = await getDoc(docRef);

    if (snapshot.exists()) {
      return snapshot.data();
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting document:", error);
    return null;
  }
};
export const AddDocument = async (
  collectionName: string,
  id: string,
  documentData: Record<string, any>
) => {
  try {
    const res = await setDoc(doc(database, collectionName, id), documentData);
    return res;
  } catch (error) {
    console.error("Error adding document:", error);
    throw error;
  }
};
export const handleFirebaseErr = (err: error): string | error => {
  if (err?.name == "FirebaseError") {
    if ((err?.code as string).includes("too-many")) {
      return "Too Many Request ! Please try after some time";
    }
    if ((err?.code as string).includes("invalid-verification-code")) {
      return "Invalid OTP ! Please check Your inbox and enter the correct OTP";
    }
  }
  return err;
};
