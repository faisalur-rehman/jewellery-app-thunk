import React, { useEffect, useState } from "react";
import UpdateproductScreen from "./UpdateProductScreen";
import * as api from "../../api/api";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import useApi from "../../hooks/useApi";

let initialValues = {
  name: "",
  description: "",
  size: "",
  color: "",
  category: "",
  isFeatured: "",
  price: "",
};

const UpdateProduct = () => {
  const [value, setValue] = useState({});
  const { id } = useParams();
  const { request } = useApi(api.getSingleProduct);
  const updateArticles = useApi(api.updateProduct);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await request({ id });
        console.log("data, yup", data);
        initialValues = data.product;
        console.log("initial", initialValues);
        setValue((prev) => ({ ...prev, ...data.product }));
        // initialValues.name = data.article.name;
        // initialValues.description = data.article.description;
        // initialValues.style = data.article.style;
        // initialValues.type = data.article.type;
        // initialValues.releaseDate = new Date(
        //   data.article.releaseDate
        // ).toDateString();
        // initialValues.price = data.article.price;

        // setValue(initialValues);
        // console.log("datra", data);
      } catch (error) {}
    }
    fetchData();
  }, []);
  async function handleSubmit({ formValues }) {
    console.log("form", formValues);
    try {
      await updateArticles.request({ ...formValues, id: id });
    } catch (_) {}
  }
  return (
    <Layout>
      <UpdateproductScreen
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        data={updateArticles.data}
      />
    </Layout>
  );
};

export default UpdateProduct;
