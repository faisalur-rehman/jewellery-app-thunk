import React, { useEffect } from "react";
import useApi from "../hooks/useApi";
import SingleProductScreen from "./SingleProductScreen";
import * as api from "../api/api";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../store/features/singleProducts";
const initialValues = {
  quantity: 1,
  size: "",
  color: "",
};

const SingleProduct = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { request, data } = useApi(api.addToWishlist);

  const singleProduct = useSelector((state) => state.single);
  useEffect(() => {
    dispatch(fetchSingleProduct(id));
    //eslint-disable-next-line
  }, [id]);

  async function handleAddToWishlist(id) {
    try {
      await request({ product: id });
    } catch (_) {}
  }

  function handleSubmit({ formValues }) {
    //logic for adding items to cart
    let cartObj = {
      product: singleProduct._id,
      price: singleProduct.price,
      name: singleProduct.name,
      ...formValues,
      // ...singleProduct.data.product,
    };
    let prevCart = JSON.parse(localStorage.getItem("cart"));
    if (prevCart && prevCart.length > 0) {
      let found = prevCart.findIndex(
        (element) => element.product._id === singleProduct._id
      );
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
      {singleProduct && (
        <SingleProductScreen
          handleSubmit={handleSubmit}
          initialValues={initialValues}
          handleAddToWishlist={handleAddToWishlist}
          data={singleProduct}
          wishListData={data}
        />
      )}
    </>
  );
};

export default SingleProduct;
