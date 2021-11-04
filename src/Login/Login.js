import React, { useState } from "react";
import LoginScreen from "./LoginScreen";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/features/auth";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState("");
  const onSubmit = async (values, submitProps) => {
    submitProps.setSubmitting(false);
    dispatch(login({ ...values, setError, history }));
  };

  return (
    <>
      <LoginScreen onSubmit={onSubmit} error={error} />
    </>
  );
};

export default Login;
