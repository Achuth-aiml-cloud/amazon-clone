// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4rNnOT89MpMCrJFKOs1ZO99IRL9tIhYw",
  authDomain: "amazan-clone-by-achuth.firebaseapp.com",
  projectId: "amazan-clone-by-achuth",
  storageBucket: "amazan-clone-by-achuth.appspot.com",
  messagingSenderId: "900403351211",
  appId: "1:900403351211:web:6cae7d71c264ead1e6b1ee",
  measurementId: "G-PSV65LERH9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);