import { featuredProduct } from "../../api/api";

export function getFeatured() {
  return {
    type: "featured",
  };
}

const initialState = [];

export default function featuredProductsSlice(state = initialState, action) {
  switch (action.type) {
    case "products/featured": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export const fetchFeaturedProducts = async (dispatch) => {
  try {
    const { data } = await featuredProduct();
    dispatch({ type: "products/featured", payload: data.products });
  } catch (error) {
    console.log(error.response);
  }
};
