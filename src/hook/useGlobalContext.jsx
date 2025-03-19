import { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "LIKE":
      return { ...state, likedImages: [...state.likedImages, action.payload] };
    case "UNLIKE":
      return {
        ...state,
        likedImages: state.likedImages.filter(img => img.id !== action.payload),
      };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    likedImages: [],
  });

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
