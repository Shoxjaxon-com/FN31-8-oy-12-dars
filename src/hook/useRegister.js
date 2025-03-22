import { auth } from "../Firebase/FireBaseConfig";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import { useGlobalContext } from "./useGlobalContext";
import { useNavigate } from "react-router-dom"; // ✅ `useNavigate` ni import qilish

export const useRegister = () => {
    const { dispatch } = useGlobalContext();
    const navigate = useNavigate(); 

    const registerWithGoogle = () => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                dispatch({ type: "LOGIN", payload: user });
                toast.success("Welcome, " + user.displayName);
                
                navigate("/"); 
            })
            .catch((error) => {
                console.error("Error during Google Sign-In:", error);
                toast.error(error.message);
            });
    };

    return { registerWithGoogle };
};
