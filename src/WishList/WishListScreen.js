/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./WishList.css";
import products from "../Images/Products1.png";

const WishListScreen = ({ data, handleRemove, addToCart }) => {
  return (
    <>
      <section class="product_wishlist_section">
        <div class="custom_container">
          <div class="product_wishlist_main">
            <div class="product_wishlist_header">
              <p>PRODUCT</p>
              <p>PRICE</p>
              <p>Add to Cart</p>
              <p>Remove</p>
            </div>
            {data.length > 0 ? (
              data.map((wish) => (
                <div class="product_wishlist_data_main">
                  <div class="product_wishlist_data">
                    <div class="wishlist_product_data">
                      <div class="wishlist_product_img">
                        <img src={products} alt="Img" />
                      </div>
                      <span>{wish.product.name}</span>
                    </div>
                    <div class="wishlist_product_price">
                      {" "}
                      <p>${wish.product.price}</p>
                    </div>
                    <div class="remove_wishlist_product">
                      <a onClick={() => addToCart(wish)}>Add to Cart</a>
                    </div>
                    <div class="remove_wishlist_product">
                      <a onClick={() => handleRemove(wish._id)}>Remove</a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No product in Wishlist</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default WishListScreen;
