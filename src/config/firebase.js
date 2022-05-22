// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgUTvcPgaZh-AXNTaZaG0n1Cm0eEWCdxc",
  authDomain: "ali-construction.firebaseapp.com",
  projectId: "ali-construction",
  storageBucket: "ali-construction.appspot.com",
  messagingSenderId: "60787197522",
  appId: "1:60787197522:web:34f13976a0fe50549c818b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize firestore for database
export const database = getFirestore(app);
