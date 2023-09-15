// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyA_00PmbqyejNOtahudNiVpApI5GFnZorc",
  authDomain: "react-authentication-11a73.firebaseapp.com",
  projectId: "react-authentication-11a73",
  storageBucket: "react-authentication-11a73.appspot.com",
  messagingSenderId: "829001220742",
  appId: "1:829001220742:web:e9a81f043ba65a226b4707",
  measurementId: "G-3J18YF4SPW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app
