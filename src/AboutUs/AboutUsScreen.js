import React from 'react';
import './AboutUs.css';
import {Link} from 'react-router-dom';

const AboutUsScreen = () => {
    return (
        <>
            <div class="aboutus-section">
    <div class="custom_container">
        <div class="aboutus_fields">
            <div class="aboutus_fields_data">
                <div class="aboutus">
                    <h2 class="aboutus-title">About Us</h2>
                    <p class="aboutus-text">Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                    <p class="aboutus-text">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem</p>
                    <Link class="aboutus-more" to="/aboutus">read more</Link>
                </div>
            </div>
            <div class="aboutus_fields_data">
               
            </div>
            <div class="aboutus_fields_data">
                <div class="aboutus_feature">
                    <div class="aboutus_feature-box">
                        
                            <div class="aboutus_feature-content">
                                <h4>Work with heart</h4>
                                <p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                            </div>
                    
                    </div>

                    <div class="aboutus_feature-box">
                        
                            <div class="aboutus_feature-content">
                                <h4>Reliable services</h4>
                                <p>Donec vitae sapien ut libero venenatis faucibu. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt</p>
                            </div>
                       
                    </div>

                    <div class="aboutus_feature-box">
                       
                            <div class="aboutus_feature-content">
                                <h4>Great support</h4>
                                <p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                            </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}

export default AboutUsScreen;
