import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ReadMe from '../ReadMe/ReadMe';

const ReadMePage = () => {
    return (
        <>
        <section className="readme_page_body">
          <Navbar/>     
          <ReadMe/>
          <Footer/> 

          </section>
         
        </>
    )
}

export default ReadMePage;
