// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIT80p5JZYHSJuzbdYN8lSt-dEUg0iLwk",
  authDomain: "cerebrus-maximus.firebaseapp.com",
  projectId: "cerebrus-maximus",
  storageBucket: "cerebrus-maximus.appspot.com",
  messagingSenderId: "803778313104",
  appId: "1:803778313104:web:60ec29352469ab271b1115",
  measurementId: "G-DVW52JJP6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
