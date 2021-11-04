import React from "react";
import UserOrdersScreen from "./UserOrdersScreen";
import * as api from "../api/api";
import useApi from "../hooks/useApi";
import { useEffect } from "react";

const UserOrders = () => {
  const { request, data } = useApi(api.allUsersOrder);
  useEffect(() => {
    async function fetchData() {
      try {
        await request();
      } catch (_) {}
    }
    fetchData();
  }, []);
  return <div>{data && <UserOrdersScreen data={data} />}</div>;
};

export default UserOrders;
