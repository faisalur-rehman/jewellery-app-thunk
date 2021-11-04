import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CustomBanner from "../CustomBanner/CustomBanner";
import SingleProduct from "../SingleProduct/SingleProduct";
import PopularProducts from "../PopularProducts/PopularProducts";

const SingleProductPage = () => {
  return (
    <>
      <Navbar />
      <CustomBanner pname="Single Product" />
      <SingleProduct />
      <PopularProducts />
      <Footer />
    </>
  );
};

export default SingleProductPage;
