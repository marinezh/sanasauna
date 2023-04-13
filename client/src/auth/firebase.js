// Import the functions you need from the SDKs you need
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import {
  addDoc,
  setDoc,
  doc,
  collection,
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAidIC-uVj5LlRML8LJGBpwNTJNVlOlyf4",
  authDomain: "sanasauna-af75f.firebaseapp.com",
  databaseURL:
    "https://sanasauna-af75f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sanasauna-af75f",
  storageBucket: "sanasauna-af75f.appspot.com",
  messagingSenderId: "148695523951",
  appId: "1:148695523951:web:0f1180771f81a40779e39a",
  measurementId: "G-ENTW1SGT6D",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    // the response gives us an "user" object back
    const user = res.user;
    // This will be our fields in the database
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      authProvider: "local",
      email,
    });
    await setDoc(doc(db, "savedWords", user.uid), {
      words: [],
      uid: user.uid,
    });
  } catch (err) {
    console.log(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
};
