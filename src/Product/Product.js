import React from "react";
import ProductScreen from "./ProductScreen";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../store/features/products";
// import { allProducts } from "../store/features/products";

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getAllProducts);
    //eslint-disable-next-line
  }, []);
  return <>{products.length > 0 && <ProductScreen data={products} />}</>;
};

export default Product;
