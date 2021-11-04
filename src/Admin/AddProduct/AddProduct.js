import axios from "axios";
import React from "react";
import { useState } from "react";
import Layout from "../Layout/Layout";
import AddproductScreen from "./AddProductScreen";
import * as api from "../../api/api";
import useApi from "../../hooks/useApi";

const initialValues = {
  name: "",
  description: "",
  size: "",
  color: "",
  category: "",
  isFeatured: "",
  price: "",
  isAvailable: "",
};

const AddProduct = () => {
  const [file, setFile] = useState();

  const [response, setResponse] = useState("");
  const { request, data } = useApi(api.addproduct);
  async function handleSubmit({ formValues }) {
    let formData = new FormData();
    let isF = formValues.isFeatured === "true" ? true : false;
    formValues.isFeatured = isF;
    console.log("form", formValues);
    formData.append("image", file);
    try {
      const { data } = await request(formValues);
      try {
        const response = await axios.patch(
          `https://jewlery-restapi.herokuapp.com/product/upload/${data.product._id}`,
          formData,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
              "Content-Type": `multipart/form-data`,
            },
          }
        );
        console.log("response", response);

        setResponse(data.message);
      } catch (error) {
        console.log(error.response);
      }
    } catch (_) {}
  }

  function handleImage({ target }) {
    setFile(target.files[0]);
  }
  return (
    <Layout>
      <AddproductScreen
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        handleImage={handleImage}
        response={response}
        data={data}
      />
    </Layout>
  );
};

export default AddProduct;
