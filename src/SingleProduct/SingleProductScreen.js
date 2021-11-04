import React from "react";
import product1 from "../Images/Products1.png";
import "./SingleProduct.css";
import AppForm from "../AppForm/AppForm";
import { Field } from "formik";

const SingleProductScreen = ({
  initialValues,
  handleSubmit,
  handleAddToWishlist,
  data,
  wishListData,
}) => {
  return (
    <AppForm initialValues={initialValues} handleSubmit={handleSubmit}>
      <FormFields
        // data={data} quantity={quantity} setQuantity={setQuantity}
        data={data}
        handleAddToWishlist={handleAddToWishlist}
        wishListData={wishListData}
      />
    </AppForm>
  );
};

export default SingleProductScreen;

function FormFields({ handleAddToWishlist, data, wishListData }) {
  console.log("single", data);
  return (
    <>
      <section className="single_product_detail_section">
        <div className="custom_container">
          <div className="single_product_detail">
            <div className="single_product_figure">
              <img src={product1} alt="Img" />
            </div>
            <div className="single_product_data">
              <h3>{data.name}</h3>
              <div className="rating_fields">
                <span>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <h5>(3)</h5> Reviews
                </span>
              </div>
              <p>{data.description}</p>

              <h5>
                Availability : <strong>In stock</strong>
              </h5>
              <h5>
                Tags : <strong>{data.category}</strong>
              </h5>

              <div className="size_color_filels">
                <div className="size_color">
                  <label>Material</label>
                  <Field name="color" as="select" required>
                    <option selected disabled value="">
                      Color
                    </option>
                    <option value="white">White</option>
                    <option value="Golden">Golden</option>
                    <option value="gray">Gray</option>
                  </Field>
                </div>
                <div className="size_color">
                  <label>size</label>
                  <Field name="size" as="select" required>
                    <option selected disabled value="">
                      size
                    </option>
                    <option value="L">Large</option>
                    <option value="S">Small</option>
                    <option value="M">Medium</option>
                  </Field>
                </div>
              </div>

              <div className="size_color_filels">
                <div className="size_color">
                  <Field name="quantity" type="number" required min="1" />
                </div>
                <div className="size_color">
                  <button type="submit">Add to Cart</button>
                </div>
                <div className="size_color">
                  <button
                    type="button"
                    onClick={() => handleAddToWishlist(data._id)}
                  >
                    Add to Wishlist
                  </button>
                </div>
              </div>
              <p style={{ color: "black" }}>
                {wishListData && wishListData.message}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
