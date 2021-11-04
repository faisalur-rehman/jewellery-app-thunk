import React from 'react'
import './CustomBanner.css';
import {Link} from 'react-router-dom';

const CustomBannerScreen = (props) => {
    return (
        <>
  <section class="custom_banner">
       
       <div class="custom_banner_header">  
           <h3>{props.pagename}</h3>
           <ul>
               <li><span><i class="far fa-gem"></i></span></li>
               <li><span><i class="far fa-gem"></i></span></li>
               <li><span><i class="far fa-gem"></i></span></li>
           </ul>
           <div class="page_navigation"><Link to="/">Home</Link><span></span><p>{props.pagename}</p></div>
           </div>
   
   </section>
 
        </>
    )
}

export default CustomBannerScreen
