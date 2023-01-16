import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import CartReducer from "@/redux/cart-slice";
import UIReducer from "@/redux/ui-slice";
import WishlistReducer from "@/redux/wishlist-slice";
import CheckoutReducer from "@/redux/checkout-slice";
import curencyReducer from "@/redux/currency-slice";

const reducers = combineReducers({
  cart: CartReducer,
  UI: UIReducer,
  wishlist: WishlistReducer,
  checkout: CheckoutReducer,
  currency: curencyReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["UI", "checkout"],
};

const RootReducer = persistReducer(persistConfig, reducers);

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
