import { createContext, useReducer } from "react";
import LikkedImages from "../pages/LikkedImages";

export const GlobalContext = createContext()

const changeState = (state, action) => {
    const { type, payload } = action
    switch(type){
        case "LIKE" :
        return {
            ...state,
            likkedImages:[...state.likkedImages, payload],
        };
        case "UNELIKE" : 
        return{
            ...state,
            likkedImages:state.likkedImages.filter((image) =>image.id != payload),
        };
        default:
            return state;

    }
}

export function GlobalContextProvider({children}){
    const [state,dispatch] = useReducer(changeState, {
        likkedImages : []
    })    
    return (
        <GlobalContext.Provider value={{...state, dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}