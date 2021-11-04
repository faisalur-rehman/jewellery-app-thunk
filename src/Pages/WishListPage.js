import React from 'react'
import CustomBanner from '../CustomBanner/CustomBanner';
import Navbar from '../Navbar/Navbar'
import WishList from '../WishList/WishList';
import PopularProducts from '../PopularProducts/PopularProducts';
import Footer from '../Footer/Footer';

const WishListPage = () => {
    return (
        <>

        <Navbar/>
        <CustomBanner pname="Wish List"/>
        <WishList/>  
        <PopularProducts/> 
        <Footer/> 
        </>
    )
}

export default WishListPage
