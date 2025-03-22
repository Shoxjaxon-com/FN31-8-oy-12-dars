import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPdES2v2lnTirvfFT1BD8NguvARcb9Tbo",
  authDomain: "my-unsplash-c15f8.firebaseapp.com",
  projectId: "my-unsplash-c15f8",
  storageBucket: "my-unsplash-c15f8.appspot.com",
  messagingSenderId: "121497153982",
  appId: "1:121497153982:web:71581742b2776e2b1349ef",
  measurementId: "G-1RT1XTW681"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
