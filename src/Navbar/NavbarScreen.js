import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Images/menu-logo.png";
import { Link } from "react-router-dom";

const NavbarScreen = ({ handleLogout }) => {
  const [state, setState] = useState("");
  return (
    <>
      <header>
        <div className="custom_container">
          <div className="header_bar">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="alt" />
              </Link>
            </div>
            <button className="nav_btn open_close_nav" type="button">
              <i
                className="fas fa-bars"
                onClick={() => setState("responsive_bar")}
              ></i>
            </button>
            <div className="nav_bar">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                {localStorage.getItem("user") && (
                  <>
                    <li>
                      <Link to="/mycart">My Cart</Link>
                    </li>
                    <li>
                      <Link to="/wishlist">Wishlist</Link>
                    </li>
                  </>
                )}
                <li>
                  <Link to="/aboutus">About Us</Link>
                </li>
                <li>
                  <Link to="contactus">Contact us</Link>
                </li>
              </ul>
            </div>
            <div className="call_us">
              {/* <span className="searchbar_btn">
                <Link to="#qq">
                  <i className="fas fa-search"></i>
                  <input
                    className="searchbar"
                    type="text"
                    placeholder="search"
                  />
                </Link>
              </span> */}
              <span className="account_btn_hover">
                <Link to="#jddj" className="account_icon">
                  <i className="fas fa-user-friends"></i>
                </Link>
                <div className="account_btn">
                  {localStorage.getItem("user") && (
                    <Link to="/wishlist">My Wishlist</Link>
                  )}
                  {localStorage.getItem("user") ? (
                    <>
                      <Link onClick={handleLogout}>Logout</Link>
                      <Link to="/myaccount">My Account</Link>
                    </>
                  ) : (
                    <Link to="/login">Sign in</Link>
                  )}
                </div>
              </span>

              <span>
                <Link to="/mycart">
                  <i className="fas fa-shopping-cart"></i>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </header>

      <section className={`responsive_nav_bar ${state}`}>
        <div className="cancle_nav">
          <Link className="open_close_nav">
            <i className="fas fa-times" onClick={() => setState("")}></i>
          </Link>
        </div>
        <div className="responsive_call_us">
          {/* <span><i className="fas fa-phone-volume"></i></span>
        <small>Call Now:</small>
        <Link to="#">823</Link>  */}
          {/* <span className="searchbar_btn">
            <Link to="#">
              <i className="fas fa-search"></i>
              <input className="searchbar" type="text" placeholder="search" />
            </Link>
          </span> */}
          <span className="account_btn_hover">
            <Link to="#" className="account_icon">
              <i className="fas fa-user-friends"></i>
            </Link>
            <div className="account_btn">
              {localStorage.getItem("token") && (
                <Link to="/wishlist">My Wishlist</Link>
              )}
              {localStorage.getItem("token") ? (
                <>
                  <Link onClick={handleLogout}>Logout</Link>
                  <Link to="/myaccount">My Account</Link>
                </>
              ) : (
                <Link to="/login">Sign in</Link>
              )}
            </div>
          </span>

          {localStorage.getItem("token") ? (
            <span className="shoping_cart_icon">
              <Link to="/mycart">
                <i className="fas fa-shopping-cart"></i>
              </Link>
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="responsive_nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            {localStorage.getItem("token") && (
              <>
                <li>
                  <Link to="/mycart">My Cart</Link>
                </li>
                <li>
                  <Link to="/wishlist">Wishlist</Link>
                </li>
              </>
            )}
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/contactus">Contact us</Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default NavbarScreen;
