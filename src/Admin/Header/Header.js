import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./AdminStyle.css";

function Header() {
  const history = useHistory();
  const [toggleSidebar, setToggleSidebar] = useState("");
  function handleClick() {
    setToggleSidebar("test");
  }
  function handleLogout() {
    localStorage.getItem("user") && localStorage.removeItem("user");
    localStorage.getItem("cart") && localStorage.removeItem("cart");
    localStorage.getItem("token") && localStorage.removeItem("token");
    history.push("/login");
  }
  return (
    <>
      <section class="dashboard">
        <section class="content">
          <section class={`side_bar ${toggleSidebar}`}>
            <a class="closebtn sidebar-btn">
              <i class="fas fa-times" onClick={() => setToggleSidebar("")}></i>
            </a>

            <div class="side_bar_logo">
              <span>Dashboard</span>
            </div>
            <div class="dashboard_buttons" id="change_active">
              <Link to="/order-history" class="btn">
                <span>Order History</span>
              </Link>
              <Link to="/all-users" class="btn">
                <span>All Users</span>
              </Link>
              <Link to="/add-product" class="btn">
                <span>Add Product</span>
              </Link>
              <Link to="/all-products" class="btn">
                <span>All Products</span>
              </Link>
              {/* 
              <Link to="/admin-raffle" class="btn">
                <span>Raffle Products</span>
              </Link>
              <Link to="/contact-message" class="btn">
                <span>Contact Messages</span>
              </Link> */}
              <Link onClick={handleLogout} class="btn">
                <span>Logout</span>
              </Link>
            </div>
          </section>

          <div class="admin_header-bar">
            <div class="sidebar-btn">
              <i class="fas fa-bars" onClick={handleClick}></i>
            </div>

            <div class="admin_page_logo">
              <Link>Jewellery</Link>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
export default Header;
