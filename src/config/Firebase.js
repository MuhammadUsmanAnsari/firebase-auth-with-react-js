// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNWXk74dkn_KpmfQrPBzYxgzjRAbn_l-s",
  authDomain: "first-auth-usman.firebaseapp.com",
  projectId: "first-auth-usman",
  storageBucket: "first-auth-usman.appspot.com",
  messagingSenderId: "551245143526",
  appId: "1:551245143526:web:86c5aa4627165c07dd4a27",
  measurementId: "G-K0HF5E93Z6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export {auth,analytics}