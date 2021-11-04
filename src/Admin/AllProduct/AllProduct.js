import React, { useEffect } from "react";
// import useApi from "../../../hooks/useApi";
import AllProductScreen from "./AllProductScreen";
import * as api from "../../api/api";
import Layout from "../Layout/Layout";

import useApi from "../../hooks/useApi";

const AllProduct = () => {
  const { request, data } = useApi(api.getProducts);
  const deleteProduct = useApi(api.removeProduct);
  // const { data, request } = useApi(api.getArticles);
  // const deleteArticle = useApi(api.deleteArticle);
  useEffect(() => {
    async function fetchData() {
      try {
        await request();
      } catch (error) {}
    }
    fetchData();
  }, []);

  async function handleDelete(id) {
    console.log("id", id);
    try {
      const data = await deleteProduct.request(id);
      window.location.reload();
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <Layout>
      {data && <AllProductScreen data={data} handleDelete={handleDelete} />}
    </Layout>
  );
};

export default AllProduct;
