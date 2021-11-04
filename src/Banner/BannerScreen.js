import React from 'react'
import './Banner.css';
import slider1 from '../Images/slider1.jpg';
import slider2 from '../Images/slider2.jpg';
import slider3 from '../Images/slider3.jpg';
import {Link} from 'react-router-dom';


const BannerScreen = () => {
    return (
        <>
 
<section className="banner">

<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src={slider1} alt="alt" />
        <div className="carousel-caption slider_2_text">
            <h2 className="slide-1">Designer Jewellery</h2>
            <span>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,<br/>lorem quis bibendum auctor elit </span>
            <Link to="/shop" className="m-t-20">Shop Now</Link>
          </div>
      </div>
     
      <div className="carousel-item">
        <img className="d-block w-100" src={slider2} alt="alt"/>
        <div className="carousel-caption slider_2_text">
            <h2 className="slide-1">Designer Jewellery</h2>
            <span>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,<br/>lorem quis bibendum auctor elit </span>
            <Link to="/shop" className="m-t-20">Shop Now</Link>
          </div>
      </div>
      
      <div className="carousel-item">
        <img className="d-block w-100" src={slider3} alt="alt"/>
        <div className="carousel-caption slider_2_text">
            <h2 className="slide-1">Designer Jewellery</h2>
           <span>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,<br/>lorem quis bibendum auctor elit </span>
            <Link to="/shop" className="m-t-20">Shop Now</Link>
          </div>
      </div>
      
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>

</section>
        </>
    )
}

export default BannerScreen
