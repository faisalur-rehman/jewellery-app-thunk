import React from "react";
import ContactUsScreen from "./ContactUsScreen";
import * as api from "../api/api";
import useApi from "../hooks/useApi";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const ContactUs = () => {
  const { request, data } = useApi(api.contactUs);
  async function handleSubmt({ formValues }) {
    console.log("form", formValues);
    try {
      await request(formValues);
    } catch (_) {}
  }
  return (
    <>
      <ContactUsScreen
        initialValues={initialValues}
        handleSubmit={handleSubmt}
        data={data}
      />
    </>
  );
};

export default ContactUs;
