import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type cartType = productCartType & {
  amount: number;
};

type initialStateType = {
  deliveryFee: number;
  cart: cartType[] | null;
};

const initialState: initialStateType = {
  cart: null,
  deliveryFee: 0,
};

const CartSlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    updateCartQuantity(
      state,
      action: PayloadAction<{ title: string; type: "inc" | "dec" }>
    ) {
      const { title, type } = action.payload;
      if (state.cart !== null) {
        const cartItemIndex = state.cart?.findIndex(
          (item) => item.title === title
        );
        if (type === "inc") {
          const cartItemIndex = state.cart.findIndex(
            (item) => item.title === title
          );
          state.cart[cartItemIndex].quantity += 1;
          state.cart[cartItemIndex].amount =
            state.cart[cartItemIndex].price *
            state.cart[cartItemIndex].quantity;
        } else if (type === "dec" && state.cart[cartItemIndex].quantity > 1) {
          state.cart[cartItemIndex].quantity -= 1;
          state.cart[cartItemIndex].amount =
            state.cart[cartItemIndex].price *
            state.cart[cartItemIndex].quantity;
        }
      }
    },
    addToCart(state, action: PayloadAction<productCartType>) {
      const { quantity, price, title } = action.payload;
      const cartData = {
        ...action.payload,
        amount: quantity * price,
      };
      if (state.cart === null) {
        state.cart = [cartData];
      } else if (state.cart !== null) {
        const productIndex = state.cart.findIndex(
          (item) => item.title === title
        );
        if (productIndex === -1) {
          state.cart = [...state.cart, cartData];
        } else {
          state.cart[productIndex].quantity += 1;
          state.cart[productIndex].amount =
            state.cart[productIndex].price * state.cart[productIndex].quantity;
        }
      }
    },
    removeCartItem(state, action: PayloadAction<{ title: string }>) {
      const { title } = action.payload;
      if (state.cart !== null) {
        const cartItemIndex = state.cart?.findIndex(
          (item) => item.title === title
        );
        const tempCart = state.cart;
        tempCart.splice(cartItemIndex, 1);
        state.cart = tempCart;
      }
    },
    resetCart(state) {
      state.cart = null;
    },
    updateDeliveryFee(state, action) {
      state.deliveryFee = action.payload;
    },
    resetDeliveryFee(state) {
      state.deliveryFee = 0;
    },
  },
});

export const {
  updateCartQuantity,
  removeCartItem,
  addToCart,
  resetCart,
  updateDeliveryFee,
  resetDeliveryFee,
} = CartSlice.actions;
export default CartSlice.reducer;
