import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPdES2v2lnTirvfFT1BD8NguvARcb9Tbo",
  authDomain: "my-unsplash-c15f8.firebaseapp.com",
  projectId: "my-unsplash-c15f8",
  storageBucket: "my-unsplash-c15f8.appspot.com",
  messagingSenderId: "121497153982",
  appId: "1:121497153982:web:71581742b2776e2b1349ef",
};

// Firebase ilovasini ishga tushirish
const app = initializeApp(firebaseConfig);

// Firebase Authentication
export const auth = getAuth(app);
