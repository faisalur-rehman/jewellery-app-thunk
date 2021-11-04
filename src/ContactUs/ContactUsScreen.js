import { Field } from "formik";
import React from "react";
import AppForm from "../AppForm/AppForm";
import "./ContactUs.css";
// import {Link} from 'react-router-dom';

const ContactUsScreen = ({ initialValues, handleSubmit, data }) => {
  return (
    <AppForm initialValues={initialValues} handleSubmit={handleSubmit}>
      <FormFields data={data} />
    </AppForm>
  );
};

export default ContactUsScreen;

function FormFields({ data }) {
  return (
    <section className="contact_us_section">
      <div className="contact_us_container">
        <h2>Contact Us</h2>
        <div className="contact_us">
          <div className="contact_us_form">
            <div className="contact_us_field">
              <div className="input_field">
                <label>
                  First Name <span>*</span>
                </label>
                <Field
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="input_field">
                <label>
                  Last Name <span>*</span>
                </label>
                <Field
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="input_field">
                <label>
                  Email Address <span>*</span>
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>
            <div className="message_input_field">
              <label>
                Message <span>*</span>
              </label>
              <Field
                name="message"
                as="textarea"
                placeholder="Message"
                required
              />
            </div>
            {data && (
              <p style={{ color: "white" }}>
                Thank you for contacting us. We will get back to you very soon
              </p>
            )}
            <div className="submit_btn">
              <button type="submit">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
