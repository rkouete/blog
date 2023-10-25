// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAfFsZK7YNZpdYs5UcdXrIXOaaMz10t06Q",
  authDomain: "kouete-s-blog-932d2.firebaseapp.com",
  projectId: "kouete-s-blog-932d2",
  storageBucket: "kouete-s-blog-932d2.appspot.com",
  messagingSenderId: "353809968549",
  appId: "1:353809968549:web:8203612c49f2b943154c4c",
  measurementId: "G-5YL2CDPWZL"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};