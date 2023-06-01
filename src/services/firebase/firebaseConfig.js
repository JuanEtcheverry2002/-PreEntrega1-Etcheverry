import { initializeApp } from "firebase/app";
import{getFirestore}from 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyB8W54tTtnkc7RP9bwgfXVFxJx34FbzUAg",
    authDomain: "zapatosonline-8bb5e.firebaseapp.com",
    projectId: "zapatosonline-8bb5e",
    storageBucket: "zapatosonline-8bb5e.appspot.com",
    messagingSenderId: "1054895289503",
    appId: "1:1054895289503:web:9cfa64184914a1e6e61eaa",
    measurementId: "G-38RES8HD6M"
  };
  
  initializeApp(firebaseConfig)
  export const db= getFirestore()