import React, { useState } from "react";
import "./Categories.css";
import products1 from "../Images/Products1.png";
import { Link } from "react-router-dom";

const CategoriesScreen = ({ data }) => {
  const [products] = useState([
    {
      id: 1,
      name: "Necklaces And Rings",
      price: 400,
      Image: products1,
      description: "Lorem Ipsum is a dummy text that is mainly used by.",
    },
    {
      id: 2,
      name: "Necklaces And Rings",
      price: 35,
      Image: products1,
      description: "Lorem Ipsum is a dummy text that is mainly used by.",
    },
    {
      id: 3,
      name: "Necklaces And Rings",
      price: 220,
      Image: products1,
      description: "Lorem Ipsum is a dummy text that is mainly used by.",
    },
    {
      id: 4,
      name: "Necklaces And Rings",
      price: 70,
      Image: products1,
      description: "Lorem Ipsum is a dummy text that is mainly used by.",
    },
  ]);
  return (
    <>
      <section className="product_section">
        <div className="custom_container">
          <div className="our_product_header">
            <h3>Our Categories</h3>
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
            {products.map((product) => (
              <div className="product_card our_categories">
                <a>
                  <div className="figure">
                    <img src={product.Image} alt="Categories" />
                  </div>
                  <div className="single_category_detail">
                    <h5>{product.name}</h5>
                    <p>View the Collection</p>
                  </div>
                </a>
                <div className="our_category_hover">
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                  <Link to="/shop">View Shop</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoriesScreen;
