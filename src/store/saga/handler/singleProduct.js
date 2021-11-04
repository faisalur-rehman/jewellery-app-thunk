import { call, put } from "@redux-saga/core/effects";
import { getSingleProduct } from "../../../api/api";

export default function* handleSingleProduct(action) {
  console.log("axtion", action);
  try {
    const { data } = yield call(getSingleProduct, { id: action.payload });
    yield put({ type: "product/single", payload: data.product });
  } catch (error) {
    console.log(error.response);
  }
}
