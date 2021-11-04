import { call, put } from "@redux-saga/core/effects";
import { featuredProduct } from "../../../api/api";

export default function* handleFeaturedProducts() {
  try {
    const { data } = yield call(featuredProduct);
    yield put({ type: "products/featured", payload: data.products });
  } catch (error) {
    console.log(error.response);
  }
}
