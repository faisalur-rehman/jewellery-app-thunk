import React, { useState } from "react";
import "./Product.css";
import products1 from "../Images/Products1.png";
import { Link } from "react-router-dom";

const ProductScreen = ({ data }) => {
  return (
    <>
      <section className="product_section">
        <div className="custom_container">
          <div className="our_product_header">
            <h3>Our Products</h3>
            <ul>
              <li>
                <span>
                  <i className="far fa-gem"></i>
                </span>
              </li>
              <li>
                <span>
                  <i className="far fa-gem"></i>
                </span>
              </li>
              <li>
                <span>
                  <i className="far fa-gem"></i>
                </span>
              </li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet
              <br />
              consectetueradipiscing elit, sed diam nonummy nibh
            </p>
          </div>
          <div className="product_grid">
            {data.map((product) => (
              <div className="product_card">
                <Link to={`/singleproduct/${product._id}`}>
                  <div className="figure">
                    <img src={products1} />
                  </div>
                  <div className="product_detail">
                    <h5>{product.name}</h5>
                    <span>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </span>
                    <p>${product.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductScreen;
