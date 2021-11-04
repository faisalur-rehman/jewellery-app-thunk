import React, { useEffect } from "react";
import WishListScreen from "./WishListScreen";

import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  fetchWishlist,
  removeProductFromWishlist,
} from "../store/features/wishlist";

const WishList = () => {
  const history = useHistory();
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWishlist);
    //eslint-disable-next-line
  }, []);

  async function handleRemove(id) {
    dispatch(removeProductFromWishlist(id));
  }
  function addToCart(prod) {
    //logic for adding items to cart
    let prevCart = JSON.parse(localStorage.getItem("cart"));
    let cartObj = {
      product: prod._id,
      price: prod.product.price,
      name: prod.product.name,
      quantity: 1,
      // ...singleProduct.data.product,
    };

    if (prevCart && prevCart.length > 0) {
      let found = prevCart.findIndex((element) => element.product === prod._id);
      if (+found === -1) {
        localStorage.setItem("cart", JSON.stringify([...prevCart, cartObj]));
      } else {
        prevCart[found] = cartObj;

        localStorage.setItem("cart", JSON.stringify([...prevCart]));
      }
    } else {
      localStorage.setItem("cart", JSON.stringify([cartObj]));
    }
    history.push("/mycart");
  }

  return (
    <>
      {wishlist.length > 0 && (
        <WishListScreen
          data={wishlist}
          handleRemove={handleRemove}
          addToCart={addToCart}
        />
      )}
    </>
  );
};

export default WishList;
