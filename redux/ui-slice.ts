import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { productType, UIType } from "@/types";

const initialState: UIType = {
  showSlideCart: false,
  previewProduct: {
    status: false,
    product: null,
  },
  authModal: false,
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
    updateAuthModal(state) {
      state.authModal = !state.authModal;
    },
    closeAuthModal(state) {
      state.authModal = false;
    },
  },
});

export const {
  updateSlideCart,
  updatePreviewProduct,
  updateAuthModal,
  closeAuthModal,
} = UISlice.actions;
export default UISlice.reducer;
