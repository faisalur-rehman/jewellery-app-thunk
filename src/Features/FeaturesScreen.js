import React from 'react'
import collection1 from '../Images/collection1.jpg';
import collection2 from '../Images/collection2.jpg';
import collection3 from '../Images/collection3.jpg';
import './Features.css';

const FeaturesScreen = () => {
    return (
        <>
          

<section class="features_section" id="features_section">
    <div class="custom_container">
      <div class="features_grid">
      
        <div class="features_card">
         <figure>
             <img src={collection1} alt="collection" alt="alt" />
             <figcaption>
                 <h4>Women's</h4>
                 <h4>Diamond Jewellery</h4>
             </figcaption>
        </figure>
        </div>
        <div class="features_card">
            <figure>
                <img src={collection2} alt="collection" />
                <figcaption>
                    <h4>Women's</h4>
                    <h4>Diamond Jewellery</h4>
                </figcaption>
           </figure>
           </div>
           <div class="features_card">
            <figure>
                <img src={collection3} alt="Collection" />
                <figcaption>
                    <h4>Women's</h4>
                    <h4>Diamond Jewellery</h4>
                </figcaption>
           </figure>
           </div>
  
      </div>
    </div>
  </section> 


  
        </>
    )
}

export default FeaturesScreen
