import React, { useEffect, useState } from "react";
import useApi from "../hooks/useApi";
import AccountInfoscreen from "./AccountInfoscreen";
import * as api from "../api/api";

let initialValues = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  mobileNo: "",
  address: "",
};

const AccountInfo = () => {
  const [value, setValue] = useState({});
  const { request, data } = useApi(api.getProfile);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await request(localStorage.getItem("id"));
        console.log("dataaa", data);
        initialValues = data.user;
        setValue((prev) => ({ ...prev, ...data.user }));
      } catch (_) {}
    }
    fetchData();
  }, []);

  const onSubmit = async (values, submitProps) => {
    console.log("Form data", values);
    submitProps.setSubmitting(false);
    // try {
    //   await request(values);
    // } catch (_) {}
  };
  return (
    <>
      {data && (
        <AccountInfoscreen initialValues={initialValues} onSubmit={onSubmit} />
      )}
    </>
  );
};

export default AccountInfo;
