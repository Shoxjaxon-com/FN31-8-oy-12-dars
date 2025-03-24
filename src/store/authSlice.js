import { createSlice } from "@reduxjs/toolkit";

// Boshlang'ich holat
const initialState = {
  isAuthenticated: !!localStorage.getItem("userToken"), // Token bor yoki yo'qligini tekshiramiz
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      localStorage.setItem("userToken", action.payload); // Tokenni saqlash
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem("userToken"); // Tokenni o‘chirish
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
