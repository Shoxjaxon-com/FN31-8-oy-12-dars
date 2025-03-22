import { createContext, useEffect, useReducer } from "react";

export const GlobalContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload,
                avatar: action.payload.avatar || state.avatar, // Avatarni ham saqlash
            };
        case "LOGOUT":
            return {
                ...state,
                user: null,
                avatar: null, // Avatarni ham o‘chirish
            };
        case "LIKE":
            return { ...state, likedImages: [...state.likedImages, action.payload] };
        case "UNLIKE":
            return {
                ...state,
                likedImages: state.likedImages.filter((img) => img.id !== action.payload),
            };
        case "DOWNLOAD":
            if (state.downloadedImages.some(img => img.id === action.payload.id)) {
                return state;
            }
            return {
                ...state,
                downloadedImages: [...state.downloadedImages, action.payload],
            };
        case "SET_AVATAR":
            return {
                ...state,
                avatar: action.payload
            };
        default:
            return state;
    }
};

export function GlobalContextProvider({ children }) {
    const initialState = JSON.parse(localStorage.getItem("splash-data")) || {
        user: null,
        avatar: null,
        likedImages: [],
        downloadedImages: []
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        localStorage.setItem("splash-data", JSON.stringify({
            user: state.user,
            avatar: state.avatar,
            likedImages: state.likedImages
        }));
    }, [state.user, state.avatar, state.likedImages]);

    return (
        <GlobalContext.Provider value={{ ...state, dispatch }}> 
            {children}
        </GlobalContext.Provider>
    );
}
