import React, { useEffect } from "react";
import CategoriesScreen from "./CategoriesScreen";
import * as api from "../api/api";
import useApi from "../hooks/useApi";

const Categories = () => {
  const { request, data } = useApi(api.getAllCategories);
  useEffect(() => {
    async function fetchData() {
      await request();
    }
    fetchData();
  }, []);
  return (
    <>
      <CategoriesScreen data={data} />
    </>
  );
};

export default Categories;
