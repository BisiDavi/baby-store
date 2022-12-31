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
        const existingProduct = state.cart.items.filter(
          (item) => item.id === product.id
        )[0];
        state.cart = {
          ...state.cart,
          loading: {
            status: true,
            text: "product added to cart",
          },
        };
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
            loading: {
              status: false,
              text: "",
            },
          };
        }
      } else {
        state.cart = {
          userEmail,
          quantity: 1,
          amount: 0,
          items: [product],
          loading: {
            status: false,
            text: "",
          },
        };
      }
    },
    updateQuantity(
      state,
      action: PayloadAction<{ type: "add" | "minus"; id: string }>
    ) {
      const { type, id } = action.payload;

      if (state.cart) {
        state.cart = {
          ...state.cart,
          loading: {
            status: true,
            text: "product quantity updated",
          },
        };
        const productIndex = state.cart.items.findIndex(
          (item) => item.id === id
        );
        if (type === "add") {
          updateCartProductQuantity(state.cart, productIndex, "add");
        } else if (
          type === "minus" &&
          state.cart.items[productIndex].quantity > 1
        ) {
          updateCartProductQuantity(state.cart, productIndex, "minus");
        }
        const updatedCartQuantity = updateCartQuantity(state.cart);
        console.log("updatedCartQuantity", updatedCartQuantity);
        state.cart = {
          ...state.cart,
          ...updatedCartQuantity,
          loading: {
            status: false,
            text: "product quantity updated",
          },
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
          loading: {
            status: false,
            text: "product deleted",
          },
        };
      }
    },
  },
});

export const { addToCart, updateQuantity, deleteProduct } = CartSlice.actions;
export default CartSlice.reducer;
