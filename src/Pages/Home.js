import React from "react";
import Banner from "../Banner/Banner";
import Discount from "../Discount/Discount";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import PopularProducts from "../PopularProducts/PopularProducts";
import Product from "../Product/Product";
import SpecialProduct from "../SpecialProduct/SpecialProduct";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Features />
      <Product />
      <SpecialProduct />
      {/* <Categories/> */}
      <Discount />
      <PopularProducts />
      <Footer />
    </>
  );
};

export default Home;
