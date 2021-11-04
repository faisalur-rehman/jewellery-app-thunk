import React, { useEffect } from "react";
import SpecialProductScreen from "./SpecialProductScreen";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchSpecialProduct } from "../store/features/specialProduct";

const SpecialProduct = () => {
  const special = useSelector((state) => state.special);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSpecialProduct);
    //eslint-disable-next-line
  }, []);
  return <>{special && <SpecialProductScreen data={special} />}</>;
};

export default SpecialProduct;
