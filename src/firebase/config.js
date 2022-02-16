// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_FkV3ln6SS_dW9hfYCF6cPgTKvBkgZqY",
  authDomain: "ecommerce-trent.firebaseapp.com",
  projectId: "ecommerce-trent",
  storageBucket: "ecommerce-trent.appspot.com",
  messagingSenderId: "893007388710",
  appId: "1:893007388710:web:c0f0aa889abc16187f46e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp () {
    return app
}