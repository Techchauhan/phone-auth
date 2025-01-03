// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4X191jlI5WONorU4OkfFa844XzQYkFnk",
  authDomain: "ecommerce-with-pulsezest.firebaseapp.com",
  projectId: "ecommerce-with-pulsezest",
  storageBucket: "ecommerce-with-pulsezest.firebasestorage.app",
  messagingSenderId: "163595114954",
  appId: "1:163595114954:web:4bbe97ef15ea8036949733",
  measurementId: "G-HRHZMT8TC8"
};

// Initialize Firebase
const app =  initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};