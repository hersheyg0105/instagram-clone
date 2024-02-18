// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYk_e2x0X1MBiBB4wzyjwF7abAiCLKnfA",
  authDomain: "instagram-clone-b128b.firebaseapp.com",
  projectId: "instagram-clone-b128b",
  storageBucket: "instagram-clone-b128b.appspot.com",
  messagingSenderId: "239360892310",
  appId: "1:239360892310:web:170ccac53befd9262911b7",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp;
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
