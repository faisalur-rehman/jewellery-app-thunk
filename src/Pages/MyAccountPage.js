import React from "react";
import AccountInfo from "../Account Info/AccountInfo";
import CustomBanner from "../CustomBanner/CustomBanner";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const MyAccountPage = () => {
  return (
    <>
      <Navbar />
      <CustomBanner pname="My Account" />
      <AccountInfo />
      <Footer />
    </>
  );
};

export default MyAccountPage;
