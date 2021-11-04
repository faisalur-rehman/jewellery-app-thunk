import React from 'react'
import './Footer.css';
import {Link} from 'react-router-dom';

const FooterScreen = () => {
    return (
        <>

<footer>
    <div className="footer-main-section">
        <div className="custom_container">

           <div className="footer_data">
            <div className="footer-section1">
                <h4 className="footer-head-line">About us</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has
                    been the industry.</p>
                <ul className="text-box">
                    <li>
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        <span>hello@gmail.com</span>
                    </li>
                    <li>
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <span>P: 3333 222 1111</span>
                    </li>
                    <li>
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        <span> 99 Barnard St States - GA 22222 </span>
                    </li>
                </ul>
            </div>

            <div className="footer-section2">
                <h4 className="footer-head-line">Information</h4>
                <ul className="footer-box2 pad-top15">
                    <li><Link to="/aboutus">About Us</Link></li>
                    {/* <li><Link to="/customer">Customer Service</Link></li> */}
                    <li><Link to="/readme">Privacy Policy</Link></li>
                    {/* <li><Link to="/sitemap">Site Map</Link></li> */}
                    <li><Link to="/">Advanced Search</Link></li>
                    <li><Link to="/contactus">Contact Us</Link></li>
                </ul>
            </div>

            <div className="footer-section2">
                <h4 className="footer-head-line">My Account</h4>
                <ul className="footer-box2 pad-top15">
                    <li><Link to="/login">Sign In</Link></li>
                    <li><Link to="/mycart">View Cart</Link></li>
                    <li><Link to="/wishlist">My Wishlist</Link></li>
                    <li><Link to="/readme">Private Policy</Link></li>
                    <li><Link to="/contactus">Help</Link></li>
                </ul>
            </div>
            <div className="footer-section1">
                <h4 className="footer-head-line">Newsletter</h4>
                <p>Sign up for our mailing list to get latest updates and offers.</p>
                <div className="search-box-1 mar-bottom15 newsletter_mail">
                    <input type="text" className="search_terms" name="search" placeholder="Email address" />
                    <button className="button-style" type="submit" value=""><i className="fa fa-paper-plane"
                            aria-hidden="true"></i></button>
                </div>
                <p>We respect your privacy</p>
                <div className="footer_social_icon">
                    <Link to="/sj"><i className="fab fa-facebook-f"></i></Link>
                    <Link to="/sjsj"><i className="fab fa-twitter"></i></Link>
                    <Link to="/sjsj"><i className="fab fa-instagram"></i></Link>
                </div>
            </div>
           </div> 

        </div>
        <div className="footer-bottom-bar pad-top-bottom25">
            <p>Copyright © 2021 <span className="footer-text"></span> All Rights
                Reserved. Designed by <span className="footer-text"><Link to="/cnhdc">9TH DIMENSION</Link></span>
            </p>
        </div>
    </div>
</footer>
        </>
    )
}

export default FooterScreen
