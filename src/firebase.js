// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCti-cPzTceLwn2mAs9hdPWDPMyq7YruIw",
  authDomain: "foodxpress-93d07.firebaseapp.com",
  projectId: "foodxpress-93d07",
  storageBucket: "foodxpress-93d07.appspot.com",
  messagingSenderId: "1020318109828",
  appId: "1:1020318109828:web:3055d1b0e84d23037572d1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);