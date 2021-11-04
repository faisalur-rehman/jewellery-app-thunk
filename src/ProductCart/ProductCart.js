import React, { useEffect } from "react";
import { useState } from "react";
import ProductCartScreen from "./ProductCartScreen";
import * as api from "../api/api";
import useApi from "../hooks/useApi";

const ProductCart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const { request, data } = useApi(api.order);

  useEffect(() => {
    function fetchData() {
      localStorage.getItem("cart") &&
        setCartProducts(JSON.parse(localStorage.getItem("cart")));
    }
    fetchData();
  }, []);

  function removeCartProduct(id) {
    console.log("id", id);
    setCartProducts([
      ...cartProducts.filter((product) => product.product !== id),
    ]);
    localStorage.setItem(
      "cart",
      JSON.stringify(cartProducts.filter((product) => product.product !== id))
    );
  }
  async function handleOrder() {
    try {
      await request({ orders: [...cartProducts] });
    } catch (_) {}
  }

  return (
    <>
      <ProductCartScreen
        cartProducts={cartProducts}
        removeCartProduct={removeCartProduct}
        handleOrder={handleOrder}
        data={data}
      />
    </>
  );
};

export default ProductCart;
