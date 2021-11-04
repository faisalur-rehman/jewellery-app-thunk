import React, { useState } from "react";
import LoginScreen from "./LoginScreen";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { userLogin } from "../store/features/auth";
import { useSelector } from "react-redux";
import { login } from "../store/features/auth";

const Login = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState("");
  const onSubmit = async (values, submitProps) => {
    submitProps.setSubmitting(false);
    dispatch(login({ ...values, setError }));
  };
  auth.user && history.push("/all-users");
  auth.user && auth.user.isAdmin === false && history.push("/");
  auth.user && auth.user.isAdmin === false && window.location.reload();

  return (
    <>
      <LoginScreen onSubmit={onSubmit} error={error} />
    </>
  );
};

export default Login;
