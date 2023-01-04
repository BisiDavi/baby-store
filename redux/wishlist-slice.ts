import type { productType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: productType[] = [];

const WishlistSlice = createSlice({
  name: "Wishlist",
  initialState,
  reducers: {
    addProductToWishlist(state, action: PayloadAction<productType>) {
      const { payload } = action;
      state = [payload, ...state];
    },
    removeProductFromWishlist(state, action: PayloadAction<{ id: string }>) {
      const { payload } = action;
      if (state) {
        const productId = state.findIndex((item) => item.id === payload.id);
        state.splice(productId, 1);
      }
    },
  },
});

export const { addProductToWishlist, removeProductFromWishlist } =
  WishlistSlice.actions;
export default WishlistSlice.reducer;
