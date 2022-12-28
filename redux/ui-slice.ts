import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { productType, UIType } from "@/types";

const initialState: UIType = {
  showSlideCart: false,
  previewProduct: {
    status: false,
    product: null,
  },
};

const UISlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    updateSlideCart(state) {
      state.showSlideCart = !state.showSlideCart;
    },
    updatePreviewProduct(
      state,
      action: PayloadAction<{ status: boolean; product: null | productType }>
    ) {
      state.previewProduct = action.payload;
    },
  },
});

export const { updateSlideCart } = UISlice.actions;
export default UISlice.reducer;
