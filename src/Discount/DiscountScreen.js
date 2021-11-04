import React from 'react';
import './Discount.css';
import {Link} from 'react-router-dom';

const DiscountScreen = () => {
    return (
        <>
          
<section class="discount_section">
  <div class="custom_container">
    <div class="discount_section_data">
        <h5>The ultimate in luxury and style.</h5>
        <small>Flat 15% off on Diamond Jewellery</small>
        <Link to="/shopnow">shop now</Link>
    </div>
  </div>
</section>  
        </>
    )
}

export default DiscountScreen
