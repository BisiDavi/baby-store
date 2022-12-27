import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { cartProductType, cartType } from "@/types";

type initialStateType = {
  deliveryFee: number;
  cart: cartType | null;
};

const initialState: initialStateType = {
  cart: null,
  deliveryFee: 0,
};

const CartSlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    addToCart(
      state,
      action: PayloadAction<{ product: cartProductType; userEmail: string }>
    ) {
      const { product, userEmail } = action.payload;
      if (state.cart) {
        const cartItem = [...state.cart.items, product];
        let amount = 0;
        state.cart.items.map((item) => {
          const itemAmount = item.price * item.quantity;
          amount += itemAmount;
        });
        state.cart = {
          ...state.cart,
          items: cartItem,
          quantity: state.cart.items.length,
          amount,
        };
      } else {
        state.cart = { userEmail, quantity: 0, amount: 0, items: [product] };
      }
    },
  },
});

export const {} = CartSlice.actions;
export default CartSlice.reducer;
