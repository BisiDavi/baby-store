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
  name: "Cart",
  initialState,
  reducers: {
    addToCart(
      state,
      action: PayloadAction<{ product: cartProductType; userEmail: string }>
    ) {
      const { product, userEmail } = action.payload;
      if (state.cart) {
        const existingProduct = state.cart.items.filter(
          (item) => item.id === product.id
        )[0];
        if (existingProduct) {
          const productIndex = state.cart.items.findIndex(
            (item) => item.id === product.id
          );
          state.cart.items[productIndex] = {
            ...state.cart.items[productIndex],
            quantity: state.cart.items[productIndex].quantity + 1,
          };
        } else {
          const cartItem = [...state.cart.items, product];
          let amount = 0;
          state.cart.items.map((item) => {
            const itemAmount = item.price * item.quantity;
            amount += itemAmount;
          });
          state.cart = {
            ...state.cart,
            items: cartItem,
            quantity: state.cart.items.length + 1,
            amount,
          };
        }
      } else {
        state.cart = { userEmail, quantity: 1, amount: 0, items: [product] };
      }
    },
    updateQuantity(state, action) {},
  },
});

export const { addToCart } = CartSlice.actions;
export default CartSlice.reducer;
