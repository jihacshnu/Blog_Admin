// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-ec6d5.firebaseapp.com",
  projectId: "blog-app-ec6d5",
  storageBucket: "blog-app-ec6d5.firebasestorage.app",
  messagingSenderId: "344551085281",
  appId: "1:344551085281:web:98f083a546ed0fe72f13a0",
};
// console.log(import.meta.env.FIREBASE_APIKEY);

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
