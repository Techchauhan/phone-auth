// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa5ur-1oaAPpZfRBGg2fSMSfaa-FnzCYA",
  authDomain: "sms-authentication-cd360.firebaseapp.com",
  projectId: "sms-authentication-cd360",
  storageBucket: "sms-authentication-cd360.appspot.com",
  messagingSenderId: "635248074835",
  appId: "1:635248074835:web:a3a73f833824f3b8aba6a6",
  measurementId: "G-PXM7LD6047"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
auth.useDeviceLanguage();

export {auth};