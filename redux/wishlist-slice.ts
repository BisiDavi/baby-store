import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { productType } from "@/types";

const initialState: { wishlist: productType[] } = { wishlist: [] };

const WishlistSlice = createSlice({
  name: "Wishlist",
  initialState,
  reducers: {
    addProductToWishlist(state, action: PayloadAction<productType>) {
      const { payload } = action;
      const isProductInWishlist = state.wishlist.filter(
        (item) => item.id === payload.id
      )[0];
      if (!isProductInWishlist) {
        state.wishlist = [payload, ...state.wishlist];
      } else {
        throw Error;
      }
    },
    removeProductFromWishlist(state, action: PayloadAction<string>) {
      const { payload } = action;
      if (state) {
        const productId = state.wishlist.findIndex(
          (item) => item.id === payload
        );
        state.wishlist.splice(productId, 1);
      }
    },
  },
});

export const { addProductToWishlist, removeProductFromWishlist } =
  WishlistSlice.actions;
export default WishlistSlice.reducer;
