import { takeLatest } from "redux-saga/effects";
import handleFeaturedProducts from "./handler/featuredProducts";
import handleLogin from "./handler/login";
import handleAllProducts from "./handler/products";
import handleSingleProduct from "./handler/singleProduct";
import handleSpecialProduct from "./handler/specialProduct.js";

export default function* rootSaga() {
  yield takeLatest("userLogin", handleLogin);
  yield takeLatest("getProducts", handleAllProducts);
  yield takeLatest("featured", handleFeaturedProducts);
  yield takeLatest("specialProduct", handleSpecialProduct);
  yield takeLatest("singleProduct", handleSingleProduct);
}
