import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { checkoutType } from "@/types";

type initialStateType = { checkoutDetails: null | checkoutType };

const initialState: initialStateType = {
  checkoutDetails: null,
};

const CheckoutSlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    updateCheckoutDetails(state, action: PayloadAction<checkoutType>) {
      state.checkoutDetails = action.payload;
    },
  },
});

export const { updateCheckoutDetails } = CheckoutSlice.actions;
export default CheckoutSlice.reducer;
