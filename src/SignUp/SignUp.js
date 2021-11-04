import React from "react";
import SignUpScreen from "./SignUpScreen";
import * as api from "../api/api";
import useApi from "../hooks/useApi";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const { request, error } = useApi(api.signup);
  const history = useHistory();

  const onSubmit = async (values, submitProps) => {
    console.log("Form data", values);
    submitProps.setSubmitting(false);
    try {
      const { data } = await request(values);
      history.push("/login");
    } catch (_) {}
  };
  return (
    <>
      <SignUpScreen onSubmit={onSubmit} error={error} />
    </>
  );
};

export default SignUp;
