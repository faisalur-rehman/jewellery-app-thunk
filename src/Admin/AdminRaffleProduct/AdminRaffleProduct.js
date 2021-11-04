import React, { useEffect } from "react";
import useApi from "../../../hooks/useApi";
import RaffleProductScreen from "./RaffleProductScreen";
import * as api from "../../../api/api";
import Layout from "../../Layout/Layout";

const AdminRaffleProduct = () => {
  const { data, request } = useApi(api.getAllRaffleAdmin);
  const declareWinner = useApi(api.declareWinner);
  // const deleteArticle = useApi(api.deleteArticle);
  useEffect(() => {
    async function fetchData() {
      try {
        await request();
      } catch (error) {}
    }
    fetchData();
  }, []);

  async function handleWinner(id) {
    try {
      await declareWinner.request({ raffleId: id });
      window.location.reload();
    } catch (_) {}
  }

  return (
    <Layout>
      {data && <RaffleProductScreen data={data} handleWinner={handleWinner} />}
    </Layout>
  );
};

export default AdminRaffleProduct;
