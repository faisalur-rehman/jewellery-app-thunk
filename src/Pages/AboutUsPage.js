import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import CustomBanner from '../CustomBanner/CustomBanner';
import AboutUs from '../AboutUs/AboutUs';



const AboutUsPage = () => {
    return (
        <>
         <Navbar/>
         <CustomBanner pname="About Us"/>
         <AboutUs/>
         <Footer/>   
        </>
    )
}

export default AboutUsPage
