import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase"; // Firebase sozlamalari shu faylda bo‘lishi kerak

const googleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
  } catch (error) {
    console.error("Google login xatosi:", error.message);
  }
};
