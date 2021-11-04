import React from "react";
import "./ProductCard.css";
import products from "../Images/Products1.png";
import { Link } from "react-router-dom";

const ProductCartScreen = ({ cart, removeCartProduct, handleOrder, data }) => {
  return (
    <>
      <section className="product_cart_section">
        <div className="custom_container">
          <div className="product_cart_main">
            <div className="product_cart_header">
              <p>PRODUCT</p>
              <p>PRICE</p>
              <p>QUANTITY</p>
              <p>TOTAL</p>
              <p className="hide_cart_field">STATUS</p>
            </div>
            <div className="product_cart_data_main">
              {cart ? (
                cart.products.map((prod) => (
                  <div className="product_cart_data">
                    <div className="cart_product_data">
                      <div className="cart_product_img">
                        <img src={products} alt="img" />
                      </div>
                      <span>{prod.name}</span>
                    </div>
                    <div className="cart_product_price">
                      {" "}
                      <p>${prod.price}</p>
                    </div>
                    <div className="cart_product_quantity">{prod.quantity}</div>
                    <div className="cart_product_total_price">
                      {" "}
                      <p>${+prod.quantity * prod.price}</p>
                    </div>
                    <div className="remove_cart_product">
                      <Link onClick={() => removeCartProduct(prod.productId)}>
                        Remove
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p>No product in the cart</p>
              )}
            </div>
          </div>

          <div className="total_price_box">
            <h2>Cart Totals</h2>
            <div className="cart_price_box_main">
              <div className="product_shipping">
                <span>Shipping</span>
                <p>Free Shipping</p>
              </div>
              <div className="product_shipping">
                <span>Total Order</span>
                <p>${cart.total}</p>
              </div>
            </div>
            {data && data.orders && <p>Order Placed Successfully</p>}
            <div className="cart_checkout_btn">
              <button
                onClick={handleOrder}
                disabled={cart.products.length <= 0}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCartScreen;
