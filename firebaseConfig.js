import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNGSeUiArajLfl_zRW-qNg-Cyp_NpeHuQ",
  authDomain: "course-mangement.firebaseapp.com",
  projectId: "course-mangement",
  storageBucket: "course-mangement.appspot.com",
  messagingSenderId: "976882137462",
  appId: "1:976882137462:web:6e487831d9abf07d062257",
  measurementId: "G-JZKBCT4BXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
