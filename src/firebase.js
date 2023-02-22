// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3i7UU8HQj50Ja3o-UgCjOUW_rdrzRQYM",
  authDomain: "ai-chatapp.firebaseapp.com",
  projectId: "ai-chatapp",
  storageBucket: "ai-chatapp.appspot.com",
  messagingSenderId: "720894800680",
  appId: "1:720894800680:web:8529ac806597e4e6b4561d",
  measurementId: "G-6ZMK7W385B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()

const analytics = getAnalytics(app);
