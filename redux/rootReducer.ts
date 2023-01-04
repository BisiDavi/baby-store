import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import CartReducer from "@/redux/cart-slice";
import UIReducer from "@/redux/ui-slice";
import WishlistReducer from "@/redux/wishlist-slice";

const reducers = combineReducers({
  cart: CartReducer,
  UI: UIReducer,
  wishlist: WishlistReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["UI"],
};

const RootReducer = persistReducer(persistConfig, reducers);

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
