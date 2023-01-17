import { createSlice } from "@reduxjs/toolkit";

type authType = {
  auth: {
    email: string;
    name: string;
  } | null;
};

const initialState: authType = {
  auth: null,
};

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    updateAuth(state, action) {
      state.auth = action.payload;
    },
  },
});

export const { updateAuth } = AuthSlice.actions;
export default AuthSlice.reducer;
