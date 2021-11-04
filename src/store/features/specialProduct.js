import { getPopularItem } from "../../api/api";

export function specialProduct() {
  return { type: "specialProduct" };
}

export default function specialProductSlice(state = {}, action) {
  switch (action.type) {
    case "product/special":
      return action.payload;

    default:
      return state;
  }
}

export const fetchSpecialProduct = async (dispatch) => {
  try {
    const { data } = await getPopularItem();
    dispatch({ type: "product/special", payload: data.product });
  } catch (error) {
    console.log(error.response);
  }
};
