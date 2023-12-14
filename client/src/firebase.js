// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "lesotho-estate.firebaseapp.com",
  projectId: "lesotho-estate",
  storageBucket: "lesotho-estate.appspot.com",
  messagingSenderId: "611294681366",
  appId: "1:611294681366:web:ff574d15c1dd18c278d837"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);