import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
// import useApi from "../../../hooks/useApi";
import OrderHistoryScreen from "./OrderHistoryScreen";
import * as api from "../../api/api";
import useApi from "../../hooks/useApi";
const OrderHistory = () => {
  const [search, setSearch] = useState("");
  const [searchedUsers, setSearchedUsers] = useState([]);
  const { request, data } = useApi(api.getAllOrders);
  useEffect(() => {
    async function fetchData() {
      await request();
    }
    fetchData();
  }, []);
  function handleChange({ target }) {
    setSearch(target.value);
    setSearchedUsers(
      data.orders.filter((element) =>
        element.user.firstName.includes(target.value)
      )
    );
  }

  return (
    <Layout>
      {data && (
        <OrderHistoryScreen
          search={search}
          handleChange={handleChange}
          searchedUsers={searchedUsers}
          data={data}
        />
      )}
    </Layout>
  );
};

export default OrderHistory;
