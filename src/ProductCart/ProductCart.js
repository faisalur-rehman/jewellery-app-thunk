import React from "react";
import ProductCartScreen from "./ProductCartScreen";
import * as api from "../api/api";
import useApi from "../hooks/useApi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const ProductCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { request, data } = useApi(api.order);

  function removeCartProduct(id) {
    dispatch({ type: "cart/removeProduct", payload: id });
  }
  async function handleOrder() {
    try {
      await request({ orders: cart.products });
    } catch (_) {}
  }

  return (
    <>
      <ProductCartScreen
        cart={cart}
        removeCartProduct={removeCartProduct}
        handleOrder={handleOrder}
        data={data}
      />
    </>
  );
};

export default ProductCart;
