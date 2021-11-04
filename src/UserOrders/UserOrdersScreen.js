import React from "react";
import products from "../Images/Products1.png";

const UserOrdersScreen = ({ data }) => {
  console.log("orders", data);
  return (
    <section class="product_wishlist_section">
      <div class="custom_container">
        <div class="product_wishlist_main">
          <div class="product_wishlist_header">
            <p>PRODUCT</p>
            <p>PRICE</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
          {data &&
            (data.orders.length > 0 ? (
              data.orders.map((wish) => (
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
                    <div class="wishlist_product_price">
                      {" "}
                      <p>{wish.quantity}</p>
                    </div>
                    <div class="wishlist_product_price">
                      {" "}
                      <p>${wish.quantity * wish.product.price}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No product in Order History</p>
            ))}
        </div>
      </div>
    </section>
  );
};

export default UserOrdersScreen;
