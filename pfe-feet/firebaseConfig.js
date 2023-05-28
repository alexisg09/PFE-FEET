import { initializeApp } from "firebase/app";
import { getFirestore,collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoCjk45DXhmF1m_MtWJAoK8OFA0b1C5os",
  authDomain: "pfe-feet.firebaseapp.com",
  projectId: "pfe-feet",
  storageBucket: "pfe-feet.appspot.com",
  messagingSenderId: "8654223352",
  appId: "1:8654223352:web:e8dcd75054aac37b7c480d",
  measurementId: "G-GK8L9Z3G97"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


export async function getFeelings(db) {
    const feelings = collection(db, 'feelings');
    const feelingsDocs = await getDocs(feelings);
    const feelingsDocsList = feelingsDocs.docs.map(doc => doc.data());
    return feelingsDocsList;
}