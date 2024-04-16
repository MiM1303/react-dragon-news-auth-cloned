// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

console.log('inside firebaseconfig',import.meta.env.VITE_PASS)
const firebaseConfig = {
  // apiKey: "AIzaSyDPrfCnipWTYbVismNUgmwuCeHBIgyON9Q",
  // authDomain: "react-dragon-news-auth-74c0f.firebaseapp.com",
  // projectId: "react-dragon-news-auth-74c0f",
  // storageBucket: "react-dragon-news-auth-74c0f.appspot.com",
  // messagingSenderId: "65744084841",
  // appId: "1:65744084841:web:cc6d2361e61410abfd27f8"
  
  apiKey:import.meta.env.VITE_APIKEY,
  authDomain:import.meta.env.VITE_AUTHDOMAIN,
  projectId:import.meta.env.VITE_PROJECTID,
  storageBucket:import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
  appId:import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;