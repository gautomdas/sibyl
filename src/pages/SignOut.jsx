import React from "react";
import Redirectable from "../components/Redirectable";
import { connect } from "react-redux";
import { logout } from "../redux/user/actions";

const SignOut = ({ dispatch, redirect }) => {
  dispatch(logout());
  redirect("/");
  return <div>null</div>;
};

export default Redirectable(connect()(SignOut));
