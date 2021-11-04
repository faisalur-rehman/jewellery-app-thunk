import { getWishlistProducts, removeFromWishlist } from "../../api/api";

export default function wishlistSlice(state = [], action) {
  switch (action.type) {
    case "wishlist/add": {
      return action.payload;
    }
    case "wishlist/remove": {
      const products = state.filter(
        (product) => product._id !== action.payload
      );

      return products;
    }
    default:
      return state;
  }
}

export const fetchWishlist = async (dispatch) => {
  try {
    const { data } = await getWishlistProducts();
    dispatch({ type: "wishlist/add", payload: data.wishlists });
  } catch (error) {
    console.log(error.response);
  }
};

export const removeProductFromWishlist = (id) => async (dispatch) => {
  try {
    await removeFromWishlist({ id });
    dispatch({ type: "wishlist/remove", payload: id });
  } catch (error) {
    console.log(error.response);
  }
};
