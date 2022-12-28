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
          let cartQuantity = 0;
          state.cart.items.map((item) => {
            const itemAmount = item.price * item.quantity;
            amount += itemAmount;
            cartQuantity += item.quantity;
          });
          state.cart = {
            ...state.cart,
            items: cartItem,
            quantity: cartQuantity,
            amount,
          };
        }
      } else {
        state.cart = { userEmail, quantity: 1, amount: 0, items: [product] };
      }
    },
    updateQuantity(
      state,
      action: PayloadAction<{ type: "add" | "minus"; id: string }>
    ) {
      const { type, id } = action.payload;

      if (state.cart) {
        const productIndex = state.cart.items.findIndex(
          (item) => item.id === id
        );
        if (type === "add") {
          state.cart.items[productIndex] = {
            ...state.cart.items[productIndex],
            quantity: state.cart.items[productIndex].quantity + 1,
          };
        } else if (type === "minus") {
          state.cart.items[productIndex] = {
            ...state.cart.items[productIndex],
            quantity: state.cart.items[productIndex].quantity - 1,
          };
        }
      }
    },
  },
});

export const { addToCart, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
