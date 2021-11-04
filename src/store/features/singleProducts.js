import { getSingleProduct } from "../../api/api";

export function single(id) {
  return {
    type: "singleProduct",
    payload: id,
  };
}

export default function singleProductSlice(state = {}, action) {
  switch (action.type) {
    case "product/single":
      return action.payload;
    default:
      return state;
  }
}

export const fetchSingleProduct = (id) => async (dispatch) => {
  try {
    const { data } = await getSingleProduct({ id });
    dispatch({ type: "product/single", payload: data.product });
  } catch (error) {
    console.log(error.response);
  }
};
