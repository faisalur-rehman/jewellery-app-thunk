import { Field } from "formik";
import React from "react";
import AppForm from "../../AppForm/AppForm";

function AddproductScreen({
  initialValues,
  handleSubmit,
  handleImage,
  response,
  data,
}) {
  return (
    <AppForm initialValues={initialValues} handleSubmit={handleSubmit}>
      <FormFields handleImage={handleImage} response={response} data={data} />
    </AppForm>
  );
}
export default AddproductScreen;

function FormFields({ handleImage, response, data }) {
  return (
    <div>
      <section
        class="profile_section"
        id="add_new_product"
        style={{ visibility: "visible", display: "block" }}
      >
        <div class="add_product_container">
          <div class="profile_section_data">
            <h2>Update Product</h2>
            <div class="profile_form">
              {/* <div class="profile_section_one">
                <div class="upload_pic">
                  <input
                    type="file"
                    placeholder="change"
                    onChange={handleImage}
                    required
                  />
                </div>
              </div> */}
              <div class="profile_section_two">
                <div class="profile_name">
                  <label>Product Name</label>
                  <Field name="name" type="text" placeholder="" required />
                </div>
              </div>

              <div class="profile_section_two">
                <div class="profile_name">
                  <label>IsFeatured</label>
                  <Field as="select" name="isFeatured" required>
                    <option selected={true} disabled value="">
                      Select
                    </option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </Field>
                </div>
              </div>
              <div class="profile_section_two">
                <div class="profile_name">
                  <label>Size</label>
                  <Field as="select" name="size" required>
                    <option selected={true} disabled value="">
                      Select
                    </option>
                    <option value="L">Large</option>
                    <option value="M">Medium</option>
                    <option value="S">Small</option>
                  </Field>
                </div>
              </div>
              <div class="profile_section_two">
                <div class="profile_name">
                  <label>Product Description</label>
                  <Field name="description" as="textarea" required />
                </div>
              </div>
              <div class="profile_section_two">
                <div class="profile_name">
                  <label>Color</label>
                  <Field name="color" placeholder="" required />
                </div>
              </div>
              <div class="profile_section_two">
                <div class="profile_name">
                  <label>price</label>
                  <Field name="price" type="number" placeholder="" required />
                </div>
              </div>
              <div class="profile_section_two">
                <div class="profile_name">
                  <label>Category</label>
                  <Field name="category" placeholder="" required />
                </div>
              </div>
              {/* <div class="profile_section_two">
                <div class="profile_name">
                  <label>IsFeatured</label>
                  <Field name="isFeatured" placeholder="" required />
                </div>
              </div> */}
            </div>
            <p style={{ color: "green" }}>{response}</p>
            {data && (
              <p style={{ color: "green" }}>Product Updated Successfully</p>
            )}
            <div class="profile_save_btn">
              <button type="submit">Save</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
