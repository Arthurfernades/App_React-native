import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDuTfRZAjIJQG24PX5Nt1mdQc1j7JebycI",
  authDomain: "dipt-d7856.firebaseapp.com",
  projectId: "dipt-d7856",
  storageBucket: "dipt-d7856.appspot.com",
  messagingSenderId: "289703387821",
  appId: "1:289703387821:web:bf5d5e12f78a6133341c24",
  measurementId: "G-9Q4SPCCPJ3"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

//const analytics = getAnalytics(app);