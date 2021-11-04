import { call, put } from "@redux-saga/core/effects";
import { getProducts } from "../../../api/api";

export default function* handleAllProducts(action) {
  try {
    const { data } = yield call(getProducts);

    yield put({ type: "products/getAll", payload: data.products });
  } catch (error) {
    console.log(error.response);
  }
}
