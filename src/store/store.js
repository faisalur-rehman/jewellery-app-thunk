import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import authSlice from "./features/auth";

import thunkMiddleware from "redux-thunk";
import productSlice from "./features/products";
import featuredProductsSlice from "./features/featuredProducts";
import specialProductSlice from "./features/specialProduct";
import singleProductSlice from "./features/singleProducts";
import wishlistSlice from "./features/wishlist";
import cartSlice from "./features/addToCart";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const rootReducer = combineReducers({
  auth: authSlice,
  products: productSlice,
  featured: featuredProductsSlice,
  special: specialProductSlice,
  single: singleProductSlice,
  wishlist: wishlistSlice,
  cart: cartSlice,
});

const store = createStore(rootReducer, composedEnhancer);
export default store;
