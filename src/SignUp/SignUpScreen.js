import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import FormikControl from "./FormikControl";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  mobileNo: "",
  address: "",
};

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

const SignUpScreen = ({ onSubmit, error }) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <section className="sign_up_section">
              <div className="signup_container">
                <h2>Create Your account</h2>
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
                          />

                          {/* <input type="number" placeholder="Mobile"/> */}
                        </div>
                        <div className="input_field">
                          <label>
                            Password <span>*</span>
                          </label>
                          <FormikControl
                            control="input"
                            type="text"
                            name="password"
                            placeholder="Password"
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
                          />

                          {/* <input type="number" placeholder="Mobile"/> */}
                        </div>
                        <p style={{ color: "red" }}>
                          {error.data && error.data.message}
                        </p>
                      </div>
                      <div className="submit_btn">
                        <button type="submit">Create New Account</button>
                        {/* <button type="submit">Create New Account</button> */}
                      </div>
                    </Form>
                    <div className="sign_up_btn">
                      <span>
                        Already have an account?
                        <Link to="/login"> Login Here</Link>
                      </span>
                    </div>
                    <div className="policy_check">
                      <p>
                        By signing up, you agree to our{" "}
                        <Link to="/readme"> Terms of Use</Link> and have read
                        and acknowledge our{" "}
                        <Link to="/readme"> Privacy Policy</Link>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }}
      </Formik>
    </>
  );
};

export default SignUpScreen;
