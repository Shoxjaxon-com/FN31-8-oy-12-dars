import { createSlice } from "@reduxjs/toolkit";
import { getAuth, sendPasswordResetEmail, sendEmailVerification } from "firebase/auth";
import { getFirestore, doc, setDoc, collection } from "firebase/firestore";
import { getAuth as getFirebaseAuth } from "firebase/auth";

const initialState = {
  isAuthenticated: !!localStorage.getItem("userToken"),
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      localStorage.setItem("userToken", action.payload); 
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem("userToken"); 
      state.user = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Parolni tiklash funksiyasi
const auth = getFirebaseAuth();

export const handlePasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Parol tiklash uchun email yuborildi!");
  } catch (error) {
    alert("Xatolik: " + error.message);
  }
};

// Emailni tasdiqlash funksiyasi
export const sendVerifyEmail = async () => {
  try {
    await sendEmailVerification(auth.currentUser);
    alert("Tasdiqlash emaili yuborildi.");
  } catch (error) {
    alert("Xatolik: " + error.message);
  }
};

// Rasmni saqlash funksiyasi
const db = getFirestore();

export const saveImage = async (imageUrl, author) => {
  const user = getFirebaseAuth().currentUser;

  if (!user) {
    alert("Iltimos, tizimga kiring");
    return;
  }

  const imageRef = doc(collection(db, "savedImages"), user.uid);
  await setDoc(imageRef, {
    imageUrl,
    author,
    timestamp: new Date(),
  });

  alert("Rasm saqlandi!");
};

// State’ni eksport qilish
export const { login, logout, setUser } = authSlice.actions;
export default authSlice.reducer;
