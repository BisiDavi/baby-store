import { createSlice } from "@reduxjs/toolkit";

const UISlice = createSlice({
  name: "UI",
  initialState: {
    showSlideCart: false,
  },
  reducers: {
    updateSlideCart(state) {
      state.showSlideCart = !state.showSlideCart;
    },
  },
});

export const { updateSlideCart } = UISlice.actions;
export default UISlice.reducer;
