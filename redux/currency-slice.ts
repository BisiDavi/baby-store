import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type currencyType = {
  currency: "usd" | "eur" | "ngn";
};

const initialState: currencyType = {
  currency: "usd",
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
