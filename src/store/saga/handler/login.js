import { call, put } from "@redux-saga/core/effects";
import { loginUser } from "../../../api/api";

export default function* handleLogin(action) {
  // console.log("action", action);
  try {
    const { data } = yield call(loginUser, action.payload);
    action.payload.setError("");
    yield put({ type: "login", payload: data.user });
    localStorage.setItem("user", JSON.stringify(data.user));
  } catch (error) {
    action.payload.setError(error.response.data.message);
  }
}
