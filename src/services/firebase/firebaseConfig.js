import { initializeApp } from "firebase/app";
import{getFirestore,addDoc,updateDoc,collection,}from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB8W54tTtnkc7RP9bwgfXVFxJx34FbzUAg",
    authDomain: "zapatosonline-8bb5e.firebaseapp.com",
    projectId: "zapatosonline-8bb5e",
    storageBucket: "zapatosonline-8bb5e.appspot.com",
    messagingSenderId: "1054895289503",
    appId: "1:1054895289503:web:9cfa64184914a1e6e61eaa",
    measurementId: "G-38RES8HD6M"
  };


export const createOrder = async (items) => {
    const order = {
      buyer: { name: "juan", phone: "099135525", email: "juanetcheverr02@gmail.com" },
      items: [{ name: items.name, price: items.price }],
      total: items.total,
    };
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then(({ id }) => {
      return id;
    });
  };
export const updateOrder = async (id, count) => {
    const db = getFirestore();
    const orderDoc = collection(db, "orders", "apCz5TMt7muNsnM9armr");
    updateDoc(orderDoc, { total: 2 });
  };
  
initializeApp(firebaseConfig)
export const db= getFirestore()