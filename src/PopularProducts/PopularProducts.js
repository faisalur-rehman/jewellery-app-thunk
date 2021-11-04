import React, { useEffect } from "react";
import PopularProductsScreen from "./PopularProductsScreen";
import { useSelector, useDispatch } from "react-redux";
import { fetchFeaturedProducts } from "../store/features/featuredProducts";

const PopularProducts = () => {
  const featured = useSelector((state) => state.featured);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFeaturedProducts);
    //eslint-disable-next-line
  }, []);
  return <>{featured && <PopularProductsScreen data={featured} />}</>;
};

export default PopularProducts;
