import { loginUser } from "../../api/api";

export const userLogin = (data) => ({ type: "userLogin", payload: data });

const initialState = {};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "login": {
      return {
        ...action.payload,
      };
    }

    default:
      return state;
  }
}

export const login = (data) => async (dispatch) => {
  try {
    const response = await loginUser(data);
    dispatch({ type: "login", payload: response.data });
    localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.setItem("token", response.data.user.token);
  } catch (error) {
    data.setError(error.response.data.message);
  }
};
