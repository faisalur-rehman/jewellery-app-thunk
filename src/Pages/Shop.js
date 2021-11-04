import React from 'react';
import CustomBanner from '../CustomBanner/CustomBanner';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Product from '../Product/Product'

const Shop = () => {
    return (
        <>
        <Navbar/>
        <CustomBanner pname="Shop"/>
        <Product/> 
        <Footer/> 
        </>
    )
}

export default Shop;
