import React from 'react';
import Navbar from '../Navbar/Navbar';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import CustomBanner from '../CustomBanner/CustomBanner';

const ContactUsPage = () => {
    return (
        <>
         <Navbar/>
         <CustomBanner pname="Contact Us"/>
         <ContactUs/>  
         <Footer/> 
        </>
    )
}

export default ContactUsPage
