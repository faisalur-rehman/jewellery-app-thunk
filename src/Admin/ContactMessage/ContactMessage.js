import React, { useEffect } from "react";
import useApi from "../../../hooks/useApi";
import ContactMessageScreen from "./ContactMessageScreen";
import * as api from "../../../api/api";
import Layout from "../../Layout/Layout";
const ContactMessage = () => {
  const { data, request } = useApi(api.allContactMessages);
  useEffect(() => {
    async function fetchData() {
      try {
        await request();
      } catch (error) {}
    }
    fetchData();
  }, []);
  return <Layout>{data && <ContactMessageScreen data={data} />}</Layout>;
};

export default ContactMessage;
