import { getProducts } from "../../api/api";

export function allProducts() {
  return { type: "getProducts" };
}

const initialState = [];

export default function productSlice(state = initialState, action) {
  switch (action.type) {
    case "products/getAll":
      return action.payload;

    default:
      return state;
  }
}

export const getAllProducts = async (dispatch) => {
  try {
    const response = await getProducts();
    dispatch({ type: "products/getAll", payload: response.data.products });
  } catch (error) {
    console.log(error.response);
  }
};
