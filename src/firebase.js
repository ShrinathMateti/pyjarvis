// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // ← Firestore import

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC9fWjWMYHEu8LkCi2J-dV3r_xR7kXOb8",
  authDomain: "pyjarvisit.firebaseapp.com",
  projectId: "pyjarvisit",
  storageBucket: "pyjarvisit.appspot.com", // ✅ Corrected
  messagingSenderId: "1089386945358",
  appId: "1:1089386945358:web:6cb5114d82ad48c3929c1f",
  measurementId: "G-PDH6HBC3NY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app); // ✅ Firestore instance

export { db };
