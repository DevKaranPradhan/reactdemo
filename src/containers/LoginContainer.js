import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { Redirect } from "react-router-dom";

import LoginComponent from "../components/LoginComponent";

import {
  loginRequest,
  setErrors,
  resetErrors,
} from "../actions/loginActions";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.loginReducer);
  const {
    username,
    password,
    usernameError,
    passwordError,
    userDetails,
  } = result;

  const schema = yup.object().shape({
    username: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

  const validateData = () => {
    dispatch(resetErrors());
    schema.isValid({ username, password }).then(function (valid) {
      if (!valid) {
        schema
          .validate({ username, password }, { abortEarly: false })
          .catch((err) => {
            err.inner.forEach((ele) => {
              dispatch(setErrors(ele));
            });
          });
      } else {
        dispatch(loginRequest({ username, password }));
      }
    });
  };

  if (userDetails.auth_token) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <LoginComponent
      validateData={validateData}
      dispatch={dispatch}
      usernameError={usernameError}
      passwordError={passwordError}
      username={username}
      password={password}
    />
  );
};

export default LoginContainer;
