import { auth } from "../Firebase/FireBaseConfig"; 
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import { useGlobalContext } from "./useGlobalContext";
import { useNavigate } from "react-router-dom"; 

export const useRegister = () => {
    const { dispatch } = useGlobalContext();
    const navigate = useNavigate(); 

    const registerWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            dispatch({ type: "LOGIN", payload: user });
            toast.success(`Welcome, ${user.displayName}`);

            navigate("/");
        } catch (error) {
            console.error("Google bilan kirishda xatolik:", error);
            toast.error(error.message);
        }
    };

    return { registerWithGoogle };
};
