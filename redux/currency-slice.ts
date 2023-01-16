import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { currencyType } from "@/types";

const initialState: currencyType = {
  currency: { name: "United States (USD)", value: "$", code: "USD" },
};

const currencySlice = createSlice({
  name: "Currency",
  initialState,
  reducers: {
    updateCurrency(state, action: PayloadAction<currencyType["currency"]>) {
      state.currency = action.payload;
    },
  },
});

export const { updateCurrency } = currencySlice.actions;
export default currencySlice.reducer;
