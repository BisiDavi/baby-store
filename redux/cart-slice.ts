import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { cartType } from "@/types";

type initialStateType = {
  deliveryFee: number;
  cart: cartType[] | null;
};

const initialState: initialStateType = {
  cart: null,
  deliveryFee: 0,
};

const CartSlice = createSlice({
  name: "UI",
  initialState,
  reducers: {},
});

export const {} = CartSlice.actions;
export default CartSlice.reducer;
