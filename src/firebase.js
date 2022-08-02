import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4QKXM2LVbrPHdATfCajIMNCJ-AFhnMAM",
  authDomain: "jewellery-e3275.firebaseapp.com",
  projectId: "jewellery-e3275",
  storageBucket: "jewellery-e3275.appspot.com",
  messagingSenderId: "708741958446",
  appId: "1:708741958446:web:c248ce4fdb95004ce788bf",
  measurementId: "G-ZFTJG6BS4W"
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore();
export const jewell=collection(db,"jewell");
