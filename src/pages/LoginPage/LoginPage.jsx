import { message, Card } from "antd";

import React, { Component, useState } from "react";
import { Redirect } from "react-router-dom";
import Redirectable from "../../components/Redirectable";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { routes } from "../../router";
import { login, clearUserErrors } from "../../redux/user/actions";
import LoginForm from "../../components/LoginForm";

let n = 0;
const LoginPage = ({ error, login, loggedIn, clearUserErrors }) => {
  const [loading, setLoading] = useState(false);
  if (error) {
    n++;
    message.error("Error: " + error.message);
  }

  if (loggedIn) {
    clearUserErrors();
  }
  // TODO loading state machine
  return (
    <div>
      {loggedIn ? <Redirect to="/dashboard" /> : null}
      <h1>{routes.login.name}</h1>
      <LoginForm
        onSubmit={(e, p) => {
          setLoading(true);
          login(e, p);
        }}
        loading={error == undefined && loading}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
    error: state.user ? state.user.error : null,
    loggedIn: state.user ? state.user.loggedIn : false
  };
};

export default connect(mapStateToProps, { login, clearUserErrors })(
  Redirectable(LoginPage)
);
