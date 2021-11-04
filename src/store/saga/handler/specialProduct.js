import { call, put } from "@redux-saga/core/effects";
import { getPopularItems } from "../../../api/api";

export default function* handleSpecialProduct(action) {
  try {
    const { data } = yield call(getPopularItems);
    yield put({ type: "product/special", payload: data.product });
  } catch (error) {
    console.log(error.response);
  }
}
