import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import CustomBanner from "../CustomBanner/CustomBanner";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ProductCart from "../ProductCart/ProductCart";
const MyCart = () => {
  const history = useHistory();
  !localStorage.getItem("user") && history.push("/login");
  !localStorage.getItem("user") && window.location.reload();
  useEffect(() => {
    !localStorage.getItem("user") && history.push("/login");
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <Navbar />
      <CustomBanner pname="My Cart" />
      <ProductCart />
      <Footer />
    </>
  );
};

export default MyCart;
