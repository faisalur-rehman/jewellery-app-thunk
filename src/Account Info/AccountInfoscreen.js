import React from "react";
import "./AccountInfo.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../SignUp/FormikControl";
import UserOrders from "../UserOrders/UserOrders";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  password: Yup.string()
    .min(8, "Minimum 8 characters required.")
    .required("Required"),
  mobileNo: Yup.number().required("Required"),
  address: Yup.string().required("Required"),
});

const AccountInfoScreen = ({ onSubmit, initialValues }) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize={true}
      >
        {(formik) => {
          return (
            <section className="sign_up_section">
              <div className="signup_container">
                <h2>Your account</h2>
                <div className="signup_main">
                  <div className="signup_form">
                    <Form>
                      <div className="signup_input_field">
                        <div className="input_field">
                          <label>
                            First Name <span>*</span>
                          </label>
                          <FormikControl
                            control="input"
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            disabled
                          />
                        </div>
                        <div className="input_field">
                          <label>
                            Last Name <span>*</span>
                          </label>
                          <FormikControl
                            control="input"
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            disabled
                          />
                          {/* <input type="text" placeholder="Last Name" /> */}
                        </div>
                        <div className="input_field">
                          <label>
                            Email Address <span>*</span>
                          </label>
                          <FormikControl
                            control="input"
                            type="email"
                            name="email"
                            placeholder="Email"
                            disabled
                          />
                          {/* <input type="email" placeholder="Email Address"/> */}
                        </div>
                        <div className="input_field">
                          <label>
                            Mobile <span>*</span>
                          </label>
                          <FormikControl
                            control="input"
                            type="text"
                            name="mobileNo"
                            placeholder="Mobile"
                            disabled
                          />

                          {/* <input type="number" placeholder="Mobile"/> */}
                        </div>

                        <div className="input_field">
                          <label>
                            Address<span>*</span>
                          </label>
                          <FormikControl
                            control="input"
                            type="text"
                            name="address"
                            placeholder="Address"
                            disabled
                          />

                          {/* <input type="number" placeholder="Mobile"/> */}
                        </div>
                        <p style={{ color: "red" }}>
                          {/* {error.data && error.data.message} */}
                        </p>
                      </div>
                      {/* <div className="submit_btn">
                        <button type="submit">Update Profile</button>
                      </div> */}
                    </Form>
                  </div>
                </div>
              </div>
            </section>
          );
        }}
      </Formik>
      <UserOrders />
    </>
  );
};

export default AccountInfoScreen;
