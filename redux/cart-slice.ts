import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  updateCartProductQuantity,
  updateCartQuantity,
} from "@/utils/store-cart";
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
        const existingProductIndex = state.cart.items.filter(
          (item) => item.id === product.id
        )[0];
        if (existingProductIndex) {
          const productIndex = state.cart.items.findIndex(
            (item) => item.id === product.id
          );
          state.cart.items[productIndex] = {
            ...state.cart.items[productIndex],
            quantity: state.cart.items[productIndex].quantity + 1,
          };
          const updatedCartQuantity = updateCartQuantity(state.cart);
          state.cart = {
            ...state.cart,
            ...updatedCartQuantity,
          };
        } else {
          const cartItem = [...state.cart.items, product];
          state.cart.items = cartItem;
          const updatedCartQuantity = updateCartQuantity(state.cart);
          state.cart = {
            ...state.cart,
            ...updatedCartQuantity,
            items: cartItem,
          };
        }
      } else {
        state.cart = {
          userEmail,
          quantity: 1,
          amount: 0,
          items: [product],
        };
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
        if (state.cart.items[productIndex].quantity <= 1) {
        }
        if (type === "add") {
          updateCartProductQuantity(state.cart, productIndex, "add");
        } else if (
          type === "minus" &&
          state.cart.items[productIndex].quantity > 1
        ) {
          updateCartProductQuantity(state.cart, productIndex, "minus");
        } else if (
          type === "minus" &&
          state.cart.items[productIndex].quantity <= 1
        ) {
          throw Error;
        }
        const updatedCartQuantity = updateCartQuantity(state.cart);
        state.cart = {
          ...state.cart,
          ...updatedCartQuantity,
        };
      }
    },
    deleteProduct(state, action: PayloadAction<{ id: string }>) {
      const { id } = action.payload;
      if (state.cart) {
        const productId = state.cart?.items.findIndex((item) => item.id === id);
        state.cart.items.splice(productId, 1);
        const updateCart = updateCartQuantity(state.cart);
        state.cart = {
          ...state.cart,
          ...updateCart,
        };
      }
    },
  },
});

export const { addToCart, updateQuantity, deleteProduct } = CartSlice.actions;
export default CartSlice.reducer;
